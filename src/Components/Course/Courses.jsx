import React, { useEffect, useState } from 'react'
import Course from './Course'


const Courses = ({handelTitle}) => {
    const [data,setData] = useState([]);
    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setData(data));
    },[]);
    console.log(data);
  return (
    <div className='md:max-w-[1100px]  md:grid grid-cols-3 gap-5'>
        {data.map((item,index) => < Course handelTitle={handelTitle} key={index} item={item} />)}
        
    </div>
  )
}

export default Courses