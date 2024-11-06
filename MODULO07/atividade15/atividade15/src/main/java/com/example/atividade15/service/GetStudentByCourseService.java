package com.example.atividade15.service;

import com.example.atividade15.mapper.StudentMapper;
import com.example.atividade15.model.Course;
import com.example.atividade15.repository.StudentRepository;
import com.example.atividade15.response.StudentResponse;
import com.example.atividade15.service.utils.GetCourseByIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class GetStudentByCourseService {
    @Autowired
    StudentRepository studentRepository;

    @Autowired
    GetCourseByIdService getCourseByIdService;

    public Page<StudentResponse> list(Long id, Pageable pageable) {

        Course course = getCourseByIdService.byId(id);

        return studentRepository.findByCourses(course, pageable)
                .map(StudentMapper::toResponse);
    }
}
