package com.coherent.films.service;

import com.coherent.films.entity.Country;
import com.coherent.films.entity.Genre;
import com.coherent.films.mapper.CountryMapper;
import com.coherent.films.mapper.GenreMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UtilityService {

    private final GenreMapper genreMapper;
    private final CountryMapper countryMapper;

    public List<Genre> getGenres() {
        return genreMapper.findAll();
    }

    public Genre getGenre(String id) {
        return genreMapper.findById(Integer.parseInt(id));
    }

    public List<Country> getCountries() {
        return countryMapper.findAll();
    }

    public Country getCountry(String id) {
        return countryMapper.findById(Integer.parseInt(id));
    }
}

