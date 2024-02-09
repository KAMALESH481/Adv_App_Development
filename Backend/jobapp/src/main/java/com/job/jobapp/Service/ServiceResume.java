package com.job.jobapp.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.job.jobapp.Entity.EntityResume;
import com.job.jobapp.Repo.ResumeRepo;
@Service
public class ServiceResume {

    @Autowired
    ResumeRepo repo2;

    public String createResumeDetails(EntityResume resume) {
       repo2.save(resume);
       return "Resume Created";
    }



   public List<EntityResume> getRes() {
      return repo2.findAll();
   }



public void delete(String email) {
    repo2.deleteById(email);
}



public void updateRes(String email, String entity) {
    repo2.saveAndFlush(entity);
}

}
