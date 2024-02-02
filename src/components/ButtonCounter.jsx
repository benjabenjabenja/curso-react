import { useState } from 'react'

function ButtonCounter() {
    const [count, setCount] = useState(0)
    const button_label = 'reset counter'

    return (
        <div className='md:w-1/2 xs:w-100 mx-auto flex items-center justify-evenly my-10'>
            <button className='px-2 py-1' onClick={() => setCount((count) => count + 1)}>
                counter: { count }
            </button>

            {// ngIf quien te conoce :v
                count > 0 &&
                <button className='button--reset px-2 py-1' onClick={() => setCount((count) => { count = 0; return count })}>
                    { count > 5 ? button_label.toLocaleUpperCase() : button_label }
                </button> 
            }
        </div>
    )
}
export default ButtonCounter