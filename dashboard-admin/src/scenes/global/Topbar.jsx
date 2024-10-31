import { Box, IconButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens} from "../../theme";
import InputBase from "@mui/material";
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlinedIcon";
import DarkModeOutlinedIcon from "@mui/icons-material/LightModeOutlinedIcon";
import NotificationsModeOutlinedIcon from "@mui/icons-material/LightModeOutlinedIcon";
import SettingModeOutlinedIcon from "@mui/icons-material/LightModeOutlinedIcon";
import PersonModeOutlinedIcon from "@mui/icons-material/LightModeOutlinedIcon";
import SearchIcon from "@mui/icons-material/LightModeOutlinedIcon";


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
    <Box display="flex" justifyContent="space-between" p={2}>

        <Box 
        display="flex" 
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        >
            <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"
        </Box>

        <IconButton></IconButton>
    </Box>);
}

export default Topbar();