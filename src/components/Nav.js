import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const Nav = () => {
	return (
		<nav>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" sx={{ bgcolor: "#98B4AA" }}>
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						></IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Mercadito
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</nav>
	);
};

export default Nav;
