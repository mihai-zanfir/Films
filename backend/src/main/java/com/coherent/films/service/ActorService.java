package com.coherent.films.service;

import com.coherent.films.entity.Actor;
import com.coherent.films.mapper.ActorMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.apache.commons.lang3.StringUtils.isBlank;

//TODO Add Validation, better Logging messages, Exception handling
@Service
@RequiredArgsConstructor
@Slf4j
public class ActorService {

    private final ActorMapper actorMapper;

    public List<Actor> getActors() {
        return actorMapper.findAll();
    }

    public Actor getActor(String id) {
        return actorMapper.findById(Integer.parseInt(id));
    }

    public Actor createActor(Actor actor) {
        if (actor == null || isBlank(actor.getName()) || isBlank(actor.getImage()) || isBlank(actor.getImdb())
            || isBlank(actor.getDescription())) {
            return null;
        }
        log.info("Create actor - " + actor);
        Integer nrOfRecords  = actorMapper.create(actor);
        if (nrOfRecords > 0) {
            Actor newActor = actorMapper.findByName(actor.getName());
            log.info("Actor successfully created! - id=" + newActor.getId());
            return newActor;
        }
        return null;
    }

    public Actor updateActor(Actor actor) {
        if (actor == null || actor.getId() < 0 || isBlank(actor.getName()) || isBlank(actor.getImage())
                || isBlank(actor.getImdb()) || isBlank(actor.getDescription())) {
            return null;
        }
        log.info("Update actor with id=" + actor.getId());
        actorMapper.update(actor);
        log.info("Actor successfully updated! - id=" + actor.getId());
        return actorMapper.findById(actor.getId());
    }

    public boolean deleteActor(String id) {
        log.info("Delete actor with id=" + id);
        actorMapper.delete(Integer.parseInt(id));
        log.info("Actor successfully deleted! - id=" + id);
        return true;
    }
}

