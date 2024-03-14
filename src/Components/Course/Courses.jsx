import React, { useEffect, useState } from 'react'
import Course from './Course'


const Courses = ({handelTitle,handelHours}) => {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setData(data));
    },[]);
   
  return (
    <div className='md:max-w-[1100px]  md:grid grid-cols-3 gap-5'>
        {data.map((item,index) => < Course handelHours={handelHours} handelTitle={handelTitle} key={index} item={item} />)}
        
    </div>
  )
}

export default Courses