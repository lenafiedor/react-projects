import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {

    const [ playerName, setPlayerName ] =  useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEdit() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editableName = isEditing ? (
        <input type='text' required value={playerName} onChange={handleChange} />
        ) : (
        <span className='player-name'>{playerName}</span>
    )

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>{editableName}
              <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
