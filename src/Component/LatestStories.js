import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LatestStories() {
   
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
        <div>
            <h1 className='headingofstories'>Latest Stories</h1>
            <div className='storiesbox'>
                {start.filter((value) => value.Id <= 3).map(items =>
                    <div key={items.Id} className='storiesofcategory'  onClick={()=>store(`/category/${items.Id}`)}>
                        
                        {/* <img className='image1' src={items.imageurl} /> */}
                        <p className='titlestories'> {items.title} </p>
                        <p className='descriptionstories'>{items.description}</p>
                        <p className='categorystories,datestories'>{items.category}/{items.date}</p>
                        {/* <p className='datestories'>{items.date}</p> */}
                        {/* <span className='lines'><hr/></span> */}

                    </div>)}
            </div>
            
        </div>
    )
}
