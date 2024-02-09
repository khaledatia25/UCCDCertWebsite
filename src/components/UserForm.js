import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { history } from '../routers/AppRouter';

export default class UserForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: props.user ? props.user.name : '',
            description: props.user ? props.user.description : '',
            nid: props.user ? props.user.nid : '',
            gender: props.user ? props.user.gender : 'm',
            startDate: props.user ? moment(parseInt(props.user.startDate)): moment(),
            endDate: props.user ? moment(parseInt(props.user.endDate)) : moment(),
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
    
    onSubmit = (e) => {
        e.preventDefault();
        console.log("goooo");
            this.props.onSubmit({
                name: this.state.name,
                description: this.state.description,
                nid: this.state.nid,
                gender: this.state.gender,
                startDate: this.state.startDate.valueOf(),
                endDate: this.state.endDate.valueOf(),
                program: this.state.program,
                hours: this.state.hours,
            });
    };

    render(){
        return (
                <form className="user-form" onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <fieldset>
                        <label>Name:</label>
                        <input 
                            className='form-control'
                            placeholder='Enter Name'
                            type="text"
                            value={this.state.name}
                            onChange={this.onNameChange}
                            required
                        />
                    </fieldset>
                    <fieldset>
                        <label>Program:</label>
                        <input 
                            className='form-control'
                            placeholder='Enter Program'
                            value={this.state.program}
                            type="text"
                            onChange={this.onProgramChange}
                        />
                    </fieldset>
                    <fieldset className='user-form-s'>
                        <div className='user-form--small'>
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
                        <div className='user-form--small'>
                        <label>Start Date:</label>
                        <SingleDatePicker
                            date={this.state.startDate}
                            onDateChange={this.onStartDateChange}
                            focused={this.state.startFocused}
                            onFocusChange={this.onStartFocusedChange}
                            id="start-date"
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                            />
                            </div>
                        <div className='user-form--small'>
                        <label>End Date:</label>
                        <SingleDatePicker
                            date={this.state.endDate}
                            onDateChange={this.onEndDateChange}
                            focused={this.state.endFocused}
                            onFocusChange={this.onEndFocusedChange}
                            id="end-date"
                            isOutsideRange={() => false}
                            numberOfMonths={1}
                        />
                        </div>
                       
                    </fieldset>
                    <fieldset>
                        <label>National ID:</label>
                        <input 
                            className='form-control'
                            placeholder='Enter National ID'
                            value={this.state.nid}
                            type="text"
                            onChange={this.onNidChange}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Desription:</label>
                        <input 
                            className='form-control'
                            placeholder='Enter Description'
                            value={this.state.description}
                            type="text"
                            onChange={this.onDescriptionChange}
                        />
                    </fieldset>
                    <fieldset className='hours'>
                        <label>Number of Hours:</label>
                        <input 
                            className='form-control'
                            placeholder='Enter Hours'
                            value={this.state.hours}
                            type="number"
                            onChange={this.onHoursChange}
                        />
                    </fieldset>
                    
                    
                    
                        <button  onClick={() => {
                            history.go(-1);
                        }} className="button">Save User</button>
                    
                    
                </form>
        );
    }

}


