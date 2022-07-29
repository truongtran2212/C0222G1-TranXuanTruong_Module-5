package com.example.exam_module_5.repository;

import com.example.exam_module_5.model.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import javax.transaction.Transactional;

@Transactional
public interface TicketRepository extends PagingAndSortingRepository<Ticket, Integer> {

    @Query(value = "select t from Ticket t")
    Page<Ticket> findAll(Pageable pageable);


}
