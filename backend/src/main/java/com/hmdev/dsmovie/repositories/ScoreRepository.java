package com.hmdev.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hmdev.dsmovie.entities.Score;
import com.hmdev.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
