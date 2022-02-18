// import React, { CreateCont } from './Createcontext'
// import { useContext } from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Displayimg() {


    const [start, setStart] = useState([]);
    useEffect(()=>{
        axios.get("https://react-blog-backendd.herokuapp.com/api/v1/blog",
       ).then((req,res)=>{
            const data=req.data;
            setStart(data)
        })
    },[])
    // const [data] = useContext(CreateCont);

    let store = useNavigate();

    return (
        <div className='disp1' >
            {start.filter((value) => value.Id <= 1).map((items,index) =>
                <div key={index} className='disp2' onClick={() => store(`/category/${items.Id}`)}>

                    <img className='bigimg' src={items.imageurl} alt='' />
                    <div className='datamove'>
                        <p> {items.title} </p>
                        {/* <p>{items.description}</p> */}
                        <p>{items.category}/{items.date}</p>
                    </div>

                </div>
            )
            }
            {/* {data.filter((value) => value.Id === '3' || value.Id === '4').map(items =>
                <div className='imagemini'>
                    <img className='miniimg' src={items.imageurl} alt='' onClick={() => store(`/category/${items.Id}`)} />
                    <p className='dataing'>{items.category}/{items.date}</p>


                </div>

            )

            } */}
            <div>
                {start.filter((value)=> value.Id==='3').map((items,index)=>
                    <div key={index}>
                    <img className='imagemini' src={items.imageurl} alt='' onClick={() => store(`/category/${items.Id}`)} />
                    <p className='dataing'>{items.category}/{items.date}</p>
                </div>)}
                {start.filter((value)=> value.Id==='4').map((items,index)=>
                    <div key={index} className='brek2'>
                    <img className='imagemini2' src={items.imageurl} alt='' onClick={() => store(`/category/${items.Id}`)} />
                    <p className='dataing'>{items.category}/{items.date}</p>
                </div>)}
            </div>



        </div>
    )
}
