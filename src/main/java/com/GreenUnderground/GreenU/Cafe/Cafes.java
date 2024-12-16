package com.GreenUnderground.GreenU.Cafe;

import com.GreenUnderground.GreenU.Common.Beverage;
import com.GreenUnderground.GreenU.Common.Location;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "cafes")
public class Cafes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String address;
    private String image_Url;
    @Enumerated(EnumType.STRING)
    private Beverage beverage;
    @Enumerated(EnumType.STRING)
    private Location location;
    private String url;

    public Cafes(){};

    public Cafes(Integer id, String name, String address, Location location,
                 String image_Url, Beverage beverage, String url){
        this.id = id;
        this.name = name;
        this.address = address;
        this.image_Url = image_Url;
        this.location = location;
        this.beverage = beverage;
        this.url = url;

    }
}
