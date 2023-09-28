import React ,{useContext} from 'react'
import { SearchBar,Input,Button } from './style'
import axios from 'axios'
import { AppContext } from '../Context/AppContextProvider'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
   const {location,setLocation,setData,data}=useContext(AppContext)
   const url=` https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6a6ada4069734965e8d7fcf74d2dd990`
   
    const FetchWeatherData=()=>
    {
    
       axios.get(url).then((res)=>{ setData(res.data)
                                    console.log(res.data)
                                   })
                     .catch(()=>{
                      if(location.trim()==='' )   
                      {
                          toast.error('Please enter the location')
                      }
                      else if(location!==data.name)
                      {
                        toast.error('City Not Found')
                      }
                     })
      
    }

    const handleClear=()=>{
      setData([])
      setLocation('')
    }
  
  return (
    <div>
      <SearchBar>
         <Input type='text' 
                placeholder='Enter location' 
                value={location} 
                onChange={(event)=>{setLocation(event.target.value)}}                 
         />
         <Button onClick={FetchWeatherData}>Get Weather</Button>
         <Button onClick={handleClear} >Clear Data</Button> 
      </SearchBar>
      <ToastContainer/>
    </div>
  )
}

export default Search
