import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Information() {

    const [data, setData] = useState([]);
    
    const { id } = useParams();
    useEffect(()=>{
        axios.get(`https://react-blogproject.herokuapp.com/api/v1/blog/category/${id}`
       ).then((req,res)=>{
            const data=req.data;
            console.log(data)
            setData(...data)
        })
    },[id])

    return (
        <div>
            {/* {data.filter((value) => value.Id === Id).map((items,index) => { */}
                {/* return ( */}

                    <div   className='deets'>
                        <h1 className='titleinfo'>{data.title}</h1>
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
                        <img className='extra' src={data.extra} alt='' />
                        <p className='paradeets'>{data.details}</p>
                        <img className='imagedeets' src={data.detailsimage} alt='' />
                    </div>


                )
            {/* ) */}
            {/* } */}

        </div>
    )
}
