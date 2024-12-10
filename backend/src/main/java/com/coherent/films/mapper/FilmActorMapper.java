package com.coherent.films.mapper;

import com.coherent.films.entity.Actor;
import com.coherent.films.entity.Film;
import com.coherent.films.entity.FilmActor;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.apache.ibatis.mapping.FetchType;

import java.util.List;

@Mapper
public interface FilmActorMapper {

    @Select("SELECT * FROM FILM_ACTOR WHERE id = #{id}")
    List<FilmActor> findById(int id);

    @Results(
            id = "findByFilmId",
            value = {
                    @Result(property = "id", column = "id"),
                    @Result(
                            property = "film",
                            column = "film_id",
                            javaType = Film.class,
                            one = @One(
                                    select = "com.coherent.films.mapper.FilmMapper.findById",
                                    fetchType = FetchType.EAGER
                            )
                    ),
                    @Result(
                            property = "actor",
                            column = "actor_id",
                            javaType = Actor.class,
                            one = @One(
                                    select = "com.coherent.films.mapper.ActorMapper.findById",
                                    fetchType = FetchType.EAGER
                            )
                    )
            }
    )
    @Select("SELECT * FROM FILM_ACTOR WHERE film_id = #{filmId}")
    List<FilmActor> findByFilmId(int filmId);

    @Select("SELECT * FROM FILM_ACTOR WHERE actor_id = #{actorId}")
    List<FilmActor> findByActorId(int actorId);

    @Results(
            id = "findAll",
            value = {
                    @Result(property = "id", column = "id"),
                    @Result(
                            property = "film",
                            column = "film_id",
                            javaType = Film.class,
                            one = @One(
                                    select = "com.coherent.films.mapper.FilmMapper.findById",
                                    fetchType = FetchType.EAGER
                            )
                    ),
                    @Result(
                            property = "actor",
                            column = "actor_id",
                            javaType = Actor.class,
                            one = @One(
                                    select = "com.coherent.films.mapper.ActorMapper.findById",
                                    fetchType = FetchType.EAGER
                            )
                    )
            }
    )
    @Select("SELECT * FROM FILM_ACTOR order by film_id")
    List<FilmActor> findAll();

    @Insert("INSERT INTO FILM_ACTOR(film_id, actor_id) VALUES(#{film.id}, #{actor.id})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    Integer insert(FilmActor filmActor);

    @Update("UPDATE FILM_ACTOR SET film_id=#{film_id}, actor_id=#{actor_id} WHERE id=#{id}")
    void update(int film_id, int actor_id);

    @Delete("DELETE FROM FILM_ACTOR WHERE id = #{id}")
    void deleteById(int id);

    @Delete("DELETE FROM FILM_ACTOR WHERE film_id = #{filmId}")
    void deleteByFilmId(int filmId);

    @Delete("DELETE FROM FILM_ACTOR WHERE actor_id = #{actorId}")
    void deleteByActorId(int actorId);
}
