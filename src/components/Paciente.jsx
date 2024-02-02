/* eslint-disable react/prop-types */

const Paciente = ({ paciente, setPaciente }) => {
    const { nombre, contacto, email, fecha_alta, sintomas } = paciente;
    return (
        <div className="mt-1 mb-5 bg-white shadow-md rounded-md px-4 py-8">
            <p className="font-bold text-gray-600 pt-2">
                Nombre: <span className="font-normal normal-case"> {nombre} </span>
            </p>
            <p className="font-bold text-gray-600 pt-2">
                Contacto:{" "}
                <span className="font-normal normal-case"> {contacto } </span>
            </p>
            <p className="font-bold text-gray-600 pt-2">
                Email contacto:{" "}
                <span className="font-normal normal-case"> {email} </span>
            </p>
            <p className="font-bold text-gray-600 pt-2">
                Fecha de Ingreso:{" "}
                <span className="font-normal normal-case"> {fecha_alta} </span>
            </p>
            <p className="font-bold text-gray-600 pt-2">
                Sintomas:{" "}
                <span className="font-normal normal-case">
                    { sintomas }
                </span>
            </p>

            <div className="flex justify-between mt-2">
                <button type="button"
                    onClick={() => setPaciente(paciente)}
                    className="py-2 px-5 rounded-lg bg-indigo-300 hover:bg-indigo-100 text-white">
                    Editar
                </button>
                <button type="button" className="py-2 px-5 rounded-lg bg-slate-400 hover:bg-indigo-100 text-white">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default Paciente;
