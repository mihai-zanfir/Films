package com.coherent.films.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Actor {
    private int id;
    private String name;
    private String image;
    private String imdb;
    private String description;

    public Actor(int id) {
        this.id = id;
    }
}

//public record Actor(int id, String firstName, String lastName) {
