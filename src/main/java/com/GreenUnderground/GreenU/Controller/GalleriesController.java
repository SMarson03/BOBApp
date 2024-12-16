package com.GreenUnderground.GreenU.Controller;

import com.GreenUnderground.GreenU.Cafe.Cafes;
import com.GreenUnderground.GreenU.Gallery.Galleries;
import com.GreenUnderground.GreenU.Gallery.GalleriesRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping ("/NoirX")
public class GalleriesController {
    private final GalleriesRepo galleriesRepo;

    public GalleriesController(GalleriesRepo galleriesRepo) {
        this.galleriesRepo = galleriesRepo;
    }

    @GetMapping("/galleries")
    public List<Galleries> getAllGalleries() {
        List<Galleries> galleries = galleriesRepo.findAll();
        return galleries;
    }

    @GetMapping("/galleries/{id}")
    Galleries getGalleriesByID(@PathVariable Integer id) {
        Optional<Galleries> galleries = galleriesRepo.findById(id);
        if (galleries.isEmpty()) {
            throw new RuntimeException();
        }
        return galleries.get();
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/galleries/{id}")
    void updateGalleries(@RequestBody Galleries galleries, @PathVariable Integer id) {
        galleriesRepo.save(galleries);

        galleriesRepo.save(galleries);
    }

    //Delete
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/galleries/{id}")
    void deleteGalleries(@PathVariable Integer id) {
        galleriesRepo.deleteById(id);

        galleriesRepo.deleteById(id);
    }
}
