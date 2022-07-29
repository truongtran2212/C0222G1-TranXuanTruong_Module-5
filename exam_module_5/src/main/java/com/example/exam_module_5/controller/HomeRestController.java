package com.example.exam_module_5.controller;

import com.example.exam_module_5.model.Home;
import com.example.exam_module_5.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/homeTicket")
public class HomeRestController {
    @Autowired
    private HomeService homeService;

    private ResponseEntity<List<Home>> showListHome() {
        return new ResponseEntity<>(homeService.findAll(), HttpStatus.OK);
    }
}
