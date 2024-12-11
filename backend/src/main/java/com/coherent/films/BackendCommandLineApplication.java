package com.coherent.films;

import com.coherent.films.mapper.ActorMapper;
import com.coherent.films.mapper.CountryMapper;
import com.coherent.films.mapper.FilmMapper;
import com.coherent.films.mapper.GenreMapper;
import org.springframework.boot.CommandLineRunner;

//This is used for fast testing
//@SpringBootApplication
public class BackendCommandLineApplication  implements CommandLineRunner {
    public static void main(String[] args) {
        //SpringApplication.run(BackendCommandLineApplication.class, args);
    }

    private final GenreMapper genreMapper;
    private final ActorMapper actorMapper;
    private final FilmMapper filmMapper;
    private final CountryMapper countryMapper;

    public BackendCommandLineApplication(GenreMapper genreMapper, ActorMapper actorMapper,
                                         FilmMapper filmMapper,CountryMapper countryMapper) {
        this.genreMapper = genreMapper;
        this.actorMapper = actorMapper;
        this.filmMapper = filmMapper;
        this.countryMapper = countryMapper;
    }

    @Override
    @SuppressWarnings("squid:S106")
    public void run(String... args) {
        /*System.out.println(cityMapper.findByState("CL"));
        System.out.println(genreMapper.findById(2));
        System.out.println(actorMapper.findById(2));
        System.out.println(countryMapper.findById(2));
        //System.out.println(countryMapper.findAll());
        System.out.println(filmMapper.findById(2));*/
        //System.out.println(filmMapper.findAll());
        //System.out.println(actorMapper.findAll());
        //System.out.println(genreMapper.findAll());
    }
}
