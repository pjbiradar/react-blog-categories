import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';


export const CreateCont = createContext();

export const Provide = (props) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("https://react-blogproject.herokuapp.com/api/v1/blog").then((req,res)=>{
            const dat=req.data;

            setData(dat)
        })
    },[])
    
 
    return (
        <CreateCont.Provider value={[data,setData]}>
            {props.children}
        </CreateCont.Provider>
    )
}