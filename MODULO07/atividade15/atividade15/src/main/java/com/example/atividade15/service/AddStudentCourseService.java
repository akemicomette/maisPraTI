package com.example.atividade15.service;

import com.example.atividade15.mapper.CourseMapper;
import com.example.atividade15.model.Course;
import com.example.atividade15.model.Student;
import com.example.atividade15.repository.CourseRepository;
import com.example.atividade15.repository.StudentRepository;
import com.example.atividade15.request.CourseRequest;
import com.example.atividade15.response.CourseResponse;
import com.example.atividade15.service.utils.GetCourseByIdService;
import com.example.atividade15.service.utils.GetStudentByIdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AddStudentCourseService {
    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private GetStudentByIdService getStudentByIdService;

    @Autowired
    private GetCourseByIdService getCourseByIdService;

    @Transactional
    public CourseResponse add(Long courseId, Long id){
        Student student = getStudentByIdService.byId(id);
        Course course = getCourseByIdService.byId(courseId);

        student.addCouse(course);

        studentRepository.save(student);
        courseRepository.save(course);

        return CourseMapper.toResponse(course);
    }
}
