package com.example.atividade15.service;

import com.example.atividade15.mapper.CourseMapper;
import com.example.atividade15.model.Course;
import com.example.atividade15.repository.CourseRepository;
import com.example.atividade15.request.CourseRequest;
import com.example.atividade15.response.CourseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AddCourseService {
    @Autowired
    private CourseRepository courseRepository;

    @Transactional
    public CourseResponse add(CourseRequest request){
        Course course = CourseMapper.toEntity(request);

        courseRepository.save(course);

        return CourseMapper.toResponse(course);
    }

}
