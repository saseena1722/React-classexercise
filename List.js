export default function List()
{
    const animals=["dog","cat","lion"]
    const result=animals.map((ani)=><li>{ani}</li>)
    return(
        <div>
            <ul>
                {result}
            </ul>
        </div>
    )
}

const InlineStyling=()=>
{
    return(
        <div>
            <h1 style={{color:"green"}}>Inline Style in JSX Example.</h1>
            <div style={{backgroundColor:"lightblue",color:"darkblue",padding:"10px",border:"1px solid blue",borderRadius:"5px"}}>

                <p style={{color:"darkblue",fontSize:"16px"}}>This is a paragraph with inline styles applied.</p>

            </div>
        </div>
    );
}
export default InlineStyling;
Manoj R12:45 PM
function InlineStyling(){
    return(
        <div>
           <h1 style={{color:'green'}}>
            Inline Style in JSX Example.
            </h1>
            <div  style={{backgroundColor:'lightblue', color:'darkblue', padding:'10px', border:'1px solid blue', borderRadius:'5px'}}>
            <p style={{color:'darkblue', fontSize:'16px'}}>
                This is a paragraph with inline styles applied.</p>
            </div>
        </div>
    )
}
export default InlineStyling;
Manoj R12:48 PM
import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <p>Welcome to the home page!</p>
        </div>
    )
}

export default Home;
import React from 'react';

const About = () => {
    return (
        <div>
            <h2>About</h2>
            <p>This is the about page.</p>
        </div>
    )
}

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <ul className='nav-links'>
                <li className='nav-link'><Link className="home" to={`/`}>Home</Link></li>
                <li className='nav-link'><Link className="about" to={`/about`}>About</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
ium-ttiz-nma