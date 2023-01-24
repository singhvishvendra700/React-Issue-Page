import React, { useEffect, useState } from 'react'
import { TbCircleDot } from "react-icons/tb"
import { BsCheck2 } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"
import { Box, Typography } from '@mui/material'
import TableList from './TableList'

const Table = () => {
    const [data, setData] = useState()
    const [openIssues, setOpenIssues] = useState()
    const rightArray = ["Author", "Label", "Projects", "Milestones", "Assignee", "Sort"]
    const mainBoxsx = {
        backgroundColor: "#f6f8fa",
        border: "1px solid #e1e4e8",
        borderRadius: "3px 3px 0 0",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "70%",
        boxSizing: "border-box",
        padding: 2,
        paddingLeft: "1px"
    }
    useEffect(() => {
        const url = "https://api.github.com/repos/facebook/react/issues"
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                setOpenIssues(data?.filter(item => item.state === "open").length)
            });
    }, [])
    return (
        <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column", width: "100%", }}>
            <Box sx={mainBoxsx}>
                <Box sx={{
                    display: "flex", alignItems: "center", gap: "40px", justifyContent: "space-between", marginLeft: "0.6%",
                }}>
                    <Box sx={{ display: "flex", gap: "15px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px", }}>
                            <TbCircleDot size={"20px"} />
                            <Typography sx={{ color: "#24292f", fontWeight: 600, }}>{openIssues} Open</Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <BsCheck2 size={"25px"} />
                            <Typography sx={{ color: "#57606a" }}>10,104 Closed</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    {rightArray.map((item, index) => {
                        return (
                            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                                <Typography sx={{ color: "#57606a" }}>{item}</Typography>
                                <IoMdArrowDropdown color='#57606a' />
                            </Box>
                        )
                    })}
                </Box>
            </Box>
            <Box sx={{
                display: "flex", gap: "10px", flexDirection: "column", width: "70%", boxSizing: "border-box", border: "1px solid #e1e4e8", marginBottom: "5%"
            }}>
                {data && <TableList data={data} />}
            </Box>
        </Box >
    )
}

export default Table
