package com.coherent.films.controller;

import com.coherent.films.entity.Country;
import com.coherent.films.entity.Genre;
import com.coherent.films.service.UtilityService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/")
@Slf4j
public class UtilityController {

    private final UtilityService utilityService;

    @GetMapping("/genres")
    public List<Genre> getGenres() {
        return utilityService.getGenres();
    }

    @GetMapping("/genres/{id}")
    public Genre getGenre(@PathVariable String id) {
        return utilityService.getGenre(id);
    }

    @GetMapping("/countries")
    public List<Country> getCountry() {
        return utilityService.getCountries();
    }

    @GetMapping("/countries/{id}")
    public Country getCountry(@PathVariable String id) {
        return utilityService.getCountry(id);
    }
}
