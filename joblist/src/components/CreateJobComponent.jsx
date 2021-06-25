import React, { Component } from 'react'

export default class CreateJobComponent extends Component {


    constructor(props){
        super(props)

        this.state  = {
            rating: '',
            job_title: '',
            company: '',
            location: '',
            description: '',
            applied: '',
            status: ''
        }
    }

    changeRatingHandler = (event) => {
        this.setState({rating: event.target.value})
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Job</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Rating</label>
                                        <input placeholder="Rating" name="rating" className="form-control" value={this.state.rating} onChange={this.changeRatingHandler}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
