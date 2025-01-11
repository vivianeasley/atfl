import React, { useState } from 'react';
// import {  Button, Text } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
import { useZxing } from "react-zxing";
import { QRCodeSVG } from 'qrcode.react';
import {  Button, Text } from '@mantine/core';
import { useStore } from "../stores/store"
import { useNavigate } from 'react-router-dom';

import classes from './capture.module.css';

export function CapturePage() {
    const [result, setResult] = useState("");

    const userId = useStore((state) => state.userId)
    const name = useStore((state) => state.name)
    const imgId = useStore((state) => state.imgId)

    const { ref } = useZxing({
      onDecodeResult(result) {
        setResult(result.getText());
      },
    });
    const navigate = useNavigate();
    const encodedName = encodeURIComponent(name ? name : '');

    return (
    <div>
        <div className={classes.captureWrapper}>
            {
                result ?
                <div>Opponent QR Code Captured</div> :
                <>
                    <div style={{ position: "relative", width: "100%" }}>
                        <video style={{width:'100%', height: "auto"}} ref={ref} />
                        <svg
                            className="overlay-svg"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            pointerEvents: "none",
                            }}
                            width="100%"
                            height="90%"
                        >
                            <rect
                            x="5"
                            y="5"
                            width="190"
                            height="190"
                            fill="none"
                            stroke="yellow"
                            strokeWidth="2"
                            rx="10" /* Adjust for rounded corners */
                            strokeDasharray="10,5" /* Dash pattern: 10px line, 5px gap */
                            strokeDashoffset="0" /* Offset for animation (can animate this) */
                            />
                        </svg>
                    </div> 
                    <Text ta="center" size="xs">Scan your opponents QR-code</Text>              
                </>

            }
        </div>

        <div className={classes.qrCode}>
            {
                name && imgId && userId ?
                <QRCodeSVG value={`/results?n=${encodedName}&i=${imgId+"-"+userId}`} size={300} />  :
                <div>You must have a name in your profile to proceed</div>
            }
          
        </div>
        <div className={classes.buttonSection}>
            <Button fullWidth onClick={()=>navigate('/')}>Cancel</Button>
            {
                result ?
                <Button fullWidth onClick={()=>{
                    if (result) {
                        navigate(result)
                    }
                }}>Start Match</Button> :
                <Button disabled={Boolean(result)} data-disabled fullWidth>Start Match</Button>
            }
        </div>
    </div>
    );
}
