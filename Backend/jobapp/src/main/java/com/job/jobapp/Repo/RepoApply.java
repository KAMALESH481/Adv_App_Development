package com.job.jobapp.Repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.job.jobapp.Entity.EntityApply;
@Repository
public interface RepoApply extends JpaRepository<EntityApply,String>{

    
} 
