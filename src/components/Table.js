import React, { useEffect, useState } from 'react'
import { TbCircleDot } from "react-icons/tb"
import { BsCheck2 } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"
import { Box, Divider, Typography } from '@mui/material'
import TableList from './TableList'
import { MdLightbulbOutline } from "react-icons/md"
import FooterTable from './FooterTable'
import { StyledBoxTableWrapper, StyledTableHeaderWrapper, StyledTableHeaderWrapperMenu } from './config'
import CustomMenu from './CustomMenu'

const Table = () => {
    const [data, setData] = useState()
    const [openIssues, setOpenIssues] = useState()
    const rightArray = ["Author", "Label", "Projects", "Milestones", "Assignee", "Sort"]
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
            <StyledBoxTableWrapper>
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
                <StyledTableHeaderWrapper>
                    {rightArray.map((item, index) => {
                        return (
                            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                                <Typography sx={{ color: "#57606a" }}>{item}</Typography>
                                <IoMdArrowDropdown color='#57606a' />
                            </Box>
                        )
                    })}
                </StyledTableHeaderWrapper>
                <StyledTableHeaderWrapperMenu><CustomMenu array={rightArray} /></StyledTableHeaderWrapperMenu>
            </StyledBoxTableWrapper>
            <Box sx={{
                display: "flex", gap: "10px", flexDirection: "column", width: "70%", boxSizing: "border-box", border: "1px solid #e1e4e8",
            }}>
                {data && <TableList data={data} />}
            </Box>
            <Box sx={{ display: "flex", margin: "30px 0px", }}>
                <MdLightbulbOutline size={"18px"} />
                <Typography sx={{ lineHeight: 1.5, fontSize: "14px", color: "#57606a" }}><b>ProTip!</b> What's not been updated in a month:</Typography>
                <Typography sx={{ lineHeight: 1.5, fontSize: "14px", color: "#0969da" }}>Updated 2021-08-17</Typography>
            </Box>
            <Divider style={{ width: '70%', margin: "10px 0px" }} />
            <br />
            <FooterTable />
        </Box >
    )
}

export default Table
