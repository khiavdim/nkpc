import React from 'react';

function ScriptData ({scriptData}) {
    return (
        <table>
            <tr>
                <th>No.</th>
                {scriptData.name && <th>Script Name</th>}
                <th>Script Value</th>
            </tr>
            <tr>
                <td>{scriptData.id}</td>
                {scriptData.name && <td>{scriptData.name}</td>}
                <td>{scriptData.value}</td>
            </tr>
        </table>
    );
}

export default ScriptData ;