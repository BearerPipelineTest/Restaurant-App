package org.jurabek.restaurant.order.api.services;

import java.util.List;

import org.jurabek.restaurant.order.api.dtos.CustomerBasketDto;
import org.jurabek.restaurant.order.api.dtos.CustomerOrderDto;

/**
 * OrdersService
 */
public interface OrdersService {
    List<CustomerOrderDto> getOrderByCustomerId(String customerId);
    List<CustomerOrderDto> getAll();
    CustomerOrderDto getById(String orderId);
    void Create(CustomerBasketDto customerBasketDto);
    void Update(CustomerBasketDto customerBasketDto);
    void Delete(String orderId);
}