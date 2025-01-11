import React from 'react';
import { MatchType, useStore } from "../stores/store"
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';

import classes from './share.module.css';

function arrayToCSV(data: MatchType[], delimiter: string = ','): string {
  if (data.length === 0) {
    return '';
  }

  // Extract keys from the first object as headers
  const headers = Object.keys(data[0]);

  // Map each object to a CSV row
  const rows = data.map((row) =>
    headers.map((header) => {
      const value = row[header as keyof MatchType];
      // Escape double quotes and wrap values in double quotes if necessary
      if (typeof value === 'string' && (value.includes(delimiter) || value.includes('"'))) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value !== null && value !== undefined ? value.toString() : '';
    })
  );

  // Combine headers and rows into a single CSV string
  const csv = [headers.join(delimiter), ...rows.map((row) => row.join(delimiter))].join('\n');

  return csv;
}

const triggerFileDownload = (fileName: string, content: MatchType[], mimeType: string = 'text/csv'): void => {
  const csvContent = arrayToCSV(content)
  const blob = new Blob([csvContent], { type: mimeType });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;

  // Programmatically click the link to trigger the download
  document.body.appendChild(link); // Required for Firefox
  link.click();

  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

const getFormattedDate = (): string => {
  const now = new Date();

  const pad = (num: number): string => num.toString().padStart(2, '0');

  const month = pad(now.getMonth() + 1); // getMonth() is 0-based
  const day = pad(now.getDate());
  const year = now.getFullYear().toString().slice(-2); // Get last two digits of the year
  const hours = pad(now.getHours());

  return `${month}-${day}-${year}-${hours}`;
}

export function SharePage() {
  const navigate = useNavigate();
  const matches = useStore((state) => state.matches)
  const userId = useStore((state) => state.userId)


const handleSendEmail = () => {
  const recipient = 'example@example.com'; // Replace with your email address
  const subject = encodeURIComponent(`match results ${userId}-${getFormattedDate()}`);
  const csv = arrayToCSV(matches)
  const body = encodeURIComponent(csv);

  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

  // Open the mailto link
  window.location.href = mailtoLink;
};

  return (
    <div className={classes.profilePageWrapper}>
        <div className={classes.buttonWrapper}>
          <Button size="xs" variant="filled" aria-label="back" onClick={()=>navigate('/')}>
            Back
          </Button>
        </div>
        <div className={classes.button}>
          <Button fullWidth onClick={()=>{
            triggerFileDownload(`${userId}-${getFormattedDate()}`, matches)

          }}>Download Results</Button>
        </div>
        <div className={classes.button}>
          <Button fullWidth onClick={()=>{
            handleSendEmail()
          }}>Email Results</Button>
        </div>
    </div>
  );
}
