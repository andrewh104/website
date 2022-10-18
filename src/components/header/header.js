import * as React from 'react';
import { Box } from '@mui/system';
// import {logoLong} from "/images/logoLong.jpg";
import "./header.css";

export const Header = () => {
    return(

        <Box className="bar">
            <a href='/'>
                <img src={process.env.PUBLIC_URL + 'images/logoH.jpg'} className="header-logo"/>
            </a>
            <a className="header-item" href='/about'>ABOUT</a>
            <div className='right-group'>
                <a className="header-item" target="_blank" href='https://discord.gg/4crnQu3TSX'>
                    <img src={process.env.PUBLIC_URL + 'images/discord.png'} className="header-logo"/>
                </a>
                <a className="header-item" target="_blank" href='https://github.com/rpi-thrifty'>
                    <img src={process.env.PUBLIC_URL + 'images/github.png'} className="header-logo"/>
                </a>
            </div>
        </Box>
        
    )
}