
import './App.css';
import axios from 'axios'
import { AiOutlinePlus } from "react-icons/ai";
import { FaAnkh } from "react-icons/fa6";
import { useEffect, useState } from 'react';

function App() {
  
  const [city,setCity]=useState("Pune")
  const [result,setResult]=useState([])
  const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3848e8b149c94a54f1769b37acbb113d&units=metric`

  const inputHandler=(e)=>{
    setCity(e.target.value)
  }

  const handleSubmit=async()=>{
    try{
    const ress=await axios.get(api);
    console.log("response is -> ", ress)
    console.log("response ke ander main is -> ", ress.data)
    setResult(ress.data.main)
    
    console.log(ress.data.temp);
    }
    catch(error){
      console.log("something went wrong")
    }
  }
  

  useEffect(()=>{
    handleSubmit();
  },[])
  
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className='flex flex-col justify-center items-center h-[25rem] w-[20rem] bg-[#a5b4fc] border-slate-500 border-[0.5rem] rounded-[2rem] shadow-lg shadow-white'>


        <div className='flex  justify-center items-start h-[7rem] w-[17rem]'>
          <div className='flex  justify-center items-center rounded-[10rem] border-black border-[0.2rem] h-[2.5rem] text-center font-semibold bg-slate-300'>
          <input 
           type='text'
           placeholder='Enter City'
            className=' text-center bg-transparent font-bold '
            onChange={inputHandler}
            
          />
           <AiOutlinePlus className="mr-[1rem] text-[1rem] font-medium" onClick={handleSubmit}/>
          </div>
          
        </div>
       {
       !result?
       (
        <div className='px-[3.5rem]  flex  justify-between items-center h-[5rem] w-[17rem]'>
         data not found for this city

        </div>



       ):
       (
        <>
        <div className=' px-[3.5rem]  flex  justify-between items-center h-[5rem] w-[17rem]'>
          <div className="text-4xl mt-[0.7rem] text-white"><FaAnkh/></div>
          <div className=' text-[3rem]'>{city}</div>
        </div>


        <div className='flex flex-col justify-center items-center h-[10rem] w-[17rem] shadow-[1rem] bg-slate-300'>
          <div className="text-[2rem]">{result.temp}</div>
          <div className='flex space-x-2'> 
            <span>{result.temp_min}</span>
            <span>|</span>
            <span>{result.temp_max}</span>
          </div>
        </div>
        </>
       )
       }
      </div>
        
    </div>
  );
}

export default App;
