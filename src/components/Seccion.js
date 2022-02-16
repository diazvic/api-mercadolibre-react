import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Seccion = ({ busqueda }) => {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${busqueda}`)
			.then((res) => res.json())
			.then((data) => {
				setProductos(data.results);
			});
	}, [busqueda]);

	return (
		<Container sx={{ p: 4 }}>
			<Grid container spacing={6} justifyContent="center" alignItems="center">
				{productos.map((elemento) => (
					<Grid item key={elemento.id}>
						<CardActionArea>
							<Card sx={{ maxWidth: 250, height: 340 }}>
								<CardMedia
									component="img"
									height="150"
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
									<Typography variant="body2">{elemento.condition}</Typography>
									<Typography variant="body2">
										{elemento.address.state_name}
									</Typography>
									<Typography>{elemento.shipping.free_shipping}</Typography>
								</CardContent>
							</Card>
						</CardActionArea>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Seccion;
