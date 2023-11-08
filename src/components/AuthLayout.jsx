import React from "react";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import {useSelector} from "react-redux"

const Protected = ({ children, authentication = true }) => {
  const [loder, setloder] = useState(true);

  const navigate = useNavigate();
  const authstatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //TODO MAKE IT MORE EASY TO UNDERSTAND
    // if(authstatus ===true)   navigate("/")
    // else if(authstatus===false) navigate ("/login")//too easy in routing 

    if (authentication && authstatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authstatus !== authentication) {
      navigate("/");
    }
    setloder(false);
  }, [authstatus, navigate, authentication]);

  return loder ? <h1>Loading....</h1> : <>{ children }</>
};

export default Protected;
