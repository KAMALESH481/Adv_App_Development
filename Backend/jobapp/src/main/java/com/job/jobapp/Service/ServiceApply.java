package com.job.jobapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.job.jobapp.Entity.EntityApply;
import com.job.jobapp.Repo.RepoApply;

@Service
public class ServiceApply {

    @Autowired
    RepoApply apply;
    
    public String applyAdd(EntityApply app) {
        apply.save(app);
        return "Applied";
    }

    public List<EntityApply> getApply() {
        return apply.findAll();
    }

    // public String deleteApply(String email) {
    //   apply.deleteByEmail(email);
    //    return "Deleted";
    // }

    public void deleteApply(String email) {

        apply.deleteById(email);
    }

    public void updateApply(EntityApply entity) {
        apply.saveAndFlush(entity);
    }


    

}
