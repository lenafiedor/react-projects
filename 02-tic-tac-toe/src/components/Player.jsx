import { useState } from "react";

export default function Player({ name, symbol }) {

    const [ isEditing, setIsEditing ] = useState(false);

    function handleEdit() {
        setIsEditing((editing) => !editing);
    }

    let playerName = isEditing ? (
        <input type='text' required value={name}/>
        ) : (
        <span className='player-name'>{name}</span>
    )

    return (
        <li>
            <span className='player'>{playerName}
              <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}
