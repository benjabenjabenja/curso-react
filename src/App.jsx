import "./App.css";
import ButtonCounter from "./components/ButtonCounter";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
    return (
        <>
			<h1 className="text-4xl font-bold">Hola mundo!</h1>
			
			<ButtonCounter />
			<Formulario />
			<ListadoPacientes />
			
        </>
    );
}

export default App;
