package com.GreenUnderground.GreenU.Restaurant;

import com.GreenUnderground.GreenU.Common.Category;
import com.GreenUnderground.GreenU.Common.Cuisine;
import com.GreenUnderground.GreenU.Common.Location;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "restaurants")
public class Restaurants {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String address;
    private String image_Url;
    @Enumerated(EnumType.STRING)
    private Cuisine cuisine;
    @Enumerated(EnumType.STRING)
    private Category category;
    @Enumerated(EnumType.STRING)
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
