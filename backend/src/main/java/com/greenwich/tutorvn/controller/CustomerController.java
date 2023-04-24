package com.greenwich.tutorvn.controller;
import com.greenwich.tutorvn.model.Customer;
import com.greenwich.tutorvn.model.Order;
import com.greenwich.tutorvn.model.ResponseObject;
import com.greenwich.tutorvn.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
// * them customer, list customer, delete by id, search by id// ! xoa bang ten,
@RestController  // khai bao anotation restcontroller de tao ra 1 class Rest API
@RequestMapping(path = "/api/v1/customer")
public class CustomerController
{
    @Autowired
    CustomerRepository customerRepository;
    @PostMapping("insertCustomer")
    ResponseEntity<ResponseObject> insert (@RequestBody Customer customer)
    {

        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("ok","Success",customerRepository.save(customer)));
    }

    @GetMapping("/listCustomer")
    ResponseEntity<ResponseObject> getListCustomerAll()
    {
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Ok",
                "Success",customerRepository.findAll()));
    }
    @DeleteMapping("/deleteCustomerById/{id}")
    void delete (@PathVariable Long id) {customerRepository.deleteById(id);}

//    @GetMapping("/searchCustomerById/{id}")
//    ResponseEntity<ResponseObject>  findById(@PathVariable Long id)
//    {
//       Optional<Customer> optionalCustomer = customerRepository.findById(id);
//
//       if (optionalCustomer.isPresent())
//       {
//           return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Ok",
//                   "NOT_FOUTH",optionalCustomer.get()));
//       }
//       return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Ok",
//               "Success",customerRepository));
//    }
@GetMapping("/searchCustomerByName/{keyword}")
    ResponseEntity<ResponseObject> searchCustomerByName(@PathVariable String keyword)
{
    List<Customer> result = new ArrayList<>();
    for (Customer customer: customerRepository.findAllByIsDelete(false))
    {
        if(customer.getName().trim().toLowerCase().contains(keyword.trim().toLowerCase()));
        {
            result.add(customer);
        }
    }
    return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Ok","Success",result));

}
// @DeleteMapping("/{id}")
// void delete (@PathVariable Long id)
// {
//     customerRepository.deleteById(id);
// }

 @GetMapping("/{id}")     // * tim kiem customer bang id
 ResponseEntity<ResponseObject> findById (@PathVariable Long id)
 {

     Optional<Customer> optionalCustomer=  customerRepository.findById(id);
     if(optionalCustomer.isPresent())
     {
         return  ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Ok",
                 "Success",optionalCustomer.get()));
     }

     return  ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("Ok",
             "Success",""));
}

}
