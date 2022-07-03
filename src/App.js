import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Menu from './Components/Menu';
import ScriptData from './Components/ScriptData';

function App() {
  const [homcimData, setHomcimData] = useState([]);
  const [logogramData, setLogogramData] = useState([]);
  const [numberData, setNumberData] = useState([]);
  const [nyiakengData, setNyiakengData] = useState([]);
  const [puachueKengData, setPuachueKengData] = useState([]);
  const [puachuePhwData, setPuachuePhwData] = useState([]);
  const [somthwjData, setSomthwjData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4200/api/homcim")
      .then(res => {
        setHomcimData(res.data);
      })
      .catch(err => {
        if(err) {
          console.log('Error getting Homcim Data', err.res)
        }
    });
    axios.get("http://localhost:4200/api/logogram")
    .then(res => {
      setLogogramData(res.data);
    })
    .catch(err => {
      if(err) {
        console.log('Error getting Logogram Data', err.res)
      }
  });
  axios.get("http://localhost:4200/api/number")
  .then(res => {
    setNumberData(res.data);
  })
  .catch(err => {
    if(err) {
      console.log('Error getting Number Data', err.res)
    }
});
axios.get("http://localhost:4200/api/nyiakeng")
.then(res => {
  setNyiakengData(res.data);
})
.catch(err => {
  if(err) {
    console.log('Error getting Nyiakeng Data', err.res)
  }
});
axios.get("http://localhost:4200/api/puachue-keng")
.then(res => {
  setPuachueKengData(res.data);
})
.catch(err => {
  if(err) {
    console.log('Error getting Puachue Keng Data', err.res)
  }
});
axios.get("http://localhost:4200/api/puachue-phw")
.then(res => {
  setPuachuePhwData(res.data);
})
.catch(err => {
  if(err) {
    console.log('Error getting Puachue Phw Data', err.res)
  }
});
axios.get("http://localhost:4200/api/somthwj")
.then(res => {
  setSomthwjData(res.data);
})
.catch(err => {
  if(err) {
    console.log('Error getting Somthwj Data', err.res)
  }
});
  }, [])

  return (
    <div className="App">
      <Menu setSelectedData={setSelectedData}/>
      <div>
        {somthwjData.map(scriptData => {
          //TODO: Get Data to pass down to ScriptData
          console.log('Script', scriptData);
          return (
            <ScriptData
              key={scriptData.id}
              selectedData={selectedData} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
