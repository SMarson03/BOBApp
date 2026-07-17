package com.GreenUnderground.GreenU.Controller;

import com.GreenUnderground.GreenU.place.Place;
import com.GreenUnderground.GreenU.place.PlaceRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static com.GreenUnderground.GreenU.Common.PlaceStatus.APPROVED;

@RestController
@RequestMapping("/NoirX")
public class PlaceController {

    private final PlaceRepo placeRepo;

    public PlaceController(PlaceRepo placeRepo) {
        this.placeRepo = placeRepo;
    }


    @GetMapping("/places")
    public List<Place> getAllPlaces() {
        return placeRepo.findByStatus(APPROVED);
    }


    @GetMapping("/places/{id}")
    public Place getPlaceById(@PathVariable Integer id) {
        Optional<Place> place = placeRepo.findById(id);

        if (place.isEmpty()) {
            throw new RuntimeException("Place not found");
        }

        return place.get();
    }


    @PostMapping("/places")
    @ResponseStatus(HttpStatus.CREATED)
    public Place createPlace(@RequestBody Place place) {

        place.setStatus("PENDING");

        return placeRepo.save(place);
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/places/{id}")
    public void updatePlace(@RequestBody Place place, @PathVariable Integer id) {
        placeRepo.save(place);
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/places/{id}")
    public void deletePlace(@PathVariable Integer id) {
        placeRepo.deleteById(id);
    }
}

