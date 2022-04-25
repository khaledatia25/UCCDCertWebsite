import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class UserForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: props.user ? props.user.name : '',
            description: props.user ? props.user.description : '',
            nid: props.user ? props.user.nid : '',
            gender: props.user ? props.user.gender : 'm',
            startDate: props.user ? moment(props.user.startDate): moment(),
            endDate: props.user ? moment(props.user.endDate) : moment(),
            program: props.user ? props.user.program : "",
            hours: props.user ? props.user.hours : 0,
            startFocused: false,
            endFocused: false,
            error: '',
        }
    };
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNidChange = (e) => {
        const nid = e.target.value;
        this.setState(() => ({nid}));
    };

    onGenderChange = (e) => {
        const gender = e.target.value;
        this.setState(() => ({gender}));
    };

    onProgramChange = (e) => {
        const program = e.target.value;
        this.setState(() => ({program}));
    };

    onHoursChange = (e) => {
        const hours = e.target.value;
        this.setState(() => ({hours}));
    };

    onStartDateChange = (startDate) => {
        if(startDate){
            this.setState(() => ({startDate}));
        }
    };

    onEndDateChange = (endDate) => {
        if(endDate){
            this.setState(() =>({endDate}));
        }
    };

    onStartFocusedChange = ({focused}) => {
        this.setState(() => ({startFocused: focused}));
    };

    onEndFocusedChange = ({focused}) => {
        this.setState(() => ({endFocused: focused}));
    };
    
    onSumbit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    render(){
        return (
            <div className='container1'>
                <form onSubmit={this.onSumbit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <div className='form-group'>
                        <label>Name:</label>
                        <input 
                            className='form-control'
                            placeholder='Enter Name'
                            type="text"
                            value={this.state.name}
                            onChange={this.onNameChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>National ID:</label>
                        <input 
                            className='form-control'
                            placeholder='Enter National ID'
                            value={this.state.nid}
                            type="text"
                            onChange={this.onNidChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Program:</label>
                        <input 
                            className='form-control'
                            placeholder='Enter Program'
                            value={this.state.program}
                            type="text"
                            onChange={this.onProgramChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Desription:</label>
                        <input 
                            className='form-control'
                            placeholder='Enter Description'
                            value={this.state.description}
                            type="text"
                            onChange={this.onDescriptionChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Number of Hours:</label>
                        <input 
                            className='form-control'
                            placeholder='Enter Hours'
                            value={this.state.hours}
                            type="number"
                            onChange={this.onHoursChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Gender:</label>
                        <select
                            className="select"
                            value={this.state.gender}
                            onChange={this.onGenderChange}
                        >
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Start Date:</label>
                        <SingleDatePicker
                            date={this.state.startDate}
                            onDateChange={this.onStartDateChange}
                            focused={this.state.startFocused}
                            onFocusChange={this.onStartFocusedChange}
                            id="start-date"
                            numberOfMonths={1}
                            />
                    </div>
                    <div className='form-group'>
                        <label>End Date:</label>
                        <SingleDatePicker
                            date={this.state.endDate}
                            onDateChange={this.onEndDateChange}
                            focused={this.state.endFocused}
                            onFocusChange={this.onEndFocusedChange}
                            id="end-date"
                            numberOfMonths={1}
                        />
                    </div>
                    <div>
                        <button className="btn btn-danger">Save User</button>
                    </div>
                </form>
            </div>
        );
    }

}


