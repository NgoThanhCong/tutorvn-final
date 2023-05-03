package com.greenwich.tutorvn.database;

import com.greenwich.tutorvn.model.ERole;
import com.greenwich.tutorvn.model.Role;
import com.greenwich.tutorvn.model.SubjectClass;
import com.greenwich.tutorvn.model.User;
import com.greenwich.tutorvn.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Configuration
public class Database {
    @Autowired
    PasswordEncoder encoder;

    // Generate template data
    @Bean
    CommandLineRunner initDatabase(TutorRepository tutorRepository ,
                                   CustomerRepository customerRepository,
                                   SubjectRepository subjectRepository, RoleRepository roleRepository, UserRepository userRepository){
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {

                Role role1 = new Role();
                role1.setId(1);
                role1.setName(ERole.ROLE_ADMIN);
                Role role2 = new Role();
                role2.setId(2);
                role2.setName(ERole.ROLE_MODERATOR);
                Role role3 = new Role();
                role3.setId(3);
                role3.setName(ERole.ROLE_USER);


                if(roleRepository.findAll().size()==0){
                    roleRepository.save(role1);
                    roleRepository.save(role2);
                    roleRepository.save(role3);
                }

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



                if(userRepository.findAll().size()==0){
                    User admin = new User();
                    admin.setId(1l);
                    admin.setUserName("super_admin");
                    admin.setEmail("super_admin@gmail.comp");
//                    admin.setBalance(1000000000);
                    admin.setCreatedTime(new Date());
//                    admin.setNote("This is super account");
                    Set<Role> roles = new HashSet<>();
                    admin.setPassWord(encoder.encode("Azd1232421@#$$$$$!!@!@$#$#$#$%%"));
                    //Mochoat6886@
                    Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                            .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                    roles.add(adminRole);
                    admin.setRoles(roles);
                    userRepository.save(admin);
                }

            }
        };
    }
}