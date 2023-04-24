package com.greenwich.tutorvn.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user")  // *dat ten cho bang
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "id")
    private Long id;

    @Column(nullable = false, unique = true)   // !.
    private String phone;

    @Column(nullable = false)    // !.
    private String password;

    @Column(nullable = false)
    private String email;
    private boolean isActive;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public User(Long id, String phone, String password, String email, boolean isActive) {
        this.id = id;
        this.phone = phone;
        this.password = password;
        this.email = email;
        this.isActive = isActive;
    }

    public User() {
    }

}
