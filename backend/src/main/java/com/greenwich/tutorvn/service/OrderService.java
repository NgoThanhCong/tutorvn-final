package com.greenwich.tutorvn.service;
import com.greenwich.tutorvn.model.Order;
import com.greenwich.tutorvn.repository.OrderRepository;
import com.greenwich.tutorvn.request.RequestOrder;
import org.aspectj.weaver.ast.Or;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
@Configurable

public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private NotificationService notificationService;

    public List<Order> getOrderpage(int pageNum, int pageSize)
    {
        Pageable pageOne = PageRequest.of(pageNum, pageSize);
        Page<Order> returnList = orderRepository.findAll(pageOne);
        return returnList.stream().toList();
    }

    public Order assignTutor(RequestOrder requestOrder){
        Optional<Order> optionalOrder = orderRepository.findById(requestOrder.getIdOrder());
        if(optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            order.setTutor_ID(requestOrder.getIdTutor());
            notificationService.insert(order);
            return orderRepository.save(order);
        }
        return  null;
    }
}
