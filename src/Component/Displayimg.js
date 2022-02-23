
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateCont } from './Createcontext';
export default function Displayimg() {


    const [data] = useContext(CreateCont);
    let store = useNavigate();
    // if(data!=undefined){

    // }
    // else{
        
    // }

    return (

        <div className='disp1' >
            {data.filter((value) => value.id <= 1).map((items,index) =>
                <div key={index} className='disp2' onClick={() => store(`/category/${items.id}`)}>

                    <img className='bigimg' src={items.imageurl} alt='' />
                    <div className='datamove'>
                        <p> {items.title} </p>
                        {/* <p>{items.description}</p> */}
                        <p>{items.category}/{items.date}</p>
                    </div>

                </div>
            )
            }
          
            <div>
                {data.filter((value)=> value.id==='3').map((items,index)=>
                    <div key={index}>
                    <img className='imagemini' src={items.imageurl} alt='' onClick={() => store(`/category/${items.id}`)} />
                    <p className='dataing'>{items.category}/{items.date}</p>
                </div>)}
                {data.filter((value)=> value.id==='4').map((items,index)=>
                    <div key={index} className='brek2'>
                    <img className='imagemini2' src={items.imageurl} alt='' onClick={() => store(`/category/${items.id}`)} />
                    <p className='dataing'>{items.category}/{items.date}</p>
                </div>)}
            </div>
            



        </div>
    )
}
