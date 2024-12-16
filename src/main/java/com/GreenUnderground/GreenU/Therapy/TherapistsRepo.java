package com.GreenUnderground.GreenU.Therapy;

import com.GreenUnderground.GreenU.Restaurant.Restaurants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TherapistsRepo extends JpaRepository<Therapists, Integer> {
    List<Therapists> findByLocation(String location);
    List<Therapists> findByName(String name);
}