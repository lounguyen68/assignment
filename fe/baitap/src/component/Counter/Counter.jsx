import {useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(counter => counter + 1);
    }
    const decreaseCounter = () => {
        setCounter(counter => counter - 1);
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div>
            <button onClick={decreaseCounter}>Decrease</button>
        </div>
        <div>
            <div style={{fontSize: '40px', fontWeight: 'bold', margin: '20px'}}>{counter}</div>
        </div>
        <div>
            <button onClick={increaseCounter}>Increase</button>
        </div>
    </div>
  )
}

export default Counter