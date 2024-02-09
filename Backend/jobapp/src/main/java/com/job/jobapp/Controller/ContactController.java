package com.job.jobapp.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.job.jobapp.Entity.Contact;
import com.job.jobapp.Repo.RepoContact;
import com.job.jobapp.Service.ServiceContact;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController

public class ContactController {
    
    @Autowired
    ServiceContact con;

    @Autowired
    RepoContact contact;
    @Tag(name="Contact Add",description="Stores the details of users who want responses")
    @PostMapping("/addCon")
    public String add(@RequestBody Contact cont)
    {
         contact.save(cont);
         return "added";
    }
}
