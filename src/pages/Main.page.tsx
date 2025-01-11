import React, { useEffect, useMemo, useState } from 'react'; //, { useState } 
import {  Button, Text, useMantineColorScheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import {  useStore } from "../stores/store"
import { generateRandomHash } from '@/utils/gen-hash';
import { generateCyberpunkName } from '@/utils/gen-name';

import classes from './main.module.css';

export function MainPage() {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);

    // Remove the spinner class after 10 seconds (animation duration)
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000);
  };

  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const userId = useStore((state) => state.userId)
  const setUserId = useStore((state) => state.setUserId)
  const setImgId = useStore((state) => state.setImgId)
  const setName = useStore((state) => state.setName)
  const matches = useStore((state) => state.matches)
  const imgId = useStore((state) => state.imgId)
  const name = useStore((state) => state.name)

  useEffect(()=>{
    if (!userId) {
      const userHash = generateRandomHash(7)
      setUserId(userHash)
      if (!imgId) {
        const imgHash = generateRandomHash(2).substring(0, 2)
        setImgId(imgHash)
      }
      if (!name) {
        const name = generateCyberpunkName()
        setName(name)
      }

      if (!colorScheme) {
        setColorScheme('dark')
      }
    }
  }, [userId])

  const navigate = useNavigate();

  const numberOfWins = useMemo(()=>{
    const num = matches.filter((game) => game.result === "win").length
    return typeof num === "number" ? num : "--"
  }, [matches])

  const percentWins = useMemo(()=>{
    if (matches.length === 0) {
      return 0
    }
    const numberOfWins = matches.filter((game) => game.result === "win")
    return Math.floor((numberOfWins.length * 100) / matches.length);
  }, [matches])

  return (
    <>
      <div className={classes.buttonSectionMain}>
        <div className={classes.buttonSectionRandom}>
          <Text size="lg" fw={700} tt="uppercase">Wins: {numberOfWins}</Text>
          <Text size="lg" fw={700} tt="uppercase">Win Rate: {`${percentWins}%`}</Text>
        </div>

        <div>
          <img 
          onClick={handleClick}
          className={`${isSpinning ? classes.spinner : ''}`}
          src="./atfl.png" alt="Logo" />
        </div>
        <div className={classes.buttonSectionRandom}>
          <Button fullWidth onClick={()=>navigate('/capture')}>START MATCH</Button>
        </div>
        <div className={classes.buttonSectionRandom}>
          <Button fullWidth onClick={()=>navigate('/profile')}>PROFILE</Button>
        </div>
        <div className={classes.buttonSectionRandom}>
          <Button fullWidth onClick={()=>navigate('/share')}>SHARE RESULTS</Button>
        </div>

      </div>
    </>
  );
}
