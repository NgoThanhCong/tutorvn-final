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

    @Bean
    CommandLineRunner initDatabase(TutorRepository tutorRepository , CustomerRepository customerRepository, SubjectRepository subjectRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {

                SubjectClass subjectClass1 = new SubjectClass();
                subjectClass1.setId(1L);
                subjectClass1.setGrade(1);
                subjectClass1.setName("Mon Toan lop 1");
                subjectClass1.setCategory("toan ");

                SubjectClass subjectClass4 = new SubjectClass();
                subjectClass4.setId(4L);

                subjectClass4.setGrade(4);
                subjectClass4.setName("Mon Toan Lop 4");
                subjectClass4.setCategory("toan ");

                SubjectClass subjectClass2 = new SubjectClass();
                subjectClass2.setGrade(2);
                subjectClass2.setId(2L);

                subjectClass2.setName("Mon Toan Lop 2");
                subjectClass2.setCategory("toan ");

                SubjectClass subjectClass3 = new SubjectClass();
                subjectClass3.setGrade(3);
                subjectClass4.setId(3L);

                subjectClass3.setName("Mon Toan Lop 3");
                subjectClass3.setCategory("toan ");

                subjectRepository.save(subjectClass1);
                subjectRepository.save(subjectClass2);
                subjectRepository.save(subjectClass3);
                subjectRepository.save(subjectClass4);



            }
        };
    }
}