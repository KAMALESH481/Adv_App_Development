package com.job.jobapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.job.jobapp.Entity.EntityResume;
import com.job.jobapp.Service.ServiceResume;

import io.swagger.v3.oas.annotations.tags.Tag;


@RestController
public class Controller {

    @Autowired
    ServiceResume signup;
    @Tag(name="Resume Creation",description = "Users create resumes")
    @PostMapping("/addResume")
    public String createResume(@RequestBody EntityResume resume)
    {
        return signup.createResumeDetails(resume);
    }

    @Tag(name="View Resume",description = "Users can view created resume")
    @GetMapping("/getResume")
    public List<EntityResume> getResume()
    {
        return signup.getRes();
    }
    @Tag(name="Delete Resume",description = "Users can delete resumes")
    @DeleteMapping("/deleteResume/{email}")
    public String delRes(@PathVariable("email") String email)
    {
        signup.delete(email);
        return "Resume Deleted";
    }
    @Tag(name="Resume Updation",description = "Users can update their resume based on email")
    @PutMapping("updateResume/{email}")
    public String putMethodName(@PathVariable String email, @RequestBody String entity) {
        signup.updateRes(email,entity);
        return "Resume Updated";
    }
}
