import React, { useState } from "react";
import FormularioTarea from "./FormularioTarea";
import ListaTarea from "./ListaTarea";

const Home = () => {

	const [tareas, setTareas] = useState([]);

	const agregarTarea = (nuevaTarea) => {
		setTareas([...tareas, nuevaTarea]);
	};
	const eliminarTarea = (indexEliminar) => {
	const nuevasTareas = tareas.filter((_, index) => index !== indexEliminar);
	setTareas(nuevasTareas);
};

	return (
		<div className="text-center d-flex flex-column align-items-left">
			<h1 className="mt-5">Lista de Tareas</h1>

			<FormularioTarea agregarTarea={agregarTarea}/>
			<ListaTarea tareas={tareas} eliminarTarea={eliminarTarea}/>
		</div>
	);
};

export default Home;