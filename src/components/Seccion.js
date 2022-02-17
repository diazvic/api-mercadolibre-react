import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Seccion = ({ busqueda }) => {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
			.then((res) => res.json())
			.then((data) => {
				setProductos(data.results);
				console.log(data);
			});
	}, [busqueda]);

	return (
		<Container sx={{ p: 4 }}>
			<Grid container spacing={6} justifyContent="center" alignItems="center">
				{productos.map((elemento) => (
					<Grid item key={elemento.id}>
						<Paper variant="outlined">
							<CardActionArea>
								<Card sx={{ maxWidth: 300, height: 500 }}>
									<CardMedia
										component="img"
										sx={{ width: "100%" }}
										height="300"
										image={elemento.thumbnail}
										alt={elemento.title}
									></CardMedia>
									<CardContent
										sx={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											flexDirection: "column",
										}}
									>
										<Typography
											variant="h6"
											sx={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											{elemento.title}
										</Typography>
										<Typography variant="h6">${elemento.price}</Typography>
										<Typography variant="body2">
											{elemento.condition}
										</Typography>
										<Typography variant="body2">
											{elemento.address.state_name}
										</Typography>
									</CardContent>
								</Card>
								<Stack direction="row" sx={{ m: 2 }}>
									{elemento.shipping.free_shipping && (
										<Chip
											color="success"
											label="Llega mañana"
											sx={{
												color: "#04A54F",
												bgcolor: "#e6f7ee",
												fontSize: "14px",
												fontWeight: 500,
											}}
											icon={<FlashOnIcon />}
										/>
									)}
									<Chip
										color="success"
										label="Full"
										variant="outlined"
										sx={{
											color: "#04A54F",
											ml: 2,
											fontSize: 14,
											fontWeight: 500,
										}}
										icon={<LocalShippingIcon />}
									/>
								</Stack>
							</CardActionArea>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Seccion;
