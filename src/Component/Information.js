import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Information() {

    const [start, setStart] = useState([]);
    useEffect(()=>{
        axios.get("https://react-blog-backendd.herokuapp.com/api/v1/blog",
       ).then((req,res)=>{
            const data=req.data;
            setStart(data)
        })
    },[])


    const { id } = useParams();


    return (
        <div>
            {start.filter((value) => value.Id === id).map((items,index) => {
                return (

                    <div key={index}  className='deets'>
                        <h1 className='titleinfo'>{items.title}</h1>
                        <div>
                            {/* <h4 className='sharing'>{items.share}</h4> */}
                            <span className='insta'>
                                <i class="fab fa-instagram"></i>
                            </span>
                            <span className='facebook'>
                                <i class="fab fa-facebook"></i>
                            </span>
                            <span className='twitter'>
                                <i class="fab fa-twitter-square"></i>
                            </span>
                        </div>
                        <img className='extra' src={items.extra} alt='' />
                        <p className='paradeets'>{items.details}</p>
                        <img className='imagedeets' src={items.detailsimage} alt='' />
                    </div>


                )
            })}

        </div>
    )
}
