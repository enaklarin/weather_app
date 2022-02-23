import React,{useState} from 'react';
import axios from 'axios';

function App() {

 const[data,setData]=useState({})
 const[location,setLocation]=useState("")


 const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=hr&appid=3ea572f62136e82bce426ae331843e1e`;

 const searchLocation=(event)=>{
   if(event.key==="Enter"){
    axios.get(url).then((response)=>{
      setData(response.data)
    })
    setLocation("")
  }
   }
  
 

return (
    <div className="app">
      <div className="search">
        <input type="text" 
        value={location}
        onChange={event=>setLocation(event.target.value)}
        placeholder="Enter Location"
        onKeyPress={searchLocation}
        />
      </div>
      <div className="container">
        <div className="top">
<div className="location">
  <p> {data.sys? <p>{data.name}, {data.sys.country} </p> :null} </p>
  
  </div>
  <div className="temp">
    {data.main? <h1>{Math.round(data.main.temp)} °C</h1>: null}
    {/* /* <h1>
      /* <p>ovaj ne vraća temp jer je temp ćajld od mejn i onda 
      ako nije uspio dovatit mejn prije ,nemore vratit ni njegovo dite</p> */
      /* {data.main.temp}
      
    </h1> */ }

  
</div>
<div className="description">
  {data.weather? <p>{data.weather[0].main}</p>: null}
 
</div>

        </div>

        {data.name !=undefined && 
            <div className="bottom">
            <div className="feels">
            
              {data.main? <p className='bold'>{Math.round(data.main.feels_like)}°C</p>:null}
             <p>Feels Like</p>
            </div>
            <div className="humidity">
             
              {data.main? <p className='bold'>{data.main.humidity}%</p>:null}
              <p>Humidity</p>
            </div>
            <div className="wind">
            {data.wind? <p className='bold'>{data.wind.speed.toFixed()}km/h</p>:null}
             
             <p>Wind Speed
             </p>
            </div>
          </div>
        }
    
      </div>

    </div>
  );
}

export default App;
  


// on je za zaokurizit koristio tofixed a ja mat-round