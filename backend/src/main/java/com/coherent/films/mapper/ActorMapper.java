package com.coherent.films.mapper;

import com.coherent.films.entity.Actor;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface ActorMapper {

    @Select("SELECT * FROM ACTOR WHERE id = #{id}")
    Actor findById(int id);

    @Select("SELECT * FROM ACTOR WHERE name = #{name}")
    Actor findByName(String name);

    @Select("SELECT * FROM ACTOR")
    List<Actor> findAll();

    @Insert("INSERT INTO ACTOR(name, image, imdb, description) VALUES(#{name}, #{image}, #{imdb}, #{description})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    Integer create(Actor actor);

    @Update("UPDATE ACTOR SET name=#{name} , image=#{image}, imdb=#{imdb}, description=#{description} WHERE id=#{id}")
    void update(Actor actor);

    @Delete("DELETE FROM ACTOR WHERE id = #{id}")
    void delete(int id);
}
