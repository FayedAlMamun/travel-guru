import React from 'react';
import Fakedata from '../../Fakedata/Place';
import { Link } from 'react-router-dom';
import './Details.css';

const Details = () => {
    return (
        <div className='bg-home'>
             <div className="row home-margin">
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
            </div>
        </div>
    );
};

export default Details;