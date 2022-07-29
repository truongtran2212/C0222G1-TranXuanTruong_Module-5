package com.example.exam_module_5.service;

import com.example.exam_module_5.model.Ticket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TicketService {
        Page<Ticket> findAll(Pageable pageable);

        Ticket save (Ticket ticket);

        Ticket findById (int id);

        Page<Ticket> search (Pageable pageable, String start, String end);
}
