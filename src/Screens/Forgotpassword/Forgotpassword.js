import React, { useEffect, useState } from "react";
import './Forgotpassword.css'
import { Link } from "react-router-dom";

const Forgot = () => {

  return (
    <div style={{margin:"20px"}}>
      <div>forgot screen</div><br/>
      <Link to="/"><button>click here to login login</button> </Link>
    </div>
  );
};
export default Forgot;