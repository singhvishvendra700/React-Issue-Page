import React from 'react'
import CustomTabs from './CustomTabs'
import HeaderRightStack from './HeaderRightStack'
import { GoRepo } from 'react-icons/go'
import { Box, Chip, Typography } from '@mui/material'

const Header = () => {
    return (
        <Box sx={{ background: "#f6f8fa", padding: "10px 100px 0px 100px" }}>
            <Box sx={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", marginRight: "50px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                    <GoRepo />
                    <Typography sx={{ color: "#0969da", fontSize: "20px" }}>facebook / <span style={{ fontWeight: 600 }}>react</span></Typography>
                    <Chip label={<Typography sx={{ color: "#57606a" }}>Public</Typography>} sx={{ background: "none", border: "1px solid #57606a" }} size='small' />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <HeaderRightStack />
                </Box>
            </Box>
            <Box sx={{ marginTop: "2%" }}>
                <CustomTabs />
            </Box>
        </Box>
    )
}

export default Header
