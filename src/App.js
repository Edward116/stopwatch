import React, {useState} from 'react'
import './App.css';
import Buttons from "./Components/Buttons/ButtonsOfStopwatch";
import Display from "./Components/Display/DisplayOfStopwatch";
import {interval} from "rxjs";


function App() {
    const [time, setTime] = useState({h: 0, m: 0, s: 0});
    const [state, setState] = useState(0);
    const [int, setInt] = useState();


    const run = () => {
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
    };

    /*const start = () =>{
        setState(1)
        const start = interval(1000).subscribe(run)

    }*/

    const start = () => {
        setState(1);
        setInt(setInterval(run, 1000))

    }

    const stop = () => {
        setState(0);
        setTime({h: 0, m: 0, s: 0});
        clearInterval(int);
    }

    /*const stop = () => {
        setState(0);
        const start = interval(1000).subscribe(run);
        start.unsubscribe(); //not working
    }*/

    const pause = () => {
        setState(0);
        clearInterval(int);

    }


    /*const reset = new Observable(function subscribe (subscriber) {
        setTime({h:0, m:0, s:0})
        clearInterval(int);
        setInt(setInterval(run, 1000));
    })*/

    return (
        <div className='container'>
            <div className="App">
                <Display time={time}/>
                <Buttons reset={pause} stop={stop} start={start} state={state}/>
            </div>
        </div>
    );
}

export default App;
