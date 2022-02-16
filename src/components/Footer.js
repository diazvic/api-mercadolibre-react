import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
	return (
		<footer>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" sx={{ bgcolor: "#495371" }}>
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						></IconButton>
						<Typography
							variant="subtitle1"
							component="div"
							sx={{
								flexGrow: 1,
								display: "flex",
								justifyContent: "center",
							}}
						>
							Hecho con ❤️ por Victoria Diaz
						</Typography>
					</Toolbar>
					<CardActions sx={{ display: "flex", justifyContent: "center" }}>
						<Link href="https://github.com/diazvic">
							<GitHubIcon className="icono" fontSize="medium"></GitHubIcon>
						</Link>
						<Link href="mailto:vico.9467@gmail.com">
							<EmailIcon className="icono-email" fontSize="medium"></EmailIcon>
						</Link>
					</CardActions>
				</AppBar>
			</Box>
		</footer>
	);
};
export default Footer;
