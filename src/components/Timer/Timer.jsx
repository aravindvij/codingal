import React from 'react';
import { useState, forwardRef, useImperativeHandle } from 'react';

const Timer = forwardRef((props, ref) => {
    const { hours = 0, minutes = 0, seconds = 0 } = props
    const [paused, setPaused] = useState(false);
    const [over, setOver] = useState(false);
    const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

    const tick = () => {
        if (paused || over) return;
        if (h === 0 && m === 0 && s === 0) setOver(true);
        else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s === 0) {
            setTime([h, m - 1, 59]);
        } else {
            setTime([h, m, s - 1]);
        }
    };

    useImperativeHandle(ref, () => ({
        reset() {
            setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
            setPaused(false);
            setOver(false);
        }
    }));

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <div>
            {h > 0 && `${h.toString().padStart(2, '0')}:`}{`${m
                .toString()
                .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}
            {/* <div>{over ? "Time's up!" : ''}</div> */}
            {/* <button onClick={() => setPaused(!paused)}>
                {paused ? 'Resume' : 'Pause'}
            </button>
            <button onClick={() => reset()}>Restart</button> */}
        </div>
    );
});

export default Timer;