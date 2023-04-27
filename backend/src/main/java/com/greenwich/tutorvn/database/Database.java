package com.greenwich.tutorvn.database;

import com.greenwich.tutorvn.model.SubjectClass;
import com.greenwich.tutorvn.repository.CustomerRepository;
import com.greenwich.tutorvn.repository.SubjectRepository;
import com.greenwich.tutorvn.repository.TutorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Date;

@Configuration
public class Database {


    // Generate template data
    @Bean
    CommandLineRunner initDatabase(TutorRepository tutorRepository ,
                                   CustomerRepository customerRepository,
                                   SubjectRepository subjectRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {

                SubjectClass subjectClass1 = new SubjectClass();
                subjectClass1.setId(1L);
                subjectClass1.setGrade(1);
                subjectClass1.setName("Maths");
                subjectClass1.setCategory("math ");

                SubjectClass subjectClass4 = new SubjectClass();
                subjectClass4.setId(4L);

                subjectClass4.setGrade(4);
                subjectClass4.setName("Physics");
                subjectClass4.setCategory("physic");

                SubjectClass subjectClass2 = new SubjectClass();
                subjectClass2.setGrade(2);
                subjectClass2.setId(2L);

                subjectClass2.setName("Literature");
                subjectClass2.setCategory("literature ");

                SubjectClass subjectClass3 = new SubjectClass();
                subjectClass3.setGrade(3);
                subjectClass4.setId(3L);

                subjectClass3.setName("Geography");
                subjectClass3.setCategory("geography ");


                SubjectClass subjectClass8 = new SubjectClass();
                subjectClass8.setGrade(8);
                subjectClass8.setId(8L);

                subjectClass8.setName("Biology");
                subjectClass8.setCategory("biology ");

                subjectRepository.save(subjectClass1);
                subjectRepository.save(subjectClass2);
                subjectRepository.save(subjectClass3);
                subjectRepository.save(subjectClass4);
                subjectRepository.save(subjectClass8);



            }
        };
    }
}