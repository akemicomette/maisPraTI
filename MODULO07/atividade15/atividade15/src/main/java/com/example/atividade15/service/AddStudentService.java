package com.example.atividade15.service;

import com.example.atividade15.mapper.StudentMapper;
import com.example.atividade15.model.Student;
import com.example.atividade15.repository.CourseRepository;
import com.example.atividade15.repository.StudentRepository;
import com.example.atividade15.request.StudentRequest;
import com.example.atividade15.response.StudentResponse;
import com.example.atividade15.service.utils.GetCourseByIdService;
import com.example.atividade15.service.utils.GetStudentByIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AddStudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private GetStudentByIdService getStudentByIdService;

    @Autowired
    private GetCourseByIdService getCourseByIdService;

    @Transactional
    public StudentResponse add(StudentRequest request) {
        Student student = StudentMapper.toEntity(request);

        studentRepository.save(student);

        return StudentMapper.toResponse(student);

    }
}
