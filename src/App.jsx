import { useState, useEffect } from 'react';
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  const inicial = JSON.parse(localStorage.getItem('pacientes')) ?? [];

  const [ pacientes, setPacientes ] = useState(inicial)
  const [ paciente, setPaciente ] = useState({})

  // useEffect para el localStorage
  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];

      setPacientes(pacientesLS)
    }
  
    obtenerLS();
  }, [])
  

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  

  // Funcion Eliminar Paciente
  function eliminarPaciente(id) {
    // console.log('Eliminando...', id);
    const confirmar = confirm('¿Esta Seguro de Eliminar el Paciente?')
    if (confirmar) {
      const pacientesActualizados = pacientes.filter( pacienteState => pacienteState.id !== id)
      setPacientes(pacientesActualizados)
    }
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="md:flex mt-12">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>      
    </div>
  )
}

export default App
