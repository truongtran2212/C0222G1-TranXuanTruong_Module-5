package com.example.exam_module_5.repository;

import com.example.exam_module_5.model.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface TicketRepository extends PagingAndSortingRepository<Ticket, Integer> {

    @Query(value = "select t from Ticket t")
    Page<Ticket> findAll(Pageable pageable);

    @Query(value = "select t from Ticket t where t.id = :id")
    Ticket findById (@Param("id") int id);
//
//    @Query(value = "select t from Ticket t where t.start like %:start% and t.end like %:end%")
//    Page<Ticket> search (Pageable pageable, @Param("start") String start, @Param("end") String end);

    @Query(value = "select * from ticket where start like :start and end like :end", nativeQuery = true)
    List<Ticket> searchList (@Param("start") String start, @Param("end") String end);
}
