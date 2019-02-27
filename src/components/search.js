import React, { Component } from 'react'
import './search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onChange(this.state.value);
    }

    render() {
        return (
            <div className="search">
                <label>{this.props.label}</label>
                <input value={this.state.value} type="text" name="country" onChange={this.handleChange} onBlur={this.handleSubmit} />
            </div>
        )
    }
}

export default Search