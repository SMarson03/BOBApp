package com.GreenUnderground.GreenU.Bar;

import com.GreenUnderground.GreenU.Common.Beverage;
import com.GreenUnderground.GreenU.Common.Location;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

@Entity
public class Bars {
    private Integer id;
    private String name;
    private String address;
    private String image_Url;
    @Enumerated(EnumType.STRING)
    private Beverage beverage;
    private Location location;
    private String url;

    public Bars(){};

    public Bars(Integer id, String name, String address, Location location,
                String image_Url, Beverage beverage, String url) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.image_Url = image_Url;
        this.location = location;
        this.beverage = beverage;
        this.url = url;

    }
}
