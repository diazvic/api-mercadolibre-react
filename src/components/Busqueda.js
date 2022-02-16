import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Busqueda = ({ handleOnChange, handleClick }) => {
	return (
		<Box sx={{ p: 3 }}>
			<TextField
				onChange={handleOnChange}
				label="Buscar productos"
				variant="outlined"
			></TextField>
			<Button
				onClick={handleClick}
				size="medium"
				sx={{ m: 2, color: "#97B4A9" }}
			>
				Buscar
			</Button>
		</Box>
	);
};

export default Busqueda;
