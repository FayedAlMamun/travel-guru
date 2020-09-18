import React from 'react';
import {Link, useParams } from 'react-router-dom';
import Fakedata from '../../Fakedata/Place';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Booking.css'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const Booking = () => {
    const {id}=useParams();
    const places=Fakedata.find((place)=>place.id==id);
    const classes = useStyles();
    return (
        <div className={places.bookingStyle}>
            <div className="row booking-margin">
            <div className="col-md-6">
                <h1>{places.title}</h1>
                <p>{places.description}</p>          
            </div>
            <div className="col-md-6">
            <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
            <form>
            <h6>Origin</h6>
            <input style={{width:'220px'}} type="text" name="" id="" placeholder="starting Location" label="From"/>
            <br />
            <br />
            <h6>Destination</h6>
            <input type="text" style={{width:'220px'}}  name="" id="" placeholder={places.title} label="From"/>
            </form>
            <br/>
            <form className={classes.container} noValidate>

                <TextField
                    id="date"
                    label="From"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}

                />
                  <TextField
                    id="date"
                    label="To"
                    type="date"
                    defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <br></br>
            <Link to={"/search/"+places.id}><button type="button" class="btn btn-warning btn-lg">Start Booking</button></Link>
            </div>
            </div>
               
            </div>
            </div>
        </div>
    );
};

export default Booking;