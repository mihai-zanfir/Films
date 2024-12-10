package com.coherent.films.controller;

import com.coherent.films.entity.Actor;
import com.coherent.films.service.ActorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/")
@Slf4j
public class ActorController {

    private final ActorService actorService;

    @GetMapping("/actors")
    public List<Actor> getActors() {
        return actorService.getActors();
    }

    @GetMapping("/actors/{id}")
    public Actor getActor(@PathVariable String id) {
        return actorService.getActor(id);
    }

    @PostMapping("/actors")
    public Actor createActor(@RequestBody Actor actor) {
        return actorService.createActor(actor);
    }

    @PutMapping("/actors/{id}")
    public Actor updateActor(@PathVariable String id, @RequestBody Actor actor) {
        return actorService.updateActor(actor);
    }

    @DeleteMapping("/actors/{id}")
    public boolean deleteActor(@PathVariable String id) {
        return actorService.deleteActor(id);
    }
}
