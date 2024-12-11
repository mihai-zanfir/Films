package com.coherent.films.mapper;

import com.coherent.films.entity.Country;
import com.coherent.films.entity.Film;
import com.coherent.films.entity.Genre;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.mapping.FetchType;

import java.util.List;

@Mapper
public interface FilmMapper {

    @Results(id = "filmResult", value = {
        @Result(property = "id", column = "id"), @Result(property = "title", column = "title"),
        @Result(property = "year", column = "year"), @Result(property = "director", column = "director"),
        @Result(property = "genre", column = "genre_id", javaType = Genre.class,
            one = @One(select = "com.coherent.films.mapper.GenreMapper.findById", fetchType = FetchType.EAGER)),
        @Result(property = "country", column = "country_id", javaType = Country.class,
            one = @One(select = "com.coherent.films.mapper.CountryMapper.findById", fetchType = FetchType.EAGER)),
        @Result(property = "image", column = "image"), @Result(property = "imdb", column = "imdb"),
        @Result(property = "description", column = "description")
    })
    @Select("SELECT * FROM FILM WHERE id = #{id}")
    Film findById(int id);

    @ResultMap("filmResult")
    @Select("SELECT * FROM FILM WHERE title = #{title}")
    Film findByTitle(String title);

    @ResultMap("filmResult")
    @Select("SELECT * FROM FILM")
    List<Film> findAll();

    @Insert("INSERT INTO FILM(title, year, director, genre_id, country_id, image, imdb, description) " +
             "VALUES(#{title}, #{year}, #{director}, #{genre.id}, #{country.id}, #{image}, #{imdb}, #{description})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    Integer create(Film film);

    @Update("UPDATE FILM SET title=#{title}, year=#{year}, director=#{director}, genre_id=#{genre.id}, " +
            "country_id=#{country.id}, image=#{image}, imdb=#{imdb}, description=#{description} WHERE id=#{id}")
    void update(Film film);

    @Delete("DELETE FROM FILM WHERE id = #{id}")
    void delete(int id);
}
