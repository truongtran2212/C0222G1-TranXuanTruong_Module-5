package com.example.exam_module_5.controller;

import com.example.exam_module_5.model.Ticket;
import com.example.exam_module_5.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    private ResponseEntity<Ticket> findId (@PathVariable int id) {
        return new ResponseEntity<>(ticketService.findById(id),HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    private ResponseEntity<?> update (@PathVariable int id) {
        Ticket ticket = ticketService.findById(id);
        ticket.setQuantity(ticket.getQuantity() - 1);
        return new ResponseEntity<>(ticketService.save(ticket), HttpStatus.OK);
    }

//    @GetMapping("/search/{start}/{end/{page}")
//    private ResponseEntity<?> search (@PathVariable(name = "page", defaultValue = "0") int page,
//                                      @PathVariable(name = "start") String start,
//                                      @PathVariable(name = "end") String end) {
//        return new ResponseEntity<>(ticketService.search(PageRequest.of(page, 6),start,end).getContent(), HttpStatus.OK);
//    }

    @GetMapping("/search/{start}/{end}")
    private ResponseEntity<?> search (@RequestParam(name = "page", defaultValue = "0") int page,
                                      @PathVariable(name = "start") String start,
                                      @PathVariable(name = "end") String end) {
        if(end.equals(" ")){
            end = "";
        } if(start.equals(" ")){
            start = "";
        }
        return new ResponseEntity<>(ticketService.searchList(start,end), HttpStatus.OK);
    }
}
