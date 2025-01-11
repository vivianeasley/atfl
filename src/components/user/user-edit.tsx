import { useMemo, useState } from 'react';
import { Button, Input, Divider, Text } from '@mantine/core';
import { AvatarSVG } from '../avatar/avatar';
import { useStore } from "../../stores/store"

import classes from './user.module.css';

export function UserEdit() {

  const userId = useStore((state) => state.userId)
  const name = useStore((state) => state.name)
  const imgIndex = useStore((state) => state.imgIndex)
  const setName = useStore((state) => state.setName)
  const setImgIndex = useStore((state) => state.setImgIndex)
  const setImgId = useStore((state) => state.setImgId)
  const [value, setValue] = useState(name);

  const allLetterOptions = useMemo(() => {
    function generateDigitLetterCombinations(): string[] {
      const combinations: string[] = [];
      const digits: string = '0123456789';
      const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      for (const d of digits) {
        for (const l of letters) {
          combinations.push(d + l);
        }
      }

      return combinations;
    }

    return generateDigitLetterCombinations();
  }, []);

  return (
    <div className={classes.userWrapper}>
      <div className={classes.avatarWrapper}>
        <Button
          size="xs"
          onClick={() => {
              const newVal = imgIndex ? imgIndex - 1 : allLetterOptions.length - 1;
              setImgIndex(newVal)
              setImgId(allLetterOptions[newVal])
            }
          }
        >
          {'<'}
        </Button>
        <div className={classes.avatar}>
          <AvatarSVG hash={`${imgIndex}${userId}`} />
        </div>
        <Button
          size="xs"
          onClick={() => {
              const newVal = imgIndex && imgIndex > allLetterOptions.length - 2 ? 1 : imgIndex + 1;
              setImgIndex(newVal ?? 1)
              setImgId(allLetterOptions[newVal])
            }
          }
        >
          {'>'}
        </Button>
      </div>

      
      <div>
      <Divider my="sm" />
      <Text size="md" fw={500}>Set Name:</Text>
      <Input value={value} onChange={(event) => {
        setValue(event.currentTarget.value)
        setName(event.currentTarget.value)
        }} />
      </div>
    </div>
  );
}
