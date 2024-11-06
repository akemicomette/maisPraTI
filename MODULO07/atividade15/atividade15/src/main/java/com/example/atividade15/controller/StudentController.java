package com.example.atividade15.controller;

import com.example.atividade15.request.StudentRequest;
import com.example.atividade15.response.StudentResponse;
import com.example.atividade15.service.AddStudentService;
import com.example.atividade15.service.GetStudentByCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private AddStudentService addStudentService;


    @Autowired
    private GetStudentByCourseService getStudentByCourseService;

    @PostMapping
    public StudentResponse add(@RequestBody StudentRequest request){
        return addStudentService.add(request);
    }

    @GetMapping("/courses/{id}/students")
    public Page<StudentResponse> list(@PathVariable Long id, Pageable pageable) {
        return getStudentByCourseService.list(id, pageable);
    }
}
