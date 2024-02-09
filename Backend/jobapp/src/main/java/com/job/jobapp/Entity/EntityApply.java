package com.job.jobapp.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Data
@Entity

@Table(name="apply")
public class EntityApply {
    
    private String name;
    private int age;
    @Id
    private String email;
    private String address;
    private String gender;
    private String qualifications;

}
