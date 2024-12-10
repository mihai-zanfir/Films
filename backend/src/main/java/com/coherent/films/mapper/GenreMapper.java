package com.coherent.films.mapper;

import com.coherent.films.entity.Genre;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface GenreMapper {

    @Select("SELECT * FROM GENRE WHERE id = #{id}")
    Genre findById(int id);

    @Select("SELECT * FROM GENRE")
    List<Genre> findAll();

    @Insert("INSERT INTO GENRE(name) VALUES(#{name})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(Genre genre);

    @Update("UPDATE GENRE SET name=#{name} WHERE id=#{id}")
    void update(Genre genre);

    @Delete("DELETE FROM GENRE WHERE id = #{id}")
    void delete(int id);
}
