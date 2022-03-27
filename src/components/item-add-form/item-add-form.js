import React, {Component} from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {
    state = {
        label: ""
    }
    onchangeItem = (e) => {
        this.setState({
            label: e.target.value
        })
     }
    formSubmit = (e) => {
        e.preventDefault()
        if (this.state.label) {
            this.props.onAddItem(this.state.label)
            this.setState({
                label: ""
            })
        }
    }

    render() {

        const {onAddItem} = this.props
        return (

            <form className="item-add-form d-flex" action=""
                  onSubmit={this.formSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onchangeItem}
                       placeholder="Hello, write something"
                       value={this.state.label}
                />
                <button className="btn btn-outline-secondary">Add element
                </button>
            </form>

        );
    }
}

