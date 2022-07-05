import React from 'react';

function ScriptData ({scriptData}) {
    return (
        <table>
            {scriptData.name && 
                <td>Script Name
                <tr>{scriptData.name}</tr>
            </td>
            }
            <td>Script Value
                <tr>{scriptData.value}</tr>
            </td>
        </table>
    );
}

export default ScriptData ;