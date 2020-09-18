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
                    <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
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