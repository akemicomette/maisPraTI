package com.example.atividade15.service.utils;

import com.example.atividade15.model.Course;
import com.example.atividade15.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.server.ResponseStatusException;

@Service
public class GetCourseByIdService {
    @Autowired
    CourseRepository courseRepository;

    public Course byId(Long id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Course not found"));
    }
}
