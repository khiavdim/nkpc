import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Menu from './Components/Menu';
import ScriptData from './Components/ScriptData';

function App() {
  const [selectedScript, setSelectedScript] = useState("HOMCIM");
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    switch (selectedScript) {
      case "HOMCIM":
        axios.get("http://localhost:4200/api/homcim")
        .then(res => {
          setSelectedData(res.data);
        })
        .catch(err => {
          if(err) {
            console.log('Error getting Homcim Data', err.res)
          }
       });
        break;
      case "LOGOGRAM":
        axios.get("http://localhost:4200/api/logogram")
        .then(res => {
          setSelectedData(res.data);
        })
        .catch(err => {
          if(err) {
            console.log('Error getting Logogram Data', err.res)
          }
        });
        break;
      case "NUMBER":
        axios.get("http://localhost:4200/api/number")
        .then(res => {
          setSelectedData(res.data);
        })
        .catch(err => {
          if(err) {
            console.log('Error getting Number Data', err.res)
          }
      });
        break;
      case "NYIAKENG":
        axios.get("http://localhost:4200/api/nyiakeng")
        .then(res => {
          setSelectedData(res.data);
        })
        .catch(err => {
          if(err) {
            console.log('Error getting Nyiakeng Data', err.res)
          }
        });
        break;
      case "PUACHUEKENG":
        axios.get("http://localhost:4200/api/puachue-keng")
          .then(res => {
            setSelectedData(res.data);
          })
          .catch(err => {
            if(err) {
              console.log('Error getting Puachue Keng Data', err.res)
            }
        });
        break;
      case "PUACHUEPHW":
        axios.get("http://localhost:4200/api/puachue-phw")
        .then(res => {
          setSelectedData(res.data);
        })
        .catch(err => {
          if(err) {
            console.log('Error getting Puachue Phw Data', err.res)
          }
        });
        break;
      case "SOMTHWJ":
        axios.get("http://localhost:4200/api/somthwj")
.then(res => {
  setSelectedData(res.data);
})
.catch(err => {
  if(err) {
    console.log('Error getting Somthwj Data', err.res)
  }
});
        break;
      default:
        setSelectedData("Please select a script from the menu above")
        break;
    } 
  }, [selectedScript])

  return (
    <div className="App">
      <div className="app-container">
        <Menu setSelectedScript={setSelectedScript}/>
        <div className="data-container">
          {selectedData.map(scriptData => {
            return (
              <ScriptData key={scriptData.id} scriptData={scriptData}/>
              )
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
