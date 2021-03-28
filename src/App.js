import React, {useEffect, useState} from 'react'
import './App.css';
import Buttons from "./Components/Buttons/ButtonsOfStopwatch";
import Display from "./Components/Display/DisplayOfStopwatch";



const App = () =>{
    const [time, setTime] = useState({h: 0, m: 0, s: 0});
    const [state, setState] = useState(0);
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (time.m === 60) {
                    time.h++;
                    time.m = 0;
                }
                if (time.s === 60) {
                    time.m++;
                    time.s = 0;
                }
                time.s++;
                return setTime({s: time.s, m: time.m, h: time.h});
            }, 1000);
        } else if (!isActive && time.s !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, time.s]);




    const start = () => {
        setState(1);
        setIsActive(true);

    }

    const stop = () => {
        setState(0);
        setTime({h: 0, m: 0, s: 0});
        setIsActive(false)
    }


    const reset = () => {
        setTime({h: 0, m: 0, s: 0});
    }


    return (
        <div className='container'>
            <div className="App">
                <Display time={time}/>
                <Buttons reset={reset} stop={stop} start={start} state={state}/>
            </div>
        </div>
    );
}

export default App;