package com.GreenUnderground.GreenU.place;

import com.GreenUnderground.GreenU.Common.Category;
import com.GreenUnderground.GreenU.Common.Cuisine;
import com.GreenUnderground.GreenU.Common.Location;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "places")
public class Place {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private String address;

    private String imageUrl;

    private String description;

    private String website;

    private String instagram;

    private String status;

    private String submittedBy;


    @Enumerated(EnumType.STRING)
    private Category category;

    @Enumerated(EnumType.STRING)
    private Cuisine cuisine;

    @Enumerated(EnumType.STRING)
    private Location location;

    public Place() {}

    public Place(
            Integer id,
            String name,
            String address,
            String imageUrl,
            String description,
            String website,
            String instagram,
            String status,
            String submittedBy,
            Category category,
            Cuisine cuisine,
            Location location
    ) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.imageUrl = imageUrl;
        this.description = description;
        this.website = website;
        this.instagram = instagram;
        this.status = status;
        this.submittedBy = submittedBy;
        this.category = category;
        this.cuisine = cuisine;
        this.location = location;
    }
}