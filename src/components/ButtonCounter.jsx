import { useState } from 'react'

function ButtonCounter() {
    const [count, setCount] = useState(0)
    const button_label = 'reset counter'

    return (
        <>
            <button className='button-counter' onClick={() => setCount((count) => count + 1)}>
                counter: { count }
            </button>

            {// ngIf quien te conoce :v
                count > 0 &&
                <button className='button--reset' onClick={() => setCount((count) => { count = 0; return count })}>
                    { count > 5 ? button_label.toLocaleUpperCase() : button_label }
                </button> 
            }
        </>
    )
}
export default ButtonCounter