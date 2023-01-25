import { styled } from "@material-ui/core/styles";
import { Box } from "@mui/material";

const getMsDifference = date => new Date() - new Date(date);
const getHrDiff = date => Math.floor(getMsDifference(date) / 1000 / 60 / 60);
const getHoursDifference = date => (Math.floor(getMsDifference(date) / 1000 / 60 / 60) >= 2 ? `${Math.floor(getMsDifference(date) / 1000 / 60 / 60)} hours` : 'an hour');
const getDaysDifference = date => (Math.floor(getHrDiff(date) / 24) >= 2 ? `${Math.floor(getHrDiff(date) / 24)} days` : 'a day');
export const getDifference = date => (getHrDiff(date) >= 24
    ? getDaysDifference(date) : getHoursDifference(date));

export const CustomHeaderRightStackWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "50px",
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },
}));

export const StyledBoxTableWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: "#f6f8fa",
    border: "1px solid #e1e4e8",
    borderRadius: "3px 3px 0 0",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
    boxSizing: "border-box",
    padding: "20px",
    paddingLeft: "1px",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column"
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: "row",
        height: "60px"
    },
}));
export const StyledTableHeaderWrapper = styled(Box)(({ theme }) => ({
    display: "flex", alignItems: "center", gap: "20px",
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },
}));
export const StyledTableHeaderWrapperMenu = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("sm")]: {
        display: "flex"
    },
}));
export const StyledTableHeaderTopWrapper = styled(Box)(({ theme }) => ({
    display: "none", alignItems: "center", gap: "20px",
    [theme.breakpoints.down("sm")]: {
        display: "flex", marginTop: "20px"
    },
}));
export const StyledCustomTabsWrapper = styled(Box)(({ theme }) => ({
    marginTop: "2%",
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },
}));
export const StyledCustomTabsMobileWrapper = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column"
    },
}));
