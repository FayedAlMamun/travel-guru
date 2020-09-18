import React from 'react';
import './Home.css';
// import Fakedata from '../../Fakedata/Place'
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
            {/* <div className="row home-margin">
                <div className="col-md-6 container">
                    <h1>COX'S BAZAR</h1>
                    <p>p ipsum dolor sit amet consectetur adipisicing elit. Vero, quam. Neque voluptate accusamus placeat quibusdam earum, dolorum debitis eos! Sapiente quae sint perspiciatis. Nisi ab dolores magnam deserunt. Unde, repudiandae!Repudiandae ipsum et rem, eveniet odio officiis quaerat accusamus nesciunt sapiente mollitia tempora ratione beatae voluptates voluptatibus quidem accusantium dolorum enim labore deleniti, molestias ea veritatis ex. Tempora, veritatis odit!</p>
                    <button className='btn-home'>Booking →</button>
                </div>
                <div className="col-md-6 container">
                    <div class="card-deck">
                        {
                            Fakedata.map((places) => {
                                return ([
                                    <Link to={"/booking/" + places.id}>
                                        <div className={places.style}>

                                            <div className="card-body">
                                                <h3>{places.title}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                ])
                            })
                        }
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Home;