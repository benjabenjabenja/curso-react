import "./App.css";
import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

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
