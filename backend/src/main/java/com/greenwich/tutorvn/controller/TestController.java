package com.greenwich.tutorvn.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController  // khai bao anotation restcontroller de tao ra 1 class Rest API
@RequestMapping(path  = "/api/v1/test")  //tao ra URL cos dang /api/
public class TestController {


    @GetMapping("/a")
    List<String> getListTutor()
    {
        return Arrays.asList("Nguyen van A", "Pham cong minh","nguyen van gt", "nguyen tien dat");
    }
    @GetMapping("/b")
    List<String> getListaa()
    {
        return Arrays.asList("Adasd");
    }
    @GetMapping("/c")
    List<String> getLisbb()
    {
        return Arrays.asList("Nguyen van A", "Pham cong minh","nguyen van gt", "nguyen tien dat");
    }
}
