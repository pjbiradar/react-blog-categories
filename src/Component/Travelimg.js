
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateCont } from './Createcontext';

export default function Travelimg() {

    const [data] = useContext(CreateCont);
    let store=useNavigate()
    
   

    return (
        <div className='travelimage'>
            {data.filter((value) => value.id ==='1').map(items =>
            
                <div  key={items.id}className='disp6'  onClick={() => store(`/category/${items.id}`)}>  
                    <img className='bigimg' src={items.imageurl} alt=''/>
                    <div className='datamove'>
                        <p> {items.title} </p>
                        {/* <p>{items.description}</p> */}
                        <p>{items.category}/{items.date}</p>
                    </div>

                </div>
            )
            }
            
        </div>
    )
}
