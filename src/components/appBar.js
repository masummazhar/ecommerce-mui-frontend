import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";



export default function ButtonAppBar() {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Boost Toys
						</Typography>
						<Link to="/">
							<Button color="inherit" sx={{ flexGrow: 6 }}>
								Home
							</Button>
						</Link>

						<Link to="/contact">
							<Button color="inherit" sx={{ flexGrow: 6 }}>
								Contact
							</Button>
						</Link>
						<Link to="/blog">
							<Button color="inherit" sx={{ flexGrow: 6 }}>
								Blog
							</Button>
						</Link>
						<Link to="https://boostfidgets.com/">
							<Button color="inherit" sx={{ flexGrow: 6 }}>
								Affliate
							</Button>
						</Link>

						<Button color="inherit">Sign In</Button>
						<Button color="inherit">Sign Up</Button>
					</Toolbar>
				</AppBar>
			</Box>
			
		</div>
	);
}
