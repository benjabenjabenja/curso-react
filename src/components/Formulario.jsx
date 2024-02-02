/* eslint-disable react/prop-types */
import {
    useState,
    useEffect
} from 'react'
import AlertError from './AlertError';

const Formulario = ({ setPacientes, pacientes, paciente }) => {
    
    const [nombre, setNombre] = useState('');
    const [contacto, setContacto] = useState('');
    const [email, setEmail] = useState('');
    const [fecha_alta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [showAlert, setShowAlert] = useState(false);

    useEffect(
        () => {
            if (Object.keys(paciente).length > 0) {
                setPaciente(paciente);
            }
        }, [paciente]
    );
    useEffect(
        () => {
            // si se pasa el arreglo vacio solo lo actualiza cuando el componente esta listo
        }, []
    );
    const setPaciente = (paciente) => {
        setNombre(paciente.nombre);
        setContacto(paciente.contacto);
        setEmail(paciente.email);
        setFechaAlta(paciente.fecha_alta);
        setSintomas(paciente.sintomas);
    }
    const title = 'Seguimiento de Pacientes';
    const button_send_text = 'Confirmar cita';

    const resetForm = () => {

        setNombre('');
        setContacto('');
        setEmail('');
        setFechaAlta('');
        setSintomas('');

        setShowAlert(false);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const generate_unique_id = () => {
            const timestamp = Date.now().toString(36);
            const randomStr = Math.random().toString(36).substring(2, 5); 
            return timestamp + randomStr;
        }
        const uniqueId = generate_unique_id();
        const some = [nombre, contacto, email, fecha_alta, sintomas].some(v => !v);
        if (some) {
            setShowAlert(true);
            return;
        }
        showAlert && setShowAlert(false);

        const obj = { nombre, contacto, email, fecha_alta, sintomas }
        if (paciente && paciente.id) {
            obj.id = paciente.id;

            const pUpdated = pacientes.map(
                p => p.id === paciente.id ? obj : p 
            );
            setPacientes(pUpdated);
        } else {
            obj.id = uniqueId;
            setPacientes([...pacientes, obj]);
        }
        setTimeout(resetForm, 0);
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-xl text-center">{title}</h2>

            <p className="my-4 text-lg">
                Añade pacientes y {' '}
                <span className="text-indigo-300 font-bold">Administralos</span>
            </p>
            {
                showAlert && 
                <AlertError>
                    <p>No puede haber campos vacios</p>        
                </AlertError>
            }


            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-5">

                <div className="mb-2">
                    <label htmlFor="nombre" className="block text-gray-700 font-bold">Nombre/s de animal</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Ingrese nombre del animal"
                        className="border-2 rounded-md w-full p-2 placeholder-gray-400"
                        value={nombre}
                        onChange={(ev) => setNombre(ev?.target?.value)}
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="contacto" className="block text-gray-700 font-bold">Nombre/s de contacto</label>
                    <input
                        id="contacto"
                        type="text"
                        placeholder="Ingrese nombre de contacto"
                        className="border-2 rounded-md w-full p-2 placeholder-gray-400"
                        value={contacto}
                        onChange={(ev) => setContacto(ev?.target?.value)}
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="email" className="block text-gray-700 font-bold">Email de contacto</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Ingrese email de contacto"
                        className="border-2 rounded-md w-full p-2 placeholder-gray-400"
                        value={email}
                        onChange={(ev) => setEmail(ev?.target?.value)}
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="fecha-alta" className="block text-gray-700 font-bold">Seleccione fecha de alta</label>
                    <input
                        type="date"
                        id="fecha-alta"
                        placeholder="Fecha de alta"
                        className="border-2 rounded-md w-full p-2 placeholder-gray-400"
                        value={fecha_alta}
                        onChange={(ev) => setFechaAlta(ev?.target?.value)}
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="sintomas" className="block text-gray-700 font-bold">Sintomas</label>
                    <textarea
                        id="sintomas"
                        placeholder="Ingrese los sintomas del animal"
                        className="border-2 rounded-md w-full p-2 placeholder-gray-400"
                        value={sintomas}
                        onChange={(ev) => setSintomas(ev?.target?.value)}
                    />
                        
                </div>

                <input
                    type="submit"
                    className="bg-indigo-300 p-3 w-full text-white rounded-md hover:bg-indigo-100"
                    value={paciente && paciente.id ? 'Confiramr edicion' : button_send_text}
                />     

                
            </form>
        </div>
    )
}

export default Formulario;
