import React, { useState } from 'react';
import './App.css';
import Loader from './components/Loader';

const App = () => {
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState();
  const [data,setData] = useState({});


  const fetchData = () =>{
    setIsLoading(true);

    fetch('https://catfact.ninja/fact')
    .then(function(res){
      return res.json();
    })
    .then(function(res){
      console.log(res);
      setData({...res});
      setIsLoading(false);
    })
    .catch(()=>{
      setError("Unable to fetch data...")
      setIsLoading(false);
    })
    
  }


  return (
    <>
      <section className='data-container'>
        <div className='data'>
          {
            isLoading? <Loader/> :
                        error? error : data.fact
          }
        </div>
        <button onClick={fetchData}>Get Data</button>
      </section>
    </>
  )
}

export default App