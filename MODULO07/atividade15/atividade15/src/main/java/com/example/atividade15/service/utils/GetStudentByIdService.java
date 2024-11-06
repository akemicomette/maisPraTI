package com.example.atividade15.service.utils;

import com.example.atividade15.model.Student;
import com.example.atividade15.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class GetStudentByIdService {
    @Autowired
    StudentRepository studentRepository;

    public Student byId(Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Student not found"));
    }
}
