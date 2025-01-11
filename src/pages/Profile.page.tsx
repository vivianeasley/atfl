import React from 'react';
import { UserEdit } from '@/components/user/user-edit';
import { ActionIcon, useMantineColorScheme, Text, Card, Divider, Button } from '@mantine/core';
import { Sunset } from 'react-game-icons-auto';
import { useNavigate } from 'react-router-dom';
import { MatchType, useStore } from "../stores/store"

import classes from './profile.module.css';

function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid timestamp");
  }

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

  return `${dayOfWeek} ${month} ${day} ${year} at ${hours}:${minutes} ${period}`;
}
export function ProfilePage() {
  const navigate = useNavigate();
  const { toggleColorScheme } = useMantineColorScheme();
  const matches = useStore((state) => state.matches)

  return (
    <div className={classes.profilePageWrapper}>
        <div className={classes.buttonWrapper}>
          <Button size="xs" variant="filled" aria-label="back" onClick={()=>navigate('/')}>
            Back
          </Button>
        </div>

        <div>
        <Text size="xl" fw={700}>Profile</Text>
        <Divider my="md" />
        <div className={classes.profileSection}>
          <Text size="md" fw={500}>Set Profile Image:</Text>
            <UserEdit />
            <Divider my="sm" />
            <div className={classes.settingsSection}>
              <Text size="md" fw={500}>Toggle Day/Night Mode:</Text>
              <ActionIcon variant="filled" aria-label="Settings" onClick={()=>toggleColorScheme()}>
                <Sunset />
              </ActionIcon>
            </div>
          </div>
        </div>
        
        {
          matches.length > 0 ?
          <><Text size="xl" fw={700}>Matches</Text>
          <Divider my="md" /></> :
          null
        }

        {
          matches.map((match:MatchType, key:number)=>{

            return (
              <Card className={classes.card} shadow="sm" padding="lg" radius="md" withBorder key={key+match.opponentId}>
                <div className={classes.text}><Text fw={700}>Opponent:</Text><Text fw={500}>{match.opponentName}</Text></div>
                <div className={classes.text}><Text fw={700}>Result:</Text><Text fw={500}>{match.result}</Text></div>
                <div className={classes.text}><Text fw={700}>Date:</Text><Text fw={500}>{formatTimestamp(match.timestamp)}</Text></div>
              </Card>)
          })
        }
    </div>
  );
}
