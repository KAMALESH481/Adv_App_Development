package com.job.jobapp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.job.jobapp.Entity.Contact;
@Repository
public interface RepoContact extends JpaRepository<Contact,String>{
    
}
