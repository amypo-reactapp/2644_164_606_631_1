import React from 'react';
const ReactLogo = () =>
(
    <img
    src="https://th.bing.com/th/id/OIP.EntHChgUyirgbZ9A3zTxkAHaFj?w=207&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt="React Logo"
    style={{maxWidth:'100px',maxHeight:'100px'}}
    />
);
const Img = () =>
{
    return(
        <div>
            <ReactLogo/>
        </div>
    )
}
export default Img;