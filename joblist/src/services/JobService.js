import axios from 'axios';


const JOB_API_BASE_URL = "http://localhost:8080/api/jobs"

class JobService {

    getJobs(){
        return axios.get(JOB_API_BASE_URL)
    }

    createJob(job){
        return axios.post(JOB_API_BASE_URL, employee)
    }

}

export default new JobService()