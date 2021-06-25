package com.mod3project.joblist;

import com.mod3project.joblist.model.Job;
import com.mod3project.joblist.repository.JobRepository;
import org.apache.catalina.Store;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JoblistApplication implements CommandLineRunner {
	@Autowired
	private com.mod3project.joblist.repository.JobRepository jobRepository;

	public static void main(String[] args) {
		SpringApplication.run(JoblistApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		this.jobRepository.save(new Job(
				5, "Java Developer", "Google", "Atlanta, GA", "Looking for an entry/mid level Java Developer", "Yes", "Completed 1st Interview"));
	}
}
