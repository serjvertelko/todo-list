import React, {Component} from 'react';

import './search-panel.css';


export default class SearchPanel extends Component {
    state = {
        term: ""
    }
    onchangeInput = (e) => {
        const term = e.target.value.toLowerCase();
        this.setState({term });
        this.props.onchangeInput(term);
    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
                   onChange={this.onchangeInput}
                   value={this.state.term}
            />
        );
    }
}




