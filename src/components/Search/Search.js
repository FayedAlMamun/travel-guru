import React from 'react';
import { useParams } from 'react-router-dom';
import Fakedata from '../../Fakedata/Place'
import './Search.css'
import img1 from '../../Image/Rectangle 26.png'
import img2 from '../../Image/Rectangle 27.png';
import img3 from '../../Image/Rectangle 28.png';
import GoogleMap from '../GoogleMap/GoogleMap';
const Search = () => {
    const {placeId}=useParams();
    const places=Fakedata.find((place)=>place.id==placeId);
    return (
        <div className='search'>
            <h3>Welcome to {places.title}</h3>
            <div className="row">
                <div className="col-md-4">
                <div className="card card-item" style={{width:'25rem'}}>
                <img src={img1} className='card-img-top' alt=""/>
                <div className='card-body'>
                 <h5 className="card-title">{places.hotel1}</h5>
                <p className="card-text">{places.description1}</p>
                </div>

                </div>
                <div className="card card-item" style={{width:'25rem'}}>
                <img src={img2} className='card-img-top' alt=""/>
                <div className='card-body'>
                 <h5 className="card-title">{places.hotel2}</h5>
                <p className="card-text">{places.description2}</p>
                </div>

                </div>
                <div className="card card-item" style={{width:'25rem'}}>
                <img src={img3} className='card-img-top' alt=""/>
                <div className='card-body'>
                 <h5 className="card-title">{places.hotel3}</h5>
                <p className="card-text">{places.description3}</p>
                </div>

                </div>
                
                </div>
                <div className="col-md-8">
                    <GoogleMap></GoogleMap>
                </div>
            </div>

        </div>
    );
};

export default Search;