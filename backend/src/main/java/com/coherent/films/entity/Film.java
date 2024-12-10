package com.coherent.films.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Film {
    private int id;
    private String title;
    private int year;
    private String director;
    private Genre genre;
    private Country country;
    private String image;
    private String imdb;
    private String description;
    private List<Actor> actors = new ArrayList<>();
}

//public record Film(int id, String title, int year, String director, int genre, int country, String image, String imdb) {
//public record Film(int id, String title, int year, String director, Genre genre, Country country, String image, String imdb) {
    //, List<Actor> actors