import './Style.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CreateCont } from './Createcontext';

export default function TopPosts() {
    const [data] = useContext(CreateCont);
   

    let store = useNavigate();

    return (
        <div className='up'>
            <h1 className='headingoftoppost'>Top Posts</h1>
            <div className='tophead'>
                {data.filter((value) => value.id <= 3).map((items, index) =>
                    // <div className={index == 0 ? "left" : "right"}>
                    <div key={index} className='spacing' onClick={() => store(`/category/${items.id}`)}>
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

    )}

