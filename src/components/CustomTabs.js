import React, { useState } from 'react'
import { Tab, Tabs } from '@material-ui/core';
import { BiCode } from "react-icons/bi"
import { VscIssues } from "react-icons/vsc"
import { AiOutlinePullRequest } from "react-icons/ai"
import { BsPlayCircle } from "react-icons/bs"
import { BsBook } from "react-icons/bs"
import { BsShieldExclamation } from "react-icons/bs"
import { VscGraphLine } from "react-icons/vsc"
import { Box, Chip, Typography } from '@mui/material';

const CustomTabs = () => {
    const [value, setValue] = useState(1)
    const tabs = ["Code", "Issues", "Pull requests", "Actions", "Projects", "Wiki", "Security", "Insights"]
    const image = (text) => {
        if (text === "Code") {
            return <BiCode />
        }
        else if (text === "Issues") {
            return <VscIssues />
        }
        else if (text === "Pull requests") {
            return <AiOutlinePullRequest />
        }
        else if (text === "Actions") {
            return <BsPlayCircle />
        }
        else if (text === "Projects") {
            return <BsPlayCircle />
        }
        else if (text === "Wiki") {
            return <BsBook />
        }
        else if (text === "Security") {
            return <BsShieldExclamation />
        }
        else if (text === "Insights") {
            return <VscGraphLine />
        }
        else return null
    }
    const tabBox = (text, value) => {
        const setText = (text) => {
            return (
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px", padding: 0 }}>
                    {image(text)}
                    <Typography sx={{ display: "flex", gap: "10px", alignItems: "center" }}>  {text}
                    </Typography>
                    {text === "Issues" && <Chip size='small' label={365} />}
                    {text === "Pull requests" && <Chip size='small' label={205} />}
                </Box>
            )
        }
        return (
            <Tab key={value} label={setText(text)} value={value} style={{ display: "flex", flexWrap: "wrap", textTransform: "none" }} />
        )
    }
    return (
        <Box sx={{ display: "flex", }}>
            <Tabs
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{ background: "#f6f8fa" }}
                TabIndicatorProps={{ style: { background: "#fd8c73" } }}
            >
                {tabs.map((item, value) => {
                    return tabBox(item, value)
                })}
            </Tabs>
        </Box>
    )
}

export default CustomTabs
