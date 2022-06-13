import React from "react";
import { connect } from 'react-redux';
import Cert from "./Cert";
import Qr from '../actions/cert'
import TempleteItem from "./TempleteItem";


 
class CertPage extends React.Component {
    constructor(props){
        super(props);

        this.props = props;
        this.state = {
            id: props.user.id,
            tempNum: 1,
            date: false,
            description: false,
            hours: false,
            qr: 130,
        }
        this.numberOfRenderd = 0;
    }
    
    onTempClick = (e,t) => {
        this.setState({
            tempNum: t
        });
        e.preventDefault();
    }
    onDateCheck = (e) => {
        this.setState({
            date: e.target.checked
        });
        
        this.numberOfRenderd = e.target.checked ? this.numberOfRenderd +1 : this.numberOfRenderd -1;
        this.setState({
            qr: this.numberOfRenderd === 0 ? 130 : this.numberOfRenderd ===1 ? 94 : this.numberOfRenderd === 2 ? 62 : 27
        });
       
        
    }
    onDescriptionCheck = (e) => {
        this.setState({
            description: e.target.checked
        });
        this.numberOfRenderd = e.target.checked ? this.numberOfRenderd +1 : this.numberOfRenderd -1;
        this.setState({
            qr: this.numberOfRenderd === 0 ? 130 : this.numberOfRenderd ===1 ? 94 : this.numberOfRenderd === 2 ? 62 : 27
        });
        

    }
    onHoursCheck = (e) => {
        this.setState({
            hours: e.target.checked
        });
        this.numberOfRenderd = e.target.checked ? this.numberOfRenderd +1 : this.numberOfRenderd -1;
        this.setState({
            qr: this.numberOfRenderd === 0 ? 130 : this.numberOfRenderd ===1 ? 94 : this.numberOfRenderd === 2 ? 62 : 27
        });
        
    }
    download = () => {
        const options = {
            id: this.state.id,
            date: this.state.date,
            hours: this.state.hours,
            tempNum: this.state.tempNum,
            description: this.state.description
        };
        Qr(options);
    }
    render(){
        return (
            <div>
                <div className="sidenav">
                <hr/>
                    <div id="check-boxes">
                        <div>
                            <input value={this.state.date} type="checkbox" placeholder="date" id="date" onChange={(e) => this.onDateCheck(e)}/>
                            <label htmlFor="date">Date</label>
                        </div>
                        <div>
                            <input value={this.state.description} onChange={(e) => this.onDescriptionCheck(e)} type="checkbox" placeholder="description" id="description"/>
                            <label htmlFor="description">Description</label>
                        </div>
                        <div>
                            <input value={this.state.hours} onChange={(e) => this.onHoursCheck(e)} type="checkbox" placeholder="description" id="description"/>
                            <label htmlFor="hours">Hours</label>
                        </div>
                    </div>
                    <hr/>
                    <div className="title">Templetes</div>
                    <hr />{}

                    <div onClick={(e) => this.onTempClick(e,1)}>
                        <TempleteItem  temp={1} templeteName="Templete-1"/>
                    </div>
                    <div onClick={(e) => this.onTempClick(e,2)}>
                        <TempleteItem  temp={2} templeteName="Templete-2"/>
                    </div>
                    <div onClick={(e) => this.onTempClick(e,3)}>
                        <TempleteItem  temp={3} templeteName="Templete-3"/>
                    </div>
                    <div onClick={(e) => this.onTempClick(e,4)}>
                        <TempleteItem  temp={4} templeteName="Templete-4"/>
                    </div>
                    <div onClick={(e) => this.onTempClick(e,5)}>
                        <TempleteItem  temp={5} templeteName="Templete-5"/>                    
                    </div>
                    <button className="pure-button" onClick={() => this.download()}>Download</button>
                </div>
                <div className="cert-content" id="gg">
                    <Cert qrP = {this.state.qr} {...this.props.user} temp={this.state.tempNum} showHours={this.state.hours} showDate={this.state.date} showDesc={this.state.description}/>
                    
                </div>
                
            </div>
        );
    }

} 

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find((user) => user.id === props.params.id)
    }
}

export default connect(mapStateToProps)(CertPage);