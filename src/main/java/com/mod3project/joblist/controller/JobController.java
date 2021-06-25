package com.mod3project.joblist.controller;

import com.mod3project.joblist.model.Job;
import com.mod3project.joblist.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/")
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @GetMapping("jobs")
    public List<Job> getJob(){
        return this.jobRepository.findAll();
    }
}
