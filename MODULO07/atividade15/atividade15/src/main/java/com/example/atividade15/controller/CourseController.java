package com.example.atividade15.controller;

import com.example.atividade15.request.CourseRequest;
import com.example.atividade15.response.CourseResponse;
import com.example.atividade15.service.AddStudentCourseService;
import com.example.atividade15.service.GetCoursesByStudentService;
import com.example.atividade15.service.RemoveStudentCourseService;
import com.example.atividade15.service.AddCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/courses")
public class CourseController {

    @Autowired
    private AddCourseService addCourseService;

    @Autowired
    private AddStudentCourseService addStudentCourseService;

    @Autowired
    private RemoveStudentCourseService removeStudentCourseService;

    @Autowired
    private GetCoursesByStudentService getCoursesOfStudentService;

    @PostMapping
    public CourseResponse add(@RequestBody CourseRequest request) {
        return addCourseService.add(request);
    }

    @PostMapping("/{courseId}/students/{id}")
    public CourseResponse add(@PathVariable Long courseId, @PathVariable Long id){
        return addStudentCourseService.add(courseId, id);
    }



}
