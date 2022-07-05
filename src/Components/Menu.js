import React from 'react';

function Menu ({setSelectedScript}) {
    return (
        <div className="menu-container">
            <button onClick={() => setSelectedScript("HOMCIM")}>Homcim</button>
            <button onClick={() => setSelectedScript("NUMBER")}>Number</button>
            <button onClick={() => setSelectedScript("SOMTHWJ")}>Somthwj</button>
            <button onClick={() => setSelectedScript("NYIAKENG")}>Nyiakeng</button>
            <button onClick={() => setSelectedScript("LOGOGRAM")}>Logogram</button>
            <button onClick={() => setSelectedScript("PUACHUEKENG")}>Puachue Keng</button>
            <button onClick={() => setSelectedScript("PUACHUEPHW")}>Puachue Phw</button>
        </div>
    );
}

export default Menu ;