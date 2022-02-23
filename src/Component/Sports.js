import axios from 'axios';
import { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Sports() {
    const [start, setStart] = useState([]);
    useEffect(()=>{
        axios.get("https://react-blogproject.herokuapp.com/api/v1/blog",
        {
            params:{category:"Sports"}

        }).then((req,res)=>{
            const data=req.data;
            setStart(data)
        })
    },[])

    
  

    const [load, setLoad] = useState(false);
    const btnclick = () => {

        setLoad(true)
        console.log("hello");

    }
    let store = useNavigate();
    const filterc = start;
    if(start.length<=0){
        return (<div>
            <i className="fa-5x fa-solid fa-spinner"></i>
        </div>)
    }else
    return (
        <div>
            <h1 className='latest'>Latest</h1>
            <div className='boxmain'>
                {
                    filterc.filter((value) => load ? value.id <=22 : value.id <=20).map((items) => {
                        return (
                            <div className='boxlatest' onClick={() => store(`/category/${items.id}`)}>
                                <img className='imageslatest' src={items.imageurl} alt='' />
                                <div className='space'>
                                    <p className='titlelatest'> {items.title}</p>
                                    <p className='descriptionlatest'>{items.description}</p>
                                    <p className='categorylatest,datelatest'>{items.category}/{items.date}</p>
                                    {/* <p className='datelatest'>{items.date}</p> */}
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <button className='button' onClick={btnclick}>Load More</button>
            <div className="postaddbolly">
                <h2 className='advertise'> Advertisement</h2>



            </div>
            <div className='mainbollywood'>
                <h1>TopPosts</h1>

                {filterc.filter((value) => value.likes >= 100).map((items) => {
                    return (
                        <div className='spacingbolly' onClick={() => store(`/category/${items.id}`)}>

                            <img className='imagetoppost' src={items.imageurl} alt='' />
                            <div className='straight'>
                                <p> {items.title} </p>
                                <p>{items.description}</p>
                                <p>{items.category}/{items.date}</p>
                                <p></p>
                            </div>
                            <hr/>

                        </div>


                    )

                })}

            </div>

        </div>
    )
}