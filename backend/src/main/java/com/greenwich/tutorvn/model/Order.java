package com.greenwich.tutorvn.model;

import com.fasterxml.jackson.databind.DatabindException;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Order {
    // Order luu tru thong tin cua 1 don hang -= Co nghia la khi khach hang la Phu huynh goi dien den va yeu cau lop gia su thi chung ta tao 1 Order
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)   // Khai bao khoa chinh tu dong tang 1,2,3,4,....
    private Long id;
    private Long subject_Id;
    private Long customer_ID;

    private Long tutor_ID; // ID cua ong nhan lop = Bien nay update khi assign tutor vao day lop


    private  List<Long> listTutorRequired = new ArrayList<>(); // Nhung tutor y/c nhan lop
    private int grade;
    private float timeInLesson;
    private boolean gender; // gioi tinh cua hoc sinh
    private boolean genderRequired;// yeu cau giang vien nam hay nu
    private String phoneNumber; // so dien thoai khach hang
    private int learningMode; // hinh thuc hoc
    private String address; // Dia chi cua hoc sinh
    private float fee;
    private boolean isActive; // *Xac nhan viec hien thi hay ko len danh sach tutor; // public
    private boolean isDelete; // !xoa khoi danh sach lop hoc trong truong hop du lieu la Rac // xoa han khoi Admin nhung Database van luu tru
    private List<String> learningTime;
    private Date startDate;
    private Date createdTime;

    public Order(
            Long subject_Id, Long customer_ID,
            int grade, float timeInLesson,
            boolean gender, boolean genderRequired, String phoneNumber,
            int learningMode, String address, float fee,
            boolean isActive, boolean isDelete, List<String> learningTime,
            Date startDate, Date createdTime) {
        this.subject_Id = subject_Id;
        this.customer_ID = customer_ID;
        this.grade = grade;
        this.timeInLesson = timeInLesson;
        this.gender = gender;
        this.genderRequired = genderRequired;
        this.phoneNumber = phoneNumber;
        this.learningMode = learningMode;
        this.address = address;
        this.fee = fee;
        this.isActive = isActive;
        this.isDelete = isDelete;
        this.learningTime = learningTime;
        this.startDate = startDate;
        this.createdTime = createdTime;

        listTutorRequired = new ArrayList<>();
    }

    public Long getCustomer_ID() {
        return customer_ID;
    }

    public void setCustomer_ID(Long customer_ID) {
        this.customer_ID = customer_ID;
    }

    public Long getTutor_ID() {
        return tutor_ID;
    }

    public void setTutor_ID(Long tutor_ID) {
        this.tutor_ID = tutor_ID;
    }

    public List<Long> getListTutorRequired() {
        return listTutorRequired;
    }

    public void setListTutorRequired(List<Long> listTutorRequired)
    {
        this.listTutorRequired = listTutorRequired;
    }

    public List<String> getLearningTime() {
        return learningTime;
    }

    public void setLearningTime(List<String> learningTime) {
        this.learningTime = learningTime;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSubject_Id() {
        return subject_Id;
    }

    public void setSubject_Id(Long subject_Id) {
        this.subject_Id = subject_Id;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }


    public float getTimeInLesson() {
        return timeInLesson;
    }

    public void setTimeInLesson(float timeInLesson) {
        this.timeInLesson = timeInLesson;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public boolean isGenderRequired() {
        return genderRequired;
    }

    public void setGenderRequired(boolean genderRequired) {
        this.genderRequired = genderRequired;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getLearningMode() {
        return learningMode;
    }

    public void setLearningMode(int learningMode) {
        this.learningMode = learningMode;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public float getFee() {
        return fee;
    }

    public void setFee(float fee) {
        this.fee = fee;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }
}
