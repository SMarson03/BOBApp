package com.GreenUnderground.GreenU.Restaurant;

import com.GreenUnderground.GreenU.Common.Beverage;
import com.GreenUnderground.GreenU.Common.Category;
import com.GreenUnderground.GreenU.Common.Cuisine;
import com.GreenUnderground.GreenU.Common.Location;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class Restaurants {
    private Integer id;
    private String name;
    private String address;
    private String image_Url;
    @Enumerated(EnumType.STRING)
    private Cuisine cuisine;
    private Category category;
    private Location location;
    private String url;
    private String per_person;

    public Restaurants(){};

    public Restaurants (Integer id, String name, String address, String image_Url,
    Cuisine cuisine, Category category, Location location, String url, String per_person){

        this.id = id;
        this.name = name;
        this.address = address;
        this.image_Url = image_Url;
        this.cuisine = cuisine;
        this.category = category;
        this.location = location;
        this.url = url;
        this.per_person = per_person;
    }
}
