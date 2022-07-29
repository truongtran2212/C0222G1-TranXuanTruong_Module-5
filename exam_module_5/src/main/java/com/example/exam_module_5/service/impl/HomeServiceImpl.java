package com.example.exam_module_5.service.impl;

import com.example.exam_module_5.model.Home;
import com.example.exam_module_5.repository.HomeRepository;
import com.example.exam_module_5.service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeServiceImpl implements HomeService {
    @Autowired
    private HomeRepository homeRepository;

    @Override
    public List<Home> findAll() {
        return homeRepository.findAll();
    }
}
