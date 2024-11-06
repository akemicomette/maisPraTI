package com.example.atividade15.service;

import com.example.atividade15.model.Course;
import com.example.atividade15.model.Student;
import com.example.atividade15.repository.CourseRepository;
import com.example.atividade15.repository.StudentRepository;
import com.example.atividade15.service.utils.GetCourseByIdService;
import com.example.atividade15.service.utils.GetStudentByIdService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RemoveStudentCourseService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private GetStudentByIdService getStudentByIdService;

    @Autowired
    private GetCourseByIdService getCourseByIdService;

    @Transactional
    public void remove(Long courseId, Long id){
        Student student = getStudentByIdService.byId(id);
        Course course = getCourseByIdService.byId(courseId);

        student.removeCourse(course);
        studentRepository.save(student);
        courseRepository.save(course);

    }

}
