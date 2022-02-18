import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';


export const CreateCont = createContext();

export const Provide = (props) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("https://react-blog-backendd.herokuapp.com/api/v1/blog").then((res)=>{
            // console.log(res);
            setData(res.data)
        })
    },[])

    return (
        <CreateCont.Provider value={[data,setData]}>
            {props.children}
        </CreateCont.Provider>
    )
}