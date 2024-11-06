package com.example.atividade15.repository;

import com.example.atividade15.model.Course;
import com.example.atividade15.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StudentRepository extends JpaRepository<Student, Long> {

       Page<Student> findByCourses(Course course, Pageable pageable);
}
