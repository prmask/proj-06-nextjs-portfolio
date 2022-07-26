import { styled } from '@mui/material';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
	height: 64,
	[theme.breakpoints.up('sm')]: {
		height: 70,
	},
}));

export default Toolbar;
