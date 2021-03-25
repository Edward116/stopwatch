import React, {useState} from 'react'
import './App.css';
import Display from "./Components/Display/DisplayOfStopwatch";
import Buttons from "./Components/Buttons/ButtonsOfStopwatch";
import {Observable} from "rxjs";

function App() {
    const [time, setTime] = useState({h:0, m:0, s:0});
    const [state, setState] = useState(0);


    const run = () => {
        if(time.m === 60){
            time.h++;
            time.m = 0;
        }
        if(time.s === 60){
            time.m++;
            time.s = 0;
        }
        time.s++;
        return setTime({s:time.s, m:time.m, h:time.h});
    };

    const start = () => {
        run();
        setState(1);
        setInterval(run, 1000)
    }

    const stop = () => {
        clearInterval(run)
        setState(0);
        setTime({h:0, m:0, s:0})
    }




  return (
    <div className="App">
     <Display time={time}/>
     <Buttons stop={stop} start={start} state={state}/>
    </div>
  );
}

export default App;
