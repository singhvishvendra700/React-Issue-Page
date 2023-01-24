import { Avatar, Box, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { TbCircleDot } from "react-icons/tb"
import { getDifference } from './config'
import CustomChips from './CustomChips';
import { FaRegCommentAlt } from "react-icons/fa"
import {
    List,
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
} from "react-virtualized";

const TableList = ({ data }) => {
    const cache = React.useRef(
        new CellMeasurerCache({
            fixedWidth: true,
            // defaultHeight: 90,
            // fixedHeight: true
        })
    );
    const listRef = useRef(null)
    const [state, setState] = useState()
    useEffect(() => {
        if (listRef && listRef.current) {
            console.log('spme', listRef.current)
            listRef.current.recomputeRowHeights()
            listRef.current.forceUpdate()
        }
    }, [state])
    return data?.length > 0 ? (
        <Box sx={{ width: "100%", height: "100vh" }}>
            <AutoSizer>
                {({ width, height }) => {
                    setState(width)
                    return (
                        <List
                            width={width}
                            height={height}
                            rowHeight={cache.current.rowHeight}
                            deferredMeasurementCache={cache.current}
                            rowCount={data?.length}
                            ref={listRef}
                            rowRenderer={({ key, index, style, parent }) => {
                                const item = data[index]
                                return (
                                    <CellMeasurer
                                        key={key}
                                        cache={cache.current}
                                        parent={parent}
                                        columnIndex={0}
                                        rowIndex={index}
                                    >
                                        <Box style={style} sx={{ display: "flex", flexDirection: "row", boxSizing: "border-box", padding: 1, gap: "10px", justifyContent: "space-between", borderBottom: "1px solid #e1e4e8" }}>
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
                                    </CellMeasurer>
                                )
                            }} />)
                }}
            </AutoSizer>
        </Box >
    ) : null
}

export default TableList
