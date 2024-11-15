package com.GreenUnderground.GreenU.Gallery;

import com.GreenUnderground.GreenU.Common.Location;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Galleries")
public class Galleries {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String address;
    private String image_Url;
    private String founder;
    @Enumerated(EnumType.STRING)
    private Location location;
    private String url;

    public Galleries(){}

    public Galleries(Integer id, String name, String address, String image_Url,
                     String founder, Location location, String url){
        this.id = id;
        this.name = name;
        this.address = address;
        this.image_Url = image_Url;
        this.founder = founder;
        this.location = location;
        this.url = url;
}
}