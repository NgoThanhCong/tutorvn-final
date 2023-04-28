package com.greenwich.tutorvn.repository;

import com.greenwich.tutorvn.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, Long> {
    // *La cung cap cac thao tac de xu ly du lieu cua Model
    // *Repository nhu la 1 nha kho cung cap cac giai phap de thuc hien voi Data
    // *WareHouse

}
