/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Paciente from "./Paciente"
import { useEffect } from "react"

const ListadoPacientes = ({ pacientes, setPaciente, deletePaciente }) => {
    const title = 'Listado de Pacientes';

    useEffect(
        () => {
            pacientes.length > 0 && console.log("nuevo paciente creado");
        }, [pacientes]
    );
    
    return (
        <div className="md:w-1/2 lg:w-3/5 px-4">
            {
                pacientes && 
                <>
                    {
                        pacientes && pacientes?.length > 0 ?
                            <>
                                <h2 className="font-black text-xl text-center"> {title} </h2>
                                <p className="mt-2 mb-4 text-lg">
                                    Administra tus {' '}
                                    <span className="text-indigo-300 font-bold">Pacientes y citas</span>
                                </p>
                            </> 
                            : 
                            <p className="mt-2 mb-4 text-lg text-center font-black">
                                No hay pacientes 
                            </p> 
                    }
                    
                    <div className="container p-1 m-0 md:h-screen lg:h-screen overflow-y-scroll overflow-x-hidden">
                        {
                            pacientes?.map(paciente => (<Paciente paciente={paciente} key={paciente.id} setPaciente={setPaciente} deletePaciente={deletePaciente} />))
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default ListadoPacientes;
