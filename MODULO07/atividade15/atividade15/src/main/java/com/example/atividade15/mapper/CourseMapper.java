package com.example.atividade15.mapper;
import com.example.atividade15.model.Course;
import com.example.atividade15.request.CourseRequest;
import com.example.atividade15.response.CourseResponse;

public class CourseMapper {

    public static Course toEntity(CourseRequest request){
        return Course.builder()
                .name(request.getName())
                .description(request.getDescription())
                .build();
    }

    public static CourseResponse toResponse(Course course){
        return CourseResponse.builder()
                .id(course.getId())
                .name(course.getName())
                .description(course.getDescription())
                .build();
    }
}
