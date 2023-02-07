import { React, useState} from 'react';
import { Box, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';





export const Sidebar = ({handleShift}) => {

    // make the categories slide down
    // allow for selections

    const button_sidebar = (name) => {
        return <Button sx = {{ display: "block", margin: "2vh 0vw 2vh 1vw", color: "#57201B", fontSize: "1.5vh" }}>
            <Box sx={{display:"flex", justifyContent:"left", verticalAlign:"center"}}>
                {name === 'home'
                    ? <HomeIcon sx={{fontSize: "2.5vh", color:"#57201B"}}/>
                    : <CategoryIcon sx={{fontSize: "2.5vh", color:"#57201B", verticalAlign:"center"}}/>
                }
                {expand
                    ? <Typography variant="h5" sx={{marginLeft:"10px"}}>{name}</Typography>
                    : <></>
                }
            </Box>
            
        </Button>;
    }

    const [expand, setExpand] = useState(true);
    var sidebar_width = "15vw";

    const expandSidebar = () => {
        setExpand(!expand);
        if(expand){
            sidebar_width = "15vw";
            handleShift("6vw");
        }
        else{
            sidebar_width = "4vw";
            handleShift("17vw");
        }
    }

    const Sidebar = () => {
        return <Box sx = {{
                            height: "95vh", 
                            top: "5",
                            width: {sidebar_width}, 
                            display: "block", 
                            position: "fixed",
                            borderRight: "solid 1px"
                            }}
                >
            
            <MenuIcon sx = {{margin:"8px 0 0 8px", fontSize: "4vh", color: "#57201B"}} onClick={expandSidebar}/>

            <>{button_sidebar("home")}</>
            <>{button_sidebar("categories")}</>
            <>{button_sidebar("support")}</>
        </Box>
    }

    return <Sidebar/>
}