import { useState } from "react";

export default function Player({ playerName, playerSymbol }) {

    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        setIsEditing(true);
    }

    let name = isEditing ? (
            <input type='text' required></input>
        ) : (
            <span className='player-name'>{name}</span>
        );

    return (
        <li>
            <span className='player'>{playerName}
              <span className='player-symbol'>{playerSymbol}</span>
            </span>
            <button onClick={handleEdit}>Save</button>
        </li>
    )
}
