package com.greenwich.tutorvn.repository;

import com.greenwich.tutorvn.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // *La cung cap cac thao tac de xu ly du lieu cua Model
    // *Repository nhu la 1 nha kho cung cap cac giai phap de thuc hien voi Data
    // *WareHouse

}
