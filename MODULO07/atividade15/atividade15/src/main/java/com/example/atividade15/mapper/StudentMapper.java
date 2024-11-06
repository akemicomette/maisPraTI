package com.example.atividade15.mapper;

import com.example.atividade15.model.Student;
import com.example.atividade15.request.StudentRequest;
import com.example.atividade15.response.StudentResponse;

public class StudentMapper {

    public static Student toEntity(StudentRequest request) {
        return Student.builder()
                .email(request.getEmail())
                .name(request.getName())
                .build();
    }

    public static StudentResponse toResponse(Student student) {
        return StudentResponse.builder()
                .id(student.getId())
                .email(student.getEmail())
                .name(student.getName())
                .build();
    }
}
