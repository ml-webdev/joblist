import React, { Component } from 'react'
import JobService from '../services/JobService'

export default class UpdateJobComponent extends Component {
    constructor(props){
        super(props)

        this.state  = {
            id: this.props.match.params.id,
            rating: '',
            job_title: '',
            company: '',
            location: '',
            description: '',
            applied: '',
            status: ''
        }

        this.changeRatingHandler = this.changeRatingHandler.bind(this)
        this.changeJobTitleHandler = this.changeJobTitleHandler.bind(this)
        this.changeCompanyHandler = this.changeCompanyHandler.bind(this)
        this.changeLocationHandler = this.changeLocationHandler.bind(this)
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this)
        this.changeAppliedHandler = this.changeAppliedHandler.bind(this)
        this.changeStatusHandler = this.changeStatusHandler.bind(this)
        this.updateJob = this.updateJob.bind(this)
    }


    componentDidMount(){
        JobService.getJobById(this.state.id).then( (response)  => {
            let job = response.data
            this.setState({rating: job.rating}, {job_title: job.job_title},
                {company: job.company}, {location: job.location}, {description: job.description}, {applied: job.applied}, {status: job.status})
        })
    }

    updateJob = (e) => {
        e.preventDefault()

        let job = {rating: this.state.rating, job_title: this.state.job_title, company: this.state.company, location: this.state.location, description: this.state.description, applied: this.state.applied, status: this.state.status}
        console.log('job =>' + JSON.stringify(job))
        JobService.updateJob(job, this.state.id).then( response =>{
            this.props.history.push('/jobs')
        })

    }

    changeRatingHandler = (event) => {
        this.setState({rating: event.target.value})
    }
    changeJobTitleHandler = (event) => {
        this.setState({job_title: event.target.value})
    }
    changeCompanyHandler = (event) => {
        this.setState({company: event.target.value})
    }
    changeLocationHandler = (event) => {
        this.setState({location: event.target.value})
    }
    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value})
    }
    changeAppliedHandler = (event) => {
        this.setState({applied: event.target.value})
    }
    changeStatusHandler = (event) => {
        this.setState({status: event.target.value})
    }

    cancel(){
        this.props.history.push('/jobs')
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Job</h3>
                            <div className="card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Rating</label>
                                        <input placeholder="e.g. 4.5" name="rating" className="form-control" value={this.state.rating} onChange={this.changeRatingHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Job Title</label>
                                        <input placeholder="e.g. Full-Stack Developer" name="job_title" className="form-control" value={this.state.job_title} onChange={this.changeJobTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Company</label>
                                        <input placeholder="e.g. Coca-cola" name="company" className="form-control" value={this.state.company} onChange={this.changeCompanyHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Location</label>
                                        <input placeholder="e.g. Atlanta, GA" name="location" className="form-control" value={this.state.location} onChange={this.changeLocationHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Description</label>
                                        <input placeholder="e.g. ReactJS Full-Stack developer." name="description" className="form-control" value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Applied</label>
                                        <input placeholder="e.g. Yes" name="applied" className="form-control" value={this.state.applied} onChange={this.changeAppliedHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Status</label>
                                        <input placeholder="e.g. Awaiting Coding Assessment" name="status" className="form-control" value={this.state.status} onChange={this.changeStatusHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateJob}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
