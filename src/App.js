import React, {useEffect, useState} from 'react'
import './App.css';
import Buttons from "./Components/Buttons/ButtonsOfStopwatch";
import Display from "./Components/Display/DisplayOfStopwatch";
import {interval, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";


const App = () => {
    const [time, setTime] = useState(0);
    const [state, setState] = useState(0);
    const [isActive, setIsActive] = useState(false)


    useEffect(() => {
        const unsubscribe = new Subject();
        interval(1000).pipe(
            takeUntil(unsubscribe)
        )
            .subscribe(() => {
                if (isActive) {
                    setTime(second => second + 1);
                }

            });
        return () => {
            unsubscribe.next();
            unsubscribe.complete();
        };
    }, [isActive])


    const start = () => {
        setState(1);
        setIsActive(true);

    }

    const stop = () => {
        setState(0);
        setTime(0);
        setIsActive(false)
    }


    const reset = () => {
        setTime(0);
    }

    const wait = () => {
        setIsActive(false)
        setState(0);
    }




    return (
        <div className='container'>
            <div className="App">
                <Display time={time}/>
                <Buttons
                    reset={reset}
                    stop={stop}
                    start={start}
                    state={state}
                    wait={wait}
                />
            </div>
        </div>
    );
}

export default App;