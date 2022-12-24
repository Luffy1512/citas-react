import { useState, useEffect } from 'react';
import { mostrarMensaje } from '../helpers/mensaje';


function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

  // State para el objeto de paciente
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setSintomas] = useState('')

  // useEffect para escuchar por el state de paciente
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      const {nombre, propietario, email, alta, sintomas} = paciente;
      setNombre(nombre)
      setPropietario(propietario)
      setEmail(email)
      setAlta(alta)
      setSintomas(sintomas)
    }
  }, [paciente])
  

  // Validar el formulario
  function handleSubmit(e) {
    e.preventDefault();
    // Validar que los campos esten llenos
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      // console.log('Todos los campos son Obligatorios');
      mostrarMensaje('Todos los campos son Obligatorios', 'error')
      return;
    }

    // Verificar modo edicion o nuevo registro
    if (e.target[5].value === "Agregar Paciente") {
      // Llenar el objeto
      const pacienteObj = {
        id: Date.now(),
        nombre,
        propietario,
        email,
        alta,
        sintomas
      }

      // Agregarlo al state de pacientes
      let pacientesArray = [...pacientes, pacienteObj]
      setPacientes(pacientesArray)
      // console.log(pacientesArray);
    } else {
      const pacienteObj = {
        id: paciente.id,
        nombre,
        propietario,
        email,
        alta,
        sintomas
      }

      // Agregarlo al state de pacientes
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? pacienteObj : pacienteState)
      setPacientes(pacientesActualizados)
      // console.log(pacientesArray);
    }


    mostrarMensaje('Paciente Agregado Correctamente')

    // Reiniciar el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')

    // Limpiar el state de paciente
    setPaciente({})
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        
        <p className="text-lg mt-5 text-center">Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

        <form 
          className="bg-white shadow-md rounded-lg py-8 px-5 mt-8 mx-5"
          onSubmit={handleSubmit}
          id="formulario"
        >
          
          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase" htmlFor="mascota">Nombre Mascota: </label>
            <input 
              type="text" 
              placeholder="Nombre de la Mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="mascota"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase" htmlFor="propietario">Nombre Propietario: </label>
            <input 
              type="text" 
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="propietario"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase" htmlFor="email">Email: </label>
            <input 
              type="email" 
              placeholder="Tu email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase" htmlFor="fecha">Fecha de Alta: </label>
            <input 
              type="date" 
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="fecha"
              value={alta}
              onChange={(e) => setAlta(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-bold uppercase" htmlFor="sintomas">Sintomas: </label>
            <textarea 
              id="sintomas" 
              placeholder="Describe los sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            >
            </textarea>
          </div>

          <input 
            type="submit" 
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          />

        </form>
    </div>
  )
}

export default Formulario