import React from 'react';
import './Home.css';
import logo from '../../Image/Logo.png';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='bg-primary'>
            <div className='header d-flex'>
                <img className='logo' src={logo} alt="" />
                <input type="text" placeholder='search your destination' />
                <nav>
                    <a href="#home">News</a>
                    <a href="#home">Blog</a>
                    <a href="#home">Destination</a>
                    <a href="#home">Contact</a>
                </nav>
                <Link to="/login"><button className='btn-home'>Login</button></Link>
            </div>
        </div>
    );
};

export default Home;