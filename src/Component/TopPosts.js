import './Style.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TopPosts() {
    const [start, setStart] = useState([]);
    useEffect(()=>{
        axios.get("https://react-blog-backendd.herokuapp.com/api/v1/blog",
       ).then((req,res)=>{
            const data=req.data;
            setStart(data)
        })
    },[])

    let store = useNavigate();

    return (
        <div className='up'>
            <h1 className='headingoftoppost'>Top Posts</h1>
            <div className='tophead'>
                {start.filter((value) => value.Id <= 3).map((items, index) =>
                    // <div className={index == 0 ? "left" : "right"}>
                    <div key={index} className='spacing' onClick={() => store(`/category/${items.Id}`)}>
                        <img className='imagetoppost' src={items.imageurl} alt='' />
                        <div className='move'>
                            <p className='highlight'> {items.title}</p>  
                            {/* <span className='indexhighlight'>{index}</span> */}
                           
                            <p>{items.description}</p>
                            <p>{items.category}/{items.date}</p>


                            <span className='hori'> <hr /></span>
                        </div>


                    </div>
                    // <div/>
                )
                }
            </div>
        </div>

    )
}
