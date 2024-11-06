package com.example.atividade15.service;

import com.example.atividade15.mapper.CourseMapper;
import com.example.atividade15.model.Student;
import com.example.atividade15.repository.CourseRepository;
import com.example.atividade15.response.CourseResponse;
import com.example.atividade15.service.utils.GetStudentByIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class GetCoursesByStudentService {

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    GetStudentByIdService getStudentByIdService;

    public Page<CourseResponse> list(Long id, Pageable pageable) {
        Student student = getStudentByIdService.byId(id);

        return courseRepository.findByStudents(student, pageable)
                .map(CourseMapper::toResponse);
    }
}
