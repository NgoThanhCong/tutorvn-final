package com.greenwich.tutorvn.service;

import com.greenwich.tutorvn.model.Order;
import com.greenwich.tutorvn.model.Tutor;
import com.greenwich.tutorvn.repository.OrderRepository;
import com.greenwich.tutorvn.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@Configurable
public class TutorService {

    @Autowired
    private TutorRepository tutorRepository;

    public List<Tutor> getTutorpage(int pageNum, int pageSize)
    {
        Pageable pageOne = PageRequest.of(pageNum, pageSize);
        Page<Tutor> returnList = tutorRepository.findAll(pageOne);
        return returnList.stream().toList();
    }
}
