package com.GreenUnderground.GreenU.Legal;

import com.GreenUnderground.GreenU.Common.Beverage;
import com.GreenUnderground.GreenU.Common.Location;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class Lawyers {
    private Integer id;
    private String name;
    private String image_Url;
    private String practice;
    @Enumerated(EnumType.STRING)
    private Location location;
    private String url;

    public Lawyers(){};

    public Lawyers(Integer id, String name, String image_Url, String practice,
                   Location location, String url){
        this.id = id;
        this.name = name;
        this.image_Url = image_Url;
        this.practice = practice;
        this.location = location;
        this.url = url;
    }
}
