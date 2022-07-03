import React from 'react';

function ScriptData (selectedData) {
    console.log('ScriptData', selectedData)
    return (
        <div>
            {selectedData.name}
            {selectedData.value}
        </div>
    );
}

export default ScriptData ;