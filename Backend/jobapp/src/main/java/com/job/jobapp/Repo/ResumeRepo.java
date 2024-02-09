package com.job.jobapp.Repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.job.jobapp.Entity.EntityResume;

public interface ResumeRepo extends JpaRepository<EntityResume,String>{

    @Query(value="Select * from resume")
    void saveAndFlush(String entity);

   
}
