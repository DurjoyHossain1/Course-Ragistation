import React, { useState } from "react";
import Courses from "./Components/Course/Courses";
import Cart from "./Components/Course/Cart";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export  const totalCradit = 15;

const App = () => {

  const [titles,setTitles] = useState([]);

  const handelTitle = item => {
  const newTitels = [...titles, item];

  const cart =  titles.reduce((p,c) => p + c.time  ,0)
  if (cart + item.time > totalCradit) {
   return  toast.error('Only 15 Cradits Allow');
  }
  
  const alreadyExist = titles.find(e => e.id === item.id);
  if (!alreadyExist) {
    setTitles(newTitels)
    toast.success("Course Added");
  }
  else{
    toast.warn("Course Already Exist");
  }

  };
  
  return (
    <div className="md:max-w-[1440px]  mx-auto ">
      <h1 className="text-3xl font-bold text-center mt-12 mb-8">Course Registration</h1>
      <div className="md:flex ">
        <Courses  handelTitle={handelTitle}/>
        <Cart  titels={titles}/>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
