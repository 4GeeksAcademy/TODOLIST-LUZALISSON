import React, { useState } from 'react'

function FormularioTarea({ agregarTarea }) {

    const [textoNuevo, setTextoNuevo] = useState("");

    const agregarTareas = () => {
        if (textoNuevo.trim() === "") {
            alert("Tienes que agregar una tarea nueva");
            return;
        }

        agregarTarea(textoNuevo);
        setTextoNuevo("");
    };

    return (
            <div className='text-center'>
            <div className="mt-3 mx-5  d-flex text-center ">
            <div className="flex-grow-1">
                <input
                    type="text"
                    value={textoNuevo}
                    onChange={(e) => setTextoNuevo(e.target.value)}
                    placeholder="Agrega una tarea"
                    className="form-control"
                    onKeyDown={(e) => e.key === 'Enter' && agregarTareas()}
                />
            </div>
            <button
                onClick={agregarTareas}
                type="button"
                className="btn btn-primary mx-2">
                agregar
            </button>
            </div>
        </div>
    )
}

export default FormularioTarea;