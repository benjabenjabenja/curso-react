import "./App.css";
import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data'));
        setPacientes(data || []);
    }, []);// sin dependecias se ejecuta una vez el componente este listo
    
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(pacientes));
    }, [pacientes]);// se ejecuta con cada cambio de lo que le pases en el array
    
    const deletePaciente = (id) => { 
        setPacientes(pacientes.filter(v => v.id === id));
    }
    
    return (
        <div className="mx-auto mt-5">
            <Header />
            <div className="mt-10 md:flex">
                <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} />
                <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} deletePaciente={deletePaciente} />
            </div>
        </div>
    );
}

export default App;
