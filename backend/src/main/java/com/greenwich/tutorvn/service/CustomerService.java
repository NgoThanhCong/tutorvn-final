package com.greenwich.tutorvn.service;


import com.greenwich.tutorvn.model.Customer;
import com.greenwich.tutorvn.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Configurable
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;


    public Customer insert(Customer customer){
        customer.setDelete(false);
        return customerRepository.save(customer);
    }

    public List<Customer> findAll()
    {
        return customerRepository.findAll();
    }

    public Customer update(Customer customer){
        return customerRepository.save(customer);
    }
}
