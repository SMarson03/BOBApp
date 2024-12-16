package com.GreenUnderground.GreenU.Controller;

import com.GreenUnderground.GreenU.Gallery.Galleries;
import com.GreenUnderground.GreenU.Gallery.GalleriesRepo;
import com.GreenUnderground.GreenU.Therapy.Therapists;
import com.GreenUnderground.GreenU.Therapy.TherapistsRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/NoirX")
public class TherapistsController {
    private final TherapistsRepo therapistsRepo;

    public TherapistsController(TherapistsRepo therapistsRepo) {
        this.therapistsRepo = therapistsRepo;
    }

    @GetMapping("/therapists")
    public List<Therapists> getAllTherapists() {
        List<Therapists> therapists = therapistsRepo.findAll();
        return therapists;
    }

    @GetMapping("/therapists/{id}")
    Therapists getTherapistsByID(@PathVariable Integer id) {
        Optional<Therapists> therapists = therapistsRepo.findById(id);
        if (therapists.isEmpty()) {
            throw new RuntimeException();
        }
        return therapists.get();
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/therapists/{id}")
    void updateTherapists(@RequestBody Therapists therapists, @PathVariable Integer id) {
        therapistsRepo.save(therapists);

        therapistsRepo.save(therapists);
    }

    //Delete
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/therapists/{id}")
    void deleteTherapists(@PathVariable Integer id) {
        therapistsRepo.deleteById(id);

        therapistsRepo.deleteById(id);
    }
}
