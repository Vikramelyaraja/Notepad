import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
//import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Logo from '../../src/Asserts/Images/Logo.png';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
	const [auth, setAuth] = useState(localStorage.getItem('username'));
	const [anchorEl, setAnchorEl] = useState(null);

	const navigate = useNavigate();
	const handleChange = (event) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleSubmit = () => {
		navigate('/Signin');
	};

	return (
		<Box sx={{ flexGrow: 1}}>
			<AppBar position="static" style={{ position: 'relative'  ,backgroundColor:'lightblue'}}>
				<Toolbar>
					<Grid container justify="center">
						<Grid sm={4} xs={12} justify="center">
							<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
								<img src={Logo} alt="logo" className="lgo" />
							</IconButton>
						</Grid>

						<Grid sm={4} xs={25} justify="space-between">

						</Grid>



						<Grid sm={4} xs={12} justify="space-between">
							{
								<div style={{marginLeft:150}}>
									<IconButton
										size="large"
										aria-label="account of current user"
										aria-controls="menu-appbar"
										aria-haspopup="true"
										onClick={handleMenu}
										color="inherit"
										style={{ float: 'left' }}
									>
										<AccountCircle />
									</IconButton>
									<FormGroup>
										<FormControlLabel
											control={
												<span
													checked={auth}
													onChange={handleChange}
													aria-label="login switch"
													style={{ paddingTop: 48, paddingLeft: 8 }}
												/>
											}
											label={auth ? localStorage.getItem('username') : 'Guest'}
										/>
									</FormGroup>

									<Menu
										id="menu-appbar"
										anchorEl={anchorEl}
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										keepMounted
										transformOrigin={{
											vertical: 'top',
											horizontal: 'right',
										}}
										open={Boolean(anchorEl)}
										style={{ marginTop: 46, marginLeft: 22 }}
									>
										{
											auth ? (
												<MenuItem
													onSubmit={handleSubmit}
													onClick={() => {
														localStorage.removeItem('username');
                            navigate('/Signin')
													}}
												>
													logout
												</MenuItem>
											) : (
												<MenuItem onClick={navigate('/Signin')}>Sign in</MenuItem>
											)
											//  <MenuItem onClick={()=>{navigate('/faqs')}}>Regsiter </MenuItem> </>
										}
									</Menu>
								</div>
							}
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
export default Header;
