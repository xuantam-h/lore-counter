import { useState } from "react";
import './Score.css'


const Score = () => {
    const [count, setCount] = useState(0)
    const handleDecrement = () => {
        if(count > 0){
            setCount(count => count - 1)
        }
    }
    const handleIncrement = () => {
        if(count < 20){
            setCount(count => count + 1)
        }
    }

    return (
        <div className="player-score">
            <button className="btn-count" onClick={handleDecrement}>-</button>
            <p className="counter">{count}</p>
            <button className="btn-count" onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Score;