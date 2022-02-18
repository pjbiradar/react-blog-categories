import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import Style from './Style.css'

export default function Header() {
    const [show, setShow] = useState(false);
    const bar = () => {
        setShow(!show)
        console.log("hello");

    }
    return (
        <div >
            <div className='top'>
                <h1 >The Sirens</h1>
                <span onClick={bar} className='menu'>
                    <i class="fas fa-bars"></i>

                </span>
            </div>
                <div className={show?"start":"no"}>

                    <ul>
                        <li><Link to='/home'><h3>Home</h3></Link></li>
                        <li><Link to='/bollywood'><h3>Bollywood</h3></Link></li>
                        <li><Link to='/hollywood'><h3>Hollywood</h3></Link></li>
                        <li><Link to='/travel'><h3>Travel</h3></Link> </li>
                        <li><Link to='/sports'><h3>Sports</h3></Link></li>
                        <li><Link to='/food'><h3> Food</h3></Link></li>
                    </ul>
                </div>
            


        </div>
    )
}
