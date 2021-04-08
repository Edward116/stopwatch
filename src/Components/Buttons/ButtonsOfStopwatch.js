import React from 'react'





const Buttons = (props) => {
    return (
        <div>
            {(props.state === 0) &&
            <div>
                <button onClick={props.start}>Start</button>
                <button disabled={true}>Stop</button>
            </div>

            }

            {(props.state === 1) &&
            <div>
                <div>
                    <button onClick={props.reset}>Reset</button>
                    <button onClick={props.stop}>Stop</button>
                </div>
                <div>
                    <button onClick={props.wait}>Wait</button>
                </div>
            </div>

            }

        </div>
    );
}


export default Buttons;