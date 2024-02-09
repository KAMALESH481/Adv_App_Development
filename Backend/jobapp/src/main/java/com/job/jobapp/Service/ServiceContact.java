package com.job.jobapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.job.jobapp.Entity.Contact;
import com.job.jobapp.Repo.RepoContact;
@Service
public class ServiceContact {


    @Autowired
    RepoContact con; 

    public String add(Contact cont) {
       con.save(cont);
        return "Contact added";
    }
    
}
