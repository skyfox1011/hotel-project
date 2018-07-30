import React from 'react';
import $ from 'jquery';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            hotel: '',
            arrival: '',
            departure: '',
        }

        this.change = this.change.bind(this);
        this.submitData = this.submitData.bind(this);
    }

    change(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitData() {
        $.ajax({
            type: 'POST',
            url: '/reservation',
            contendType: 'application/json',
            data: { 
                name: this.state.name,
                hotel: this.state.hotel,
                arrival: this.state.arrival,
                departure: this.state.departure
            }
        })
        .done(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <div>
                <label>Name: </label>
                <input type="text" name="name" onChange={this.change} /><br />
                <label>Hotel Name: </label>
                <input type="text" name="hotel" onChange={this.change} /><br />
                <label>Arrival Date: </label>
                <input type="date" name="arrival" onChange={this.change} /><br />
                <label>Departure Date: </label>
                <input type="date" name="departure" onChange={this.change} /><br />
                <button onClick={this.submitData}>Submit</button>
            </div>
        )
    }
}

export default Input;