package com.job.jobapp.Controller;

import java.util.List;

import javax.swing.text.html.parser.Entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.job.jobapp.Entity.EntityApply;
import com.job.jobapp.Service.ServiceApply;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
public class ApplyController {

    @Autowired
    ServiceApply apply;
    
    @Tag(name="User Application for jobs",description="Users can apply for various jobs")
    @PostMapping("/Apply")
    public String applyadd(@RequestBody EntityApply app)
    {
        return apply.applyAdd(app);
    }
    @Tag(name="User Application for jobs",description = "Users can view the details of the job Application")
    @GetMapping("/getApply")
    public List<EntityApply> get()
    {
        return apply.getApply();
    }
    @Tag(name="Delete Application",description = "Users can delete the job application")
    @DeleteMapping("/delApply/{email}")
    public String delApply(@PathVariable("email") String email)
    {
        apply.deleteApply(email);
        return "Deleted";
    }
    @Tag(name="Users Updation",description = "User can update the application")
    @PutMapping("/updateApply")
    public String put(@RequestBody EntityApply entity) {
        apply.updateApply(entity);
         return "Updated";
    }


}
