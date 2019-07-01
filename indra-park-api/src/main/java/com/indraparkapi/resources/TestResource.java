package com.indraparkapi.resources;

import com.indraparkapi.model.Test;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/test")
public class TestResource {

    @GetMapping
    public ResponseEntity<?> test() {
        return ResponseEntity.ok(new Test("Olá Indra Park Exam"));
    }
}
