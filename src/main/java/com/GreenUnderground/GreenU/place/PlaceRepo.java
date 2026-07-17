package com.GreenUnderground.GreenU.place;

import com.GreenUnderground.GreenU.Common.Category;
import com.GreenUnderground.GreenU.Common.Cuisine;
import com.GreenUnderground.GreenU.Common.Location;
import com.GreenUnderground.GreenU.Common.PlaceStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaceRepo extends JpaRepository<Place, Integer> {

    List<Place> findByLocation(Location location);

    List<Place> findByCategory(Category category);

    List<Place>findByCuisine(Cuisine cuisine);

    List<Place> findByCategoryAndLocation(Category category, Location location);

    List<Place> findByNameContainingIgnoreCase(String name);

    List<Place> findByStatus(PlaceStatus status);

}