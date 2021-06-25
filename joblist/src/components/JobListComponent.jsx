import React, { Component } from 'react'
import JobService from '../services/JobService'

export default class JobListComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            jobs: []
        }
        this.addJob = this.addJob.bind(this)
    }

    componentDidMount(){
        JobService.getJobs().then((response) => {
            this.setState({ jobs: response.data })
        })
    }

    addJob(){
        // allows us to manually control the history of the broswer
        this.props.history.push('/add-job')
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Jobs List</h2>
                
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addJob}>Add Job</button>
                </div>
                
                <div className="row">
                    <table className="table table-striped table-bordered">
                        {/* Labels for the table */}
                        <thead>
                            <tr>
                                <th>Rating</th>
                                <th>Job Title</th>
                                <th>Company</th>
                                <th>Location</th>
                                <th>Description</th>
                                <th>Applied</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody>
                            {/* For each "job", render a table row with a key of job id,
                            and table data corresponding to rating, job title, etc. */}
                            {
                                this.state.jobs.map(
                                    job =>
                                    <tr key = {job.id}>

                                            <td>{job.rating}</td>
                                            <td>{job.job_title}</td>
                                            <td>{job.company}</td>
                                            <td>{job.location}</td>
                                            <td>{job.description}</td>
                                            <td>{job.applied}</td>
                                            <td>{job.status}</td>
                                        
                                    </tr>
                                    )
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        )
    }
}
