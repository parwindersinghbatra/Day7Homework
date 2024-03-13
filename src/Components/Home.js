import React, { useState } from 'react'
import {data} from '../Data.js'
import './Home.css'
import { PiForkKnifeDuotone } from "react-icons/pi";



const Home = () => {
    // console.log(data)
const [food, setFood] = useState(data)

function filterData(name){
    let filterData = data.filter((item)=>{

        if(item.name.toLowerCase().includes(name.trim())){
                return true
        }
          return false  
        })
        setFood(filterData)
    }
  return (
    <div className='main_container'>
        <div className='Search_box'>
                <input type="text" name="search" placeholder='Search Restaurant...'
                onChange={(e) =>{
                    filterData(e.target.value);
                }}

                />
        </div>
        <div className='container'>
        
        {
            
            food.map((item) =>{
                return <div className='card'>
                        <div className='card_value'>
                            <h4>{item.name}</h4>
                            <div>{item.address}</div>
                            <div>{item.rating}</div>
                        </div>
                        <div className='footer_page'>
                            <span> <PiForkKnifeDuotone /> {item.type_of_food}</span>
                        </div>
                    </div>
            
            })
           
        }
    </div> </div>
  )
}

export default Home
