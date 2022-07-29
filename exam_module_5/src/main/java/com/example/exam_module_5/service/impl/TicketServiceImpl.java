package com.example.exam_module_5.service.impl;

import com.example.exam_module_5.model.Ticket;
import com.example.exam_module_5.repository.TicketRepository;
import com.example.exam_module_5.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import java.util.List;


@Service
public class TicketServiceImpl implements TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    @Override
    public Page<Ticket> findAll(Pageable pageable) {
        return ticketRepository.findAll(pageable);
    }

    @Override
    public Ticket save(Ticket ticket) {
      return ticketRepository.save(ticket);
    }

    @Override
    public Ticket findById(int id) {
        return ticketRepository.findById(id);
    }

    @Override
    public List<Ticket> searchList(String start, String end) {
        return ticketRepository.searchList("%" + start + "%","%" + end + "%");
    }
//
//    @Override
//    public Page<Ticket> search(Pageable pageable, String start, String end) {
//        return ticketRepository.search(pageable,start,end);
//    }
}
