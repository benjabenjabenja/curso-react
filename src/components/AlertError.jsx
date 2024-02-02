
// eslint-disable-next-line react/prop-types
const AlertError = ({children}) => {
    return (
        <div className='bg-red-500 px-5 py-2 rounded-md my-3 text-white text-center font-bold'>
            { children }
        </div>
    )
}

export default AlertError;
