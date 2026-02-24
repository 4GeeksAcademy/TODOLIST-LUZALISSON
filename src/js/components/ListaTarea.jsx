import React from "react";
import './ListaTarea.css';

function ListaTarea({ tareas, eliminarTarea }) {

	return (
		<ul className="list-group d-flex flex-column align-items-left mt-3 mx-5">

			{tareas.length === 0 ? (

				<li className="list-group-item text-center ">
					No hay tareas, añadir tareas
				</li>

			) : (

				tareas.map((tarea, index) => (
					//<div>
					<li
						key={index}
						className="list-group-item d-flex justify-content-between align-items-center tarea-item"
					>

						<p>{tarea}</p>

						<button
							className="btn btn-danger btn-sm eliminar-btn"
							onClick={() => eliminarTarea(index)}
						>
							Eliminar
						</button>

					</li>
					//</div>

				))

			)}

		</ul>
	);
}

export default ListaTarea;