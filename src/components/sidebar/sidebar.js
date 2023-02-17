import { React, useState} from 'react';
import { Box, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import home from '.pages/home.js'
// import about from '.pages/about.js'
// import submit from '.pages/submit.js'


export const Sidebar = ({handleShift}) => {

    // make the categories slide down
    // allow for selections

    const button_sidebar = (name, page) => {
        return <Button sx = {{ display: "block", margin: "2vh 0vw 1vh 0vw", color: "#57201B", fontSize: "1.5vh"}}>
            <a href={page}
                style = {{
                color: "black", backgroundColor: "none", textDecoration: "none"
                }}>
                <Box sx={{display:"flex", justifyContent:"left", verticalAlign:"center"}}>
                    {name === 'home'
                        ? <HomeIcon sx={{fontSize: "2.5vh", color:"#57201B"}}/>
                        : <CategoryIcon sx={{fontSize: "2.5vh", color:"#57201B", verticalAlign:"center"}}/>
                    }
                    {expand
                        ? <Typography variant="h6" sx={{marginLeft:"10px"}}>{name}</Typography>
                        : <></>
                    }
                </Box>
            </a>
            
            
        </Button>;
    }

    const [expand, setExpand] = useState(true);
    var sidebar_width = "15vw";

    const expandSidebar = () => {
        setExpand(!expand);
        handleShift(expand ? "6vw" : "17vw");
    }

    const Sidebar = () => {
        return <Box sx = {{
                            height: "100vh", 
                            top: "5",

                            width: {sidebar_width}, 
                            backgroundColor: "white",
                            borderRight: "solid 1px"
                            }}
                >
            
            <MenuIcon sx = {{margin:"8px 0 0 0px", fontSize: "4vh", color: "#57201B"}} onClick={expandSidebar}/>

            <>{button_sidebar("home", "/")}</>
            <>{button_sidebar("categories", "/categories")}</>
            <>{button_sidebar("support", "/support")}</>
            <>{button_sidebar("submit", "/submit")}</>
        </Box>
    }

    return <Sidebar/>
    // function App() {
    //     return (
    //       <>
    //         <Router>    
    //           <Sidebar />
    //           <Routes>
    //             <Route path='/' component={home} />
    //             <Route path='/about' component={about} />
    //             <Route path='/submit' component={submit}/>
    //           </Routes>
    //         </Router>
    //       </>
    //     );
        
        
   }

