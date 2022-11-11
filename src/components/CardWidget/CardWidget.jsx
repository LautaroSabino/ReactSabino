import { useState } from 'react'

const CardWidget = () => {

    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount(count + 1)
      }
    

    return (
        <div>


            <div>
                {count}
            </div>

            <div className='btn boton'>
                <button onClick={sumar}> . . . + . . .</button>
            </div>
        </div>
    )
}

export default CardWidget