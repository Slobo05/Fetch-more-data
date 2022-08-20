import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Lista from './Lista';

function App() {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [vidi, setVidi] = useState(false);
  const [zavrseno, setZavrseno] = useState(false);

  const url = `https://swapi.dev/api/people/${page}`

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    setVidi(true)
    try{
      const response = await axios.get(url);
      const rezultat = response.data

      if(response.status === 200) {
        setPage(page + 1);
        setData([...data].concat(rezultat))
      }
    }
    catch (e) {
      console.log(e);
      setZavrseno(true)
    }
    setVidi(false)
  }

  return (
    <div className="okvir">
      <Lista data={data}/>
      {vidi && <div className='krug'/>}
      {!zavrseno ? (
        !vidi && <button onClick={fetchData}>Vidi jos</button>
      ) : 
        <h3 style={{ color: 'red' }}>Nema vise</h3>
      }
    </div>
  );
}

export default App;
