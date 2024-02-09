package com.job.jobapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.tags.Tag;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Job Portal",
				version = "1.1.2",
				description = "Help the students to get hired",
				contact = @Contact(
						name = "Kamalesh",
						email = "kamaleshme007@gmail.com"
						)
				)
		)
@Tag(name="Main Application", description="Used to run the springboot")
public class JobappApplication {

	public static void main(String[] args) {
		SpringApplication.run(JobappApplication.class, args);
	}

}
