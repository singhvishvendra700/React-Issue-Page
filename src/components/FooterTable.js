import { Box, Typography } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
const FooterTable = () => {
    const list = ["Terms", "Privacy", "Security", "Status", "Docs", "GitHub", "Contact GitHub", "Pricing", "API", "Training", "Blog", "About"]
    return (
        <Box sx={{ display: "flex", width: "70%", justifyContent: "space-between", marginBottom: "3%" }}>
            {list?.map((item, index) => {
                return (
                    (item === "GitHub") ? (
                        <GitHubIcon key={index} />
                    ) : (
                        <Typography key={index} sx={{ color: "#0969da", fontSize: "12px" }}>{item}</Typography>
                    )
                )
            })}

        </Box>
    )
}

export default FooterTable
