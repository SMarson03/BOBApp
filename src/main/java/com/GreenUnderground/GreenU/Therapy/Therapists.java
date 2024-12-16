package com.GreenUnderground.GreenU.Therapy;

import com.GreenUnderground.GreenU.Common.Location;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "therapists")
public class Therapists {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String certified;
    private String image_Url;
    private String bio;
    @Enumerated(EnumType.STRING)
    private Location location;
    private String url;

    public Therapists(){};

    public Therapists (Integer id, String name, String certified, String image_Url, String bio,
                       Location location, String url){
        this.id = id;
        this.name = name;
        this.certified = certified;
        this.image_Url = image_Url;
        this.bio = bio;
        this.location = location;
        this.url = url;

    }
}
