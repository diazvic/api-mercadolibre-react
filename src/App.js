import Nav from "./components/Nav";
import Seccion from "./components/Seccion";
import Footer from "./components/Footer";
import Busqueda from "./components/Busqueda";
import Box from "@mui/material/Box";
import { useState } from "react";
import "../src/App.css";
const App = () => {
	const [valorDelInput, setValorDelInput] = useState("");
	const [buscarProductos, setBuscarProductos] = useState("labiales");

	const handleOnChange = (e) => {
		setValorDelInput(e.target.value);
		console.log(valorDelInput);
	};

	const handleClick = () => {
		setBuscarProductos(valorDelInput);
	};
	return (
		<Box>
			<Nav />
			<Box>
				<Busqueda handleOnChange={handleOnChange} handleClick={handleClick} />
			</Box>
			<Seccion busqueda={buscarProductos} />
			<Footer />
		</Box>
	);
};
export default App;
