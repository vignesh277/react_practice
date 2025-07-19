import { useState } from "react";
export default function Player({ name, symbol,isActive ,onChangeName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function click() {
    // setIsEditing(!isEditing);  this is wrong pattern
    setIsEditing((editing) => !editing);
    if(isEditing){
    onChangeName(symbol,playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  let btnCaption = "Edit";
  if (btnCaption) btnCaption = "Save";

  return (
    <li className={isActive? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={click}>{isEditing ? "save" : "Edit"}</button>
    </li>
  );
}
