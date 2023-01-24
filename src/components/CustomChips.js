import { Chip, Typography } from '@mui/material'
import React from 'react'

const CustomChips = ({ data }) => {
    return (
        <>
            {data?.map((item, index) =>
                <Chip label={<Typography style={{ fontWeight: 500, fontSize: "12px", lineHeight: "18px", color: item.color === "b60205" ? "#ffffff" : "#24292f" }}>{item.name}</Typography>} key={index} sx={{ background: "#" + item.color, height: "20px", margin: "0px 2px" }} />
            )}

        </>
    )
}

export default CustomChips
