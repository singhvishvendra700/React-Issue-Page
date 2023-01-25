import React from 'react'
import CustomTabs from './CustomTabs'
import HeaderRightStack from './HeaderRightStack'
import { GoRepo } from 'react-icons/go'
import { Box, Chip, Typography } from '@mui/material'
import { StyledCustomTabsMobileWrapper, StyledCustomTabsWrapper } from './config'
import CustomMenu from './CustomMenu'

const Header = () => {
    const tabs = ["Code", "Issues", "Pull requests", "Actions", "Projects", "Wiki", "Security", "Insights"]
    return (
        <Box sx={{ background: "#f6f8fa", padding: "10px 100px 0px 100px", width: "100%", boxSizing: "border-box" }}>
            <Box sx={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", marginRight: "50px" }}>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
                    <GoRepo />
                    <Typography sx={{ color: "#0969da", fontSize: "18px" }}>facebook / <span style={{ fontWeight: 600 }}>react</span></Typography>
                    <Chip label={<Typography sx={{ color: "#57606a" }}>Public</Typography>} sx={{ background: "none", border: "1px solid #57606a" }} size='small' />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <HeaderRightStack />
                </Box>
                <StyledCustomTabsMobileWrapper>
                    <CustomMenu array={tabs} />
                </StyledCustomTabsMobileWrapper>
            </Box>
            <StyledCustomTabsWrapper>
                <CustomTabs />
            </StyledCustomTabsWrapper>

        </Box >
    )
}

export default Header
