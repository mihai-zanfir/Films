package com.coherent.films.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Country {
    private int id;
    private String name;
}
//public record Country(int id, String name) {

