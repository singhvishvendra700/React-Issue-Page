import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, IconButton } from '@mui/material';
import { FcMenu } from "react-icons/fc"
const CustomMenu = ({ array }) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton onClick={handleClick}>
                <FcMenu color='secondatry' />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >{array?.map((item, index) => (
                <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
            ))}
            </Menu>
        </Box >
    );
}

export default CustomMenu