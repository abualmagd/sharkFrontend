import { List, Box, ListItem, Typography, Divider, ListItemButton, ListItemIcon, ListItemText, Toolbar, Container } from "@mui/material";
import * as React from "react";
import SettingsApplicationsTwoToneIcon from '@mui/icons-material/SettingsApplicationsTwoTone';
import CalendarViewMonthTwoToneIcon from '@mui/icons-material/CalendarViewMonthTwoTone';
import DynamicFeedTwoToneIcon from '@mui/icons-material/DynamicFeedTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ManageSearchTwoToneIcon from '@mui/icons-material/ManageSearchTwoTone';
import WorkspacesTwoToneIcon from '@mui/icons-material/WorkspacesTwoTone';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
import LocalFireDepartmentTwoToneIcon from '@mui/icons-material/LocalFireDepartmentTwoTone';
const barWidth = 200;

function SideBar() {

    const [selectedItem, setSelected] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelected(index);
    }

    const itemStyle = {
        "&.Mui-selected": {
            backgroundColor: "#00ACC2",

        },
        "&.Mui-focused": {
            backgroundColor: "#9B70F5"
        },
        "&:hover": {

            backgroundColor: "#DEE3F0"
        },
        "&.Mui-selected:hover":{
            backgroundColor: "#00ACC2",
        },
       
        borderRadius: "5px",
        justifyContent:"center"

    };

    const iconStyle={
        fontWeight: "400", margin: "auto", padding: "2px", fontSize: "1.5em", bgcolor: "#C2F7F9", borderRadius: "5px" 
    };



    const sideBar = (
        <Container  disableGutters  sx={{display:"flex",position:"fixed"}}>
            <Box sx={{ bgcolor: "#282928", height: "100vh", alignContent: "center"  }}>

                <List sx={{width: {lg:barWidth, md:"58px" ,sm:"58px",xs:"58px"},overflow:"hidden"}} >
                    <ListItem >
                        <ListItemIcon>
                            <LocalFireDepartmentTwoToneIcon sx={{ fontWeight: "400", margin: {lg:"auto"}, padding: "2px", fontSize: "1.5em", bgcolor: "#C2F7F9", borderRadius: "5px" }}/>
                        </ListItemIcon>
                        <Toolbar height={"10px"} disableGutters>
                            <Typography   marginTop={"5px"} variant={"h5"} fontFamily={"Roboto"} fontWeight={"500"} color="#F7FAF8">
                                FlowFed
                            </Typography>
                        </Toolbar>

                    </ListItem >
                    <Divider color={"#F7FAF8"} variant={'middle'}></Divider>
                    <ListItem disablepadding sx={{ marginTop: "10px" ,padding:"5PX"}} >
                        <ListItemButton borderRadius={"10px"} selected={selectedItem === 0} onClick={e => handleListItemClick(e, 0)} sx={itemStyle}>
                            <ListItemIcon >
                                <HomeTwoToneIcon sx={iconStyle} />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ style: { color: "#C9C9BE", fontWeight: "400" } }}>
                                Home
                            </ListItemText>

                        </ListItemButton>
                    </ListItem>

                    <ListItem disablepadding sx={{padding:"5PX"}}  >
                        <ListItemButton borderRadius={"10px"} selected={selectedItem === 1} onClick={e => handleListItemClick(e, 1)} sx={itemStyle}>
                            <ListItemIcon>
                                <ManageSearchTwoToneIcon sx={iconStyle} />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ style: { color: "#C9C9BE", fontWeight: "400" } }}>
                                Search
                            </ListItemText>

                        </ListItemButton>
                    </ListItem>

                    <ListItem disablepadding sx={{padding:"5PX"}}  >
                        <ListItemButton selected={selectedItem === 2} onClick={e => handleListItemClick(e, 2)} sx={itemStyle}>
                            <ListItemIcon>
                                <WorkspacesTwoToneIcon sx={iconStyle} />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ style: { color: "#49D3DB", fontWeight: "400" } }}>
                                Spaces
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablepadding sx={{padding:"5PX"}}  >
                        <ListItemButton selected={selectedItem === 3} onClick={e => handleListItemClick(e, 3)} sx={itemStyle}>
                            <ListItemIcon>
                                <ManageAccountsTwoToneIcon sx={iconStyle}/>
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ style: { color: "#49D3DB", fontWeight: "400" } }}>
                                Accounts
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablepadding sx={{padding:"5PX"}}  >
                        <ListItemButton selected={selectedItem === 4} onClick={e => handleListItemClick(e, 4)} sx={itemStyle}>
                            <ListItemIcon>
                                <CalendarViewMonthTwoToneIcon sx={iconStyle} />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ style: { color: "#49D3DB", fontWeight: "400" } }}>
                                Calender
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablepadding sx={{padding:"5PX"}}  >
                        <ListItemButton selected={selectedItem === 5} onClick={e => handleListItemClick(e, 5)} sx={itemStyle}>
                            <ListItemIcon>
                                <DynamicFeedTwoToneIcon sx={iconStyle} />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ style: { color: "#49D3DB", fontWeight: "400" } }}>
                                Feeds
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablepadding sx={{padding:"5PX"}}  >
                        <ListItemButton selected={selectedItem === 6} onClick={e => handleListItemClick(e, 6)} sx={itemStyle}>
                            <ListItemIcon>
                                <BookmarkTwoToneIcon sx={iconStyle} />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ style: { color: "#49D3DB", fontWeight: "400" } }}>
                                Bookmarks
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablepadding sx={{padding:"5PX"}} >
                        <ListItemButton selected={selectedItem === 7} onClick={e => handleListItemClick(e, 7)} sx={itemStyle}>
                            <ListItemIcon>
                                <SettingsApplicationsTwoToneIcon sx={iconStyle} />
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{ style: { color: "#49D3DB", fontWeight: "400" } }}>
                                Settinges
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>



                </List>
            </Box>
            
            
          
        </Container>
    );

    return (
        <div >
            {sideBar}
        </div>
    );

}

export default SideBar;
