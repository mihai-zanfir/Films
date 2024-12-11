package com.coherent.films.mapper;

import com.coherent.films.entity.Country;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

@Mapper
public interface CountryMapper {

    @Select("SELECT * FROM COUNTRY WHERE id = #{id}")
    Country findById(int id);

    @Select("SELECT * FROM COUNTRY")
    List<Country> findAll();

    @Insert("INSERT INTO COUNTRY(name) VALUES(#{name})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(Country country);

    @Update("UPDATE COUNTRY SET name=#{name} WHERE id=#{id}")
    void update(Country country);

    @Delete("DELETE FROM COUNTRY WHERE id = #{id}")
    void delete(int id);
}
