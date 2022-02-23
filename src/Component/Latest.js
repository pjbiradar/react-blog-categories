import { useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { CreateCont } from './Createcontext';


export default function Latest() {
    const [data] = useContext(CreateCont);
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
                        data.filter((value) => load? value.id <= 6 : value.id<4 ).map((items,index) => {
                            return(
                                <div key={index} className='boxlatest'  onClick={() => store(`/category/${items.id}`)}>
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

