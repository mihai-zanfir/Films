package com.coherent.films.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
public class FilmActor {
    private int id;
    private Film film;
    private Actor actor;

    public FilmActor(int id, Film film, Actor actor) {
        this.id = id;
        this.film = film;
        this.actor = actor;
    }
}
