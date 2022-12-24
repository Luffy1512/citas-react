const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    
    const {id, nombre, propietario, email, alta, sintomas} = paciente;  

  return (
    <div className="bg-white m-3 shadow-md px-5 py-8 rounded-md">
        <p className="font-bold uppercase text-gray-700 mb-3">Nombre:
            <span className="font-normal normal-case"> {nombre}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">Propietario:
            <span className="font-normal normal-case"> {propietario}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">Email:
            <span className="font-normal normal-case"> {email}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">Fecha:
            <span className="font-normal normal-case"> {alta}</span>
        </p>
        <p className="font-bold uppercase text-gray-700 mb-3">Sintomas:
            <span className="font-normal normal-case"> {sintomas}</span>
        </p>
        <div className="flex justify-between mt-5">
            <button
            type="button"
            className="bg-indigo-500 text-white py-1 px-4 font-bold uppercase hover:bg-indigo-700 hover:cursor-pointer transition-all rounded-md editar"
            onClick={ () => setPaciente(paciente) }
            >Editar</button>
            <button
            type="button"
            className="bg-red-500 text-white py-1 px-4 font-bold uppercase hover:bg-red-700 hover:cursor-pointer transition-all rounded-md"
            onClick={ () => eliminarPaciente(id) }
            >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente