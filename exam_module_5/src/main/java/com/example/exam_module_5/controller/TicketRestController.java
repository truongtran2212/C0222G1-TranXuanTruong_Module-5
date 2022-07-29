package com.example.exam_module_5.controller;

import com.example.exam_module_5.model.Ticket;
import com.example.exam_module_5.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/ticketList")
public class TicketRestController {
    @Autowired
    private TicketService ticketService;

    @GetMapping("")
    private ResponseEntity<?> showListTicket(@RequestParam(name = "page", defaultValue = "0") int page) {
        return new ResponseEntity<>(ticketService.findAll(PageRequest.of(page, 6)).getContent(), HttpStatus.OK);
    }

    @PostMapping("/create")
    private ResponseEntity<?> create(@RequestBody Ticket ticket) {
        return new ResponseEntity<>(ticketService.create(ticket), HttpStatus.CREATED);
    }

    
}
