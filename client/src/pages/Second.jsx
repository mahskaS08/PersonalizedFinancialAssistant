import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWarning, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

export default function Second() {
  useEffect(()=>{
    AOS.init({duration:1000, offset:100})
  })
  const   [loading,setLoading]=useState(null);
  const [formData,setFormData]=useState({});

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })
    
  }
  return (
    <div className='mr-4 ml-4 ' data-aos='fade-right'>
      <div className='p-4 max-w-lg mx-auto border-2 black mt-8 rounded-xl shadow-2xl mb-10 '
      >
        
        
       <h1 className='text-xl text-center font-bold'>INVESTMENT ADVISOR</h1> 
        <form className='flex flex-col gap-5 p-6'>
        
        <div className='flex relative' >
        <FontAwesomeIcon icon={faSackDollar} className=" text-gray-400 h-6 mt-4 ml-3 absolute " />
          <input type="number" placeholder='income' className='w-full pl-10 border p-4 shadow-md 
          rounded-lg  focus:bg-gray-200' id='income'  autoComplete="username" required
            onChange={handleChange}
          />
           </div> 
           
        <div className='flex gap-4'>
        <FontAwesomeIcon icon={faWarning} className="  text-gray-400 h-6 mt-4 ml-3 absolute" />
          <input type="number" placeholder='Risk' className=' w-full border p-4 shadow-md pl-10
          rounded-lg  focus:bg-gray-200 ' id='Risk' autoComplete="current-password" required/>
        </div>
          
          
    
  <button disabled={loading} className='bg-blue-900 text-white p-2.5 rounded-lg hover:bg-blue-700  
          disabled:bg-gray-500 w-full '>
          {loading ? 'Loading...' : 'Generate' } </button>

        </form>

      </div>
    
    </div>
  );
}


