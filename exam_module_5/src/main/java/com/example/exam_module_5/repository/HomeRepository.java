package com.example.exam_module_5.repository;

import com.example.exam_module_5.model.Home;
import com.example.exam_module_5.model.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface HomeRepository extends PagingAndSortingRepository<Home, Integer> {

    @Query(value = "select h from Home h")
    List<Home> findAll();
}
