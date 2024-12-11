package com.coherent.films.service;

import com.coherent.films.entity.Actor;
import com.coherent.films.entity.Film;
import com.coherent.films.entity.FilmActor;
import com.coherent.films.mapper.FilmActorMapper;
import com.coherent.films.mapper.FilmMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.apache.commons.lang3.StringUtils.isBlank;

//TODO Add Validation, better Logging messages, Exception handling
@Service
@RequiredArgsConstructor
@Slf4j
public class FilmService {

    private final FilmActorMapper filmActorMapper;
    private final FilmMapper filmMapper;
    private final int NO_ACTORS_ID = -100;

    public List<Film> getFilms() {
        return getFilmList(filmActorMapper.findAll());
    }

    public Film getFilm(String id) {
        return getFilmList(filmActorMapper.findByFilmId(Integer.parseInt(id))).get(0);
    }

    private List<Film> getFilmList(List<FilmActor> filmActorList) {
        Map<Integer, Film> filmsMap = new HashMap<>();
        filmActorList.stream()
            .forEach(filmActor -> {
                Film film = filmActor.getFilm();
                film.getActors().add(filmActor.getActor());
                filmsMap.put(film.getId(), film);
            });
        return filmsMap.values().stream().toList();
    }

    public Film createFilm(Film film) {
        log.info("Create film " + film);
        log.info("Link film actors" + film.getActors());
        if (film == null || isBlank(film.getTitle()) || isBlank(film.getImage()) || isBlank(film.getImdb())
                || isBlank(film.getDescription())) {
            return null;
        }

        Integer nrOfRecords  = filmMapper.create(film);
        if (nrOfRecords > 0) {
            Film newFilm = filmMapper.findByTitle(film.getTitle());
            int newFilmId = newFilm.getId();
            log.info("Film successfully created! - id=" + newFilmId);
            if (film.getActors() == null || film.getActors().isEmpty()) {
                filmActorMapper.insert(new FilmActor(0, newFilm, new Actor(NO_ACTORS_ID)));
            } else {
                film.getActors().stream().forEach(actor -> {
                    filmActorMapper.insert(new FilmActor(0, newFilm, new Actor(newFilmId)));
                });
            }
            return getFilm(String.valueOf(newFilmId));
        }
        return null;
    }

    public Film updateFilm(Film film) {
        log.info("Update film " + film);
        log.info("Update film actors" + film.getActors());
        if (film == null || film.getId() < 0 || isBlank(film.getTitle()) || isBlank(film.getImage())
                || isBlank(film.getImdb()) || isBlank(film.getDescription())) {
            return null;
        }
        filmMapper.update(film);
        //TO DO: write code to update film actors
        log.info("Film successfully updated! - id=" + film.getId());
        return getFilm(String.valueOf(film.getId()));
    }

    public boolean deleteFilm(String id) {
        log.info("Delete film with id=" + id);
        int filmId = Integer.parseInt(id);
        filmActorMapper.deleteByFilmId(filmId);
        filmMapper.delete(filmId);
        log.info("Film successfully deleted! - id=" + id);
        return true;
    }
}

