import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateCont } from './Createcontext';

export default function LatestStories() {
   
    const [data] = useContext(CreateCont);
   
    
    let store = useNavigate();
   

    return (
        <div>
            <h1 className='headingofstories'>Latest Stories</h1>
            <div className='storiesbox'>
                {data.filter((value) => value.Id <= 3).map(items =>
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
