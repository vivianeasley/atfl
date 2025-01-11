import React, {useState} from 'react';
import { Select, Button } from '@mantine/core';
import { MATCH_RESULT, useStore } from "../stores/store"
import { useNavigate, useSearchParams } from 'react-router-dom';

import classes from './main.module.css';



export function ResultsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [value, setValue] = useState<MATCH_RESULT | null | ''>('');

  const setCurrentMatch = useStore((state) => state.setCurrentMatch)
  const id = searchParams.get('i'); // Get the 'userId' parameter
  const name = searchParams.get('n');

const handleChange = (newValue: string | null) => {
  // Convert the string back to MATCH_RESULT type if needed
  if (newValue === MATCH_RESULT.WIN || newValue === MATCH_RESULT.LOSE || newValue === MATCH_RESULT.DRAW) {
    setValue(newValue);
  } else {
    setValue(null);
  }
};

  // /results?n=Echo%20Ton&i=3275-5a1871ea7a389c
  return (
    <>
      <Select
        label="Your match result:"
        placeholder="Choose one..."
        value={value}
        onChange={(value) => handleChange(value)}
        data={[
          { value: MATCH_RESULT.WIN, label: 'Win' },
          { value: MATCH_RESULT.LOSE, label: 'Lose' },
          { value: MATCH_RESULT.DRAW, label: 'Draw' },
        ]}
      />
      <div className={classes.buttonSectionRandom}>
        {
          value && id && name ?
          <Button fullWidth onClick={()=>{
            if (value && id && name) {
              setCurrentMatch(id, name, value)
              navigate('/')
            }
            }}>Share Results</Button> :
            <Button fullWidth disabled>Share Results</Button>
        }

      </div>
    </>
  );
}
