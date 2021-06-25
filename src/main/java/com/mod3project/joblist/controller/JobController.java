package com.mod3project.joblist.controller;

import com.mod3project.joblist.model.Job;
import com.mod3project.joblist.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}
