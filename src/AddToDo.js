import React, { Component } from 'react';

class AddToDo extends Component {
    state = {
        id: null,
        content: '',
        date: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state);
        this.setState({
            content: '',
            date: ''
        });
    }
    render() {
        return (
            <div className="add-todo-form">
                <hr />
                <h3 className="text-center">Add ToDo</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-8">
                            <label htmlFor="content">Content</label>
                        </div>
                        <div className="col-2">
                            <label htmlFor="date">Date</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 form-group">
                            <input type="text" className="form-control" id="content" onChange={this.handleChange} value={this.state.content} required />
                        </div>
                        <div className="col-2 form-group">
                            <input type="text" className="form-control" id="date" onChange={this.handleChange} value={this.state.date} />
                        </div>
                        <div className="col-2">
                            <button className="btn btn-secondary btn-block">Add</button>
                        </div>
                    </div>
                </form>
                <hr />
            </div>
        );
    }
}

export default AddToDo;