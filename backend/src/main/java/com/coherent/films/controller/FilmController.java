package com.coherent.films.controller;

import com.coherent.films.entity.Film;
import com.coherent.films.service.FilmService;
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
public class FilmController {

    private final FilmService filmService;

    @GetMapping("/")
    public String getHomepage() {
        return "Home Page is looking fine!";
    }

    @GetMapping("/films")
    public List<Film> getFilms() {
        return filmService.getFilms();
    }

    @GetMapping("/films/{id}")
    public Film getFilm(@PathVariable String id) {
        return filmService.getFilm(id);
    }

    @PostMapping("/films")
    public Film createFilm(@RequestBody Film film) {
        return filmService.createFilm(film);
    }

    @PutMapping("/films/{id}")
    public Film updateFilm(@PathVariable String id, @RequestBody Film film) {
        return filmService.updateFilm(film);
    }

    @DeleteMapping("/films/{id}")
    public boolean deleteFilm(@PathVariable String id) {
        return filmService.deleteFilm(id);
    }
}
