package com.example.atividade15.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(of="id") @ToString(of="id")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    @ManyToMany
    @JoinTable(name = "student_course",
    joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id"))
    private List<Course> courses = new ArrayList<Course>();

    public void addCouse(Course course) {
        this.getCourses().add(course);
        course.getStudents().add(this);
    }

    public void removeCourse(Course course){
        this.getCourses().remove(course);
        course.getStudents().remove(this);
    }

}
