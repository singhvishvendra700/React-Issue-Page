import { Avatar, Typography } from '@mui/material'
import React from 'react'
import { TbCircleDot } from "react-icons/tb"
import { getDifference } from './config'
import CustomChips from './CustomChips';
import { FaRegCommentAlt } from "react-icons/fa"
import { Box } from "@mui/material"
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component"

const TableList = ({ data }) => {
    const [state, setState] = useState({ items: data?.slice(0, 15) })
    const [fetchMore, setFetchMore] = useState(true)
    const fetchMoreData = () => {
        if (state.items.length >= data.length) {
            setFetchMore(false);
            return
        }
        setTimeout(() => {
            setState({
                items: state.items.concat(data.slice(state.items.length, state.items.length + 5))
            });
        }, 500);
    };
    return (
        <Box>
            <InfiniteScroll
                dataLength={state?.items.length}
                next={fetchMoreData}
                hasMore={fetchMore}
                loader={<Typography sx={{ textAlign: "center", fontSize: "16px", margin: "20px 0px" }}>
                    Loading More data.....
                </Typography>}
                height={800}
                endMessage={
                    <Typography sx={{ textAlign: "center", fontSize: "16px", fontWeight: 600, margin: "20px 0px" }}>
                        No more issues to show
                    </Typography>
                }

            >
                {state.items.map((item, index) => (
                    <Box key={index} sx={{ display: "flex", flexDirection: "row", boxSizing: "border-box", padding: 1, gap: "10px", justifyContent: "space-between", borderBottom: "1px solid #e1e4e8" }}>
                        <Box sx={{ display: "flex", gap: "5px", width: "80%" }}>
                            <TbCircleDot color='green' size={"20px"} />
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                                    <Typography sx={{ color: "#24292f", fontSize: "16px", fontWeight: 600 }}>
                                        {item?.title}
                                    </Typography>
                                    {item?.labels.lenth !== 0 && <CustomChips data={item?.labels} />}
                                </Box>
                                <Box>
                                    <Typography sx={{ color: "#57606a", fontSize: "12px" }}>
                                        #
                                        {item?.number}
                                        {' '}
                                        opened
                                        {' '}
                                        {getDifference(item?.created_at)}
                                        {' '}
                                        ago by
                                        {' '}
                                        {item?.user.login}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            {item?.user.avatar_url ? <Avatar alt="image" src={item?.user.avatar_url} sx={{ width: "20px", height: "20px" }} /> : <Box sx={{ visibility: "hidden" }}></Box>}
                        </Box>
                        {item?.comments !== 0 ?
                            <Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
                                <FaRegCommentAlt color='#57606a' />
                                <Typography sx={{ fontSize: "12px", fontWeight: 600, color: "#57606a", marginRight: "25px" }}>{item.comments} </Typography>
                            </Box> : <Box sx={{ visibility: "hidden", marginRight: "25px" }}> <FaRegCommentAlt color='#57606a' />{" "}1</Box>
                        }
                    </Box>
                ))}
            </InfiniteScroll>
        </Box >
    )
}
export default TableList
