
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateCont } from './Createcontext';
export default function Displayimg() {


    const [data] = useContext(CreateCont);
    let store = useNavigate();

    return (
        <div className='disp1' >
            {data.filter((value) => value.Id <= 1).map((items,index) =>
                <div key={index} className='disp2' onClick={() => store(`/category/${items.Id}`)}>

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
                {data.filter((value)=> value.Id==='3').map((items,index)=>
                    <div key={index}>
                    <img className='imagemini' src={items.imageurl} alt='' onClick={() => store(`/category/${items.Id}`)} />
                    <p className='dataing'>{items.category}/{items.date}</p>
                </div>)}
                {data.filter((value)=> value.Id==='4').map((items,index)=>
                    <div key={index} className='brek2'>
                    <img className='imagemini2' src={items.imageurl} alt='' onClick={() => store(`/category/${items.Id}`)} />
                    <p className='dataing'>{items.category}/{items.date}</p>
                </div>)}
            </div>
            



        </div>
    )
}
