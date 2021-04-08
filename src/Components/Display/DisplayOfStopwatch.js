import React from 'react'


const Display = (props) => {
    let seconds = props.time % 60;
    let minutes = Math.floor(props.time / 60) % 60;
    let hours = Math.floor(props.time / 3600)

    return (
        <div className='display'>
            <span>{(hours >= 10) ? hours : '0' + hours}</span>:
            <span>{(minutes >= 10) ? minutes : '0' + minutes}</span>:
            <span>{(seconds >= 10) ? seconds : '0' + seconds}</span>
        </div>
    );
}


export default Display;
