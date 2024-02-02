import "./App.css";
import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    return (
        <div className="mx-auto mt-5">
            <Header />
            <div className="mt-10 md:flex">
                <Formulario setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} />
                <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} />
            </div>
        </div>
    );
}

export default App;
