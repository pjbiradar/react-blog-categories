import {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { CreateCont } from './Createcontext';

export default function TheLatest() {
    
    const [data] = useContext(CreateCont);
    
    let store=useNavigate();
    

    return (

        <div>
            <h1 className='thelatest'>The Latest</h1>
            <div className='box'>
                {data.filter((value) => value.id <= 3).map(items =>
                    <div key={items.id} className='box2' onClick={() => store(`/category/${items.id}`)}>
                        <img className='image1' src={items.imageurl} alt='' />
                        <p className='title'> {items.title} </p>
                        <p className='description'>{items.description}</p>
                        <p className='category,date'>{items.category}/{items.date}</p>
                        {/* <p className='date'>{items.date}</p> */}

                    </div>)}
            </div>
        </div>
    )
}