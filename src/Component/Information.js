import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Information() {

    const [start, setStart] = useState([]);
    
    const { Id } = useParams();
    useEffect(()=>{
        axios.get(`https://react-blog-backendd.herokuapp.com/api/v1/blog/category/${Id}`
       ).then((req,res)=>{
            const data=req.data;
            setStart(...data)
        })
    },[Id])




    return (
        <div>
            {/* {start.filter((value) => value.Id === Id).map((items,index) => { */}
                {/* return ( */}

                    <div   className='deets'>
                        <h1 className='titleinfo'>{start.title}</h1>
                        <div>
                            {/* <h4 className='sharing'>{items.share}</h4> */}
                            <span className='insta'>
                                <i className="fab fa-instagram"></i>
                            </span>
                            <span className='facebook'>
                                <i className="fab fa-facebook"></i>
                            </span>
                            <span className='twitter'>
                                <i className="fab fa-twitter-square"></i>
                            </span>
                        </div>
                        <img className='extra' src={start.extra} alt='' />
                        <p className='paradeets'>{start.details}</p>
                        <img className='imagedeets' src={start.detailsimage} alt='' />
                    </div>


                )
            {/* ) */}
            {/* } */}

        </div>
    )
}
