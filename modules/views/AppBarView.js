import { Box } from '@mui/material';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';

const AppBarView = () => {
	return (
		<div>
			<AppBar position='fixed'>
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Box sx={{ flex: 1 }} />
				</Toolbar>
			</AppBar>
		</div>
	);
};
export default AppBarView;
