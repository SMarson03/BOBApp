package com.GreenUnderground.GreenU.Controller;

import com.GreenUnderground.GreenU.place.Place;
import com.GreenUnderground.GreenU.place.PlaceRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/NoirX")
public class PlaceController {


    private final PlaceRepo placeRepo;

    public PlaceController(PlaceRepo placeRepo) {
        this.placeRepo = placeRepo;
    }


    @GetMapping("/places")
    public List<Place> getAllPlaces() {
        List<Place> places = placeRepo.findAll();
        return places;
    }

    @GetMapping("/places/{id}")
    public Place getPlaceById(@PathVariable Integer id) {
        Optional<Place> place = placeRepo.findById(id);

        if (place.isEmpty()) {
            throw new RuntimeException();
        }

        return place.get();
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/places/{id}")
    public void updatePlace(@RequestBody Place place, @PathVariable Integer id) {
        placeRepo.save(place);
    }

    @PostMapping("/places")
    public ResponseEntity<?> createPlace(@RequestBody Place place) {

        boolean exists = placeRepo.existsByNameAndAddressAndLocation(
                place.getName(),
                place.getAddress(),
                place.getLocation()
        );

        if (exists) {
            return ResponseEntity
                    .badRequest()
                    .body("This business has already been submitted.");
        }

        Place savedPlace = placeRepo.save(place);

        return ResponseEntity.ok(savedPlace);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/places/{id}")
    public void deletePlace(@PathVariable Integer id) {
        placeRepo.deleteById(id);
    }
    }