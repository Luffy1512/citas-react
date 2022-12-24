import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {  

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll mt-8 md:mt-0">
      {pacientes.length>=1 ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-8 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
        </>
        ) : (
          <>
            <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
            <p className="text-xl mt-5 mb-8 text-center">Comiena agregando pacientes <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span></p>
          </>
          )}
      
      {pacientes.map( (paciente) => (
        <Paciente 
        key={paciente.id}
        paciente={paciente}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      ))}
    </div>
  )
}

export default ListadoPacientes
