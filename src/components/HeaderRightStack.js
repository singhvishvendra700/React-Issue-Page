import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { VscRepoForked } from "react-icons/vsc";
import { Box, Typography } from '@mui/material';
import { CustomHeaderRightStackWrapper } from './config';


const HeaderRightStack = () => {
    const boxStyle = {
        display: "flex", flexDirection: "row", alignItems: "center", border: "1px solid grey", borderRadius: "10px", padding: "2px 10px", margin: 0,
    }
    return (
        <CustomHeaderRightStackWrapper>
            <Box style={boxStyle}>
                <Box sx={{ display: "flex" }}>
                    <IoIosNotificationsOutline size={"15px"} />
                </Box>
                <Typography sx={{ margin: 0, fontSize: "12px", }}>Notifications</Typography>
            </Box>
            <Box sx={{ display: "flex", border: "1px solid grey", borderRadius: "10px", }}>
                <Box sx={{ display: "flex", padding: "5px 15px", borderRight: "1px solid grey" }}>
                    <AiOutlineStar size={"15px"} />
                    <Typography sx={{ fontSize: "12px", }}>Star</Typography>
                </Box>
                <Box sx={{ background: "#ffffff", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", padding: "5px 15px" }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>18k</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", border: "1px solid grey", borderRadius: "10px", }}>
                <Box sx={{ display: "flex", padding: "5px 15px", borderRight: "1px solid grey" }}>
                    <VscRepoForked size={"15px"} />
                    <Typography sx={{ fontSize: "12px", }}>Fork</Typography>
                </Box>
                <Box sx={{ background: "#ffffff", borderBottomRightRadius: "10px", borderTopRightRadius: "10px", padding: "5px 15px" }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>28.8k</Typography>
                </Box>
            </Box>
        </CustomHeaderRightStackWrapper>)
}

export default HeaderRightStack
