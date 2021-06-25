package com.mod3project.joblist.controller;

import com.mod3project.joblist.exception.ResourceNotFoundException;
import com.mod3project.joblist.model.Job;
import com.mod3project.joblist.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
public class JobController {

    @Autowired
    private JobRepository jobRepository;


//    get all jobs
    @GetMapping("/jobs")
    public List<Job> getJob(){
        return this.jobRepository.findAll();
    }

//    create job REST api
    @PostMapping("/jobs")
    public Job createJob(@RequestBody Job job){
        return jobRepository.save(job);
    }

//    get job by id rest api
    @GetMapping("/jobs/{id}")
    public ResponseEntity<Job> getJobById(@PathVariable Long id){
        Job job = jobRepository.
                findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Job does not exist with id :" + id));
        return ResponseEntity.ok(job);
    }

    @PutMapping("/jobs/{id}")
//    Update Job REST API
    public ResponseEntity<Job> updateJob(@PathVariable Long id, @RequestBody Job jobDetails){
        Job job = jobRepository.
                findById(id).orElseThrow(() -> new ResourceNotFoundException(
                "Job does not exist with id :" + id));
//        Rating
        job.setRating(jobDetails.getRating());

//        Job Title
        job.setJob_title(jobDetails.getJob_title());

//        Company
        job.setCompany(jobDetails.getCompany());

//        Location
        job.setLocation(jobDetails.getLocation());

//        Description
        job.setDescription(jobDetails.getDescription());

//        Applied
        job.setApplied(jobDetails.getApplied());

//        Status
        job.setStatus(jobDetails.getStatus());

        Job updatedJob = jobRepository.save(job);
        return ResponseEntity.ok(updatedJob);
    }




}
