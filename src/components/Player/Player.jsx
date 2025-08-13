import { useState } from "react"
import './Player.scss'
import Score from "../Score/Score"
import ColorPicker from "../ColorPicker/ColorPicker"
import Modal from "../Modal/Modal"

const Player = ({defaultName, defaultColor}) => {
    const [newName, setNewName] = useState("")
    const [playerInfo, setPlayerInfo] = useState({
        name: "",
        bgColor: "",
    })
    const handleChangeColor = (color) => {
        setPlayerInfo({...playerInfo, bgColor: color})
    }
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className="player" style={{backgroundColor: playerInfo.bgColor ? playerInfo.bgColor : defaultColor}}>
            <Score />
{/*             <div className="input-name">
                <input type="text" name="player-name" id="name" onChange={(e) => setNewName(e.target.value)}/>
                <button onClick={() => setPlayerInfo({...playerInfo, name: newName})}>Modifier</button>
            </div> */}
            <div className="player-panel">
                <div className="player-name">{playerInfo.name ? playerInfo.name : defaultName}</div>
                <button onClick={() => setIsOpen(true)}>Edit</button>
            </div>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <ColorPicker event={handleChangeColor}/>
            </Modal>
        </div>
    )
}

export default Player;