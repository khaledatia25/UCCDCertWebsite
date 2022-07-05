import React from "react";
import { connect } from "react-redux";
import { setTextFilter, searchByID, searchByName, searchByProgram} from "../actions/filters";
const UserSearch = (props) => {
    return (
        <form className="search-form">
                <input  
                    type="text" 
                    placeholder="Search Users" 
                    value={props.filters.text}
                    onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value));
                    }}
                    />
                <select
                    value={props.filters.searchBy}
                    onChange={(e) => {
                        if(e.target.value === 'id'){
                            props.dispatch(searchByID());
                        } else if(e.target.value === 'name'){
                            props.dispatch(searchByName());
                        }else if(e.target.value === 'program'){
                            props.dispatch(searchByProgram());
                        }
                    }}
                >
                    <option value="id">ID</option>
                    <option value="program">Program</option>
                    <option value="name">Name</option>
                </select>
        </form>
    );
}
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(UserSearch);