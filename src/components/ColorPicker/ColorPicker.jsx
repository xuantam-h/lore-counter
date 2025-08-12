import './ColorPicker.css'

const ColorPicker = ({event}) => {
    const colorList = ["#ff5c5c","#abfcff", "#9887ff", "#ffc675", "#ff95e5"];

    return (
        <div className="color-picker">
            {colorList.map(color => 
                <button key={color} className="btn-color" style={{backgroundColor: color}} onClick={() => event(color)}></button>
            )}
        </div>
    )
}

export default ColorPicker