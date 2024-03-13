import React, { useState } from "react";
import Courses from "./Components/Course/Courses";
import Cart from "./Components/Course/Cart";

const App = () => {

  const [titles,setTitles] = useState([]);
  const handelTitle = item => {
    const newTitels = [...titles, item];
    setTitles(newTitels);
  }

  return (
    <div className="md:max-w-[1440px]  mx-auto bg-[]">
      <h1 className="text-3xl font-bold text-center mt-12 mb-8">Course Registration</h1>
      <div className="md:flex">
        <Courses handelTitle={handelTitle}/>
        <Cart titels={titles}/>
      </div>
      
    </div>
  );
};

export default App;
