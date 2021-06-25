package com.mod3project.joblist.model;

import javax.persistence.*;

@Entity
@Table(name = "job")
public class Job {

    @Id
    @SequenceGenerator(
            name = "job_sequence",
            sequenceName = "job_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "job_sequence"
    )
    private long id;

    @Column(name = "rating")
    private double rating;

    @Column(name = "job_title")
    private String job_title;

    @Column(name = "company")
    private String company;

    @Column(name = "location")
    private String location;

    @Column(name = "description")
    private String description;

    @Column(name = "applied")
    private String applied;

    @Column(name = "status")
    private String status;

    public Job() {
    }

    public Job(double rating, String job_title, String company, String location, String description, String applied, String status) {
        this.id = id;
        this.rating = rating;
        this.job_title = job_title;
        this.company = company;
        this.location = location;
        this.description = description;
        this.applied = applied;
        this.status = status;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getJob_title() {
        return job_title;
    }

    public void setJob_title(String job_title) {
        this.job_title = job_title;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getApplied() {
        return applied;
    }

    public void setApplied(String applied) {
        this.applied = applied;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
