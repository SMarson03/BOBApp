package com.GreenUnderground.GreenU.JuiceBar;

import com.GreenUnderground.GreenU.Bar.Bars;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JuiceBarsRepo extends JpaRepository<JuiceBars, Integer> {
    List<JuiceBars>findByLocation(String location);
    List<JuiceBars> findByName(String name);
}
