import axios from 'axios';
import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Latest() {
    const [start, setStart] = useState([]);
    useEffect(()=>{
        axios.get("https://react-blog-backendd.herokuapp.com/api/v1/blog",
       ).then((req,res)=>{
            const data=req.data;
            setStart(data)
        })
    },[])
    let store=useNavigate();

    const [load, setLoad] = useState(false);
    const click=()=>{
     
        setLoad(true)

    }
    return (
        <div>
            <h1 className='latest'>Latest</h1>
            <div className='boxmain'>
                    {
                        start.filter((value) => load? value.Id <= 6 : value.Id<4 ).map((items) => {
                            return(
                                <div key={items} className='boxlatest'  onClick={() => store(`/category/${items.Id}`)}>
                                <img className='imageslatest' src={items.imageurl} alt='' />
                                <div className='space'>
                                    <p className='titlelatest'> {items.title} </p>
                                    <p className='descriptionlatest'>{items.description}</p>
                                    <p className='categorylatest,datelatest'>{items.category}/{items.date}</p>
                                </div>

                            </div>
                            )
                        })
                    }
            </div>
            <button className='button' onClick={click}>Load More</button>
        </div>
    )
}
