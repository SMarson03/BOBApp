package com.GreenUnderground.GreenU.Controller;

import com.GreenUnderground.GreenU.Gallery.Galleries;
import com.GreenUnderground.GreenU.Gallery.GalleriesRepo;
import com.GreenUnderground.GreenU.Legal.Lawyers;
import com.GreenUnderground.GreenU.Legal.LawyersRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/NoirX")
public class LawyersController {
    private final LawyersRepo lawyersRepo;

    public LawyersController(LawyersRepo lawyersRepo) {
        this.lawyersRepo = lawyersRepo;
    }

    @GetMapping("/lawyers")
    public List<Lawyers> getAllLawyers() {
        List<Lawyers> lawyers = lawyersRepo.findAll();
        return lawyers;
    }

    @GetMapping("/lawyers/{id}")
    Lawyers getLawyersByID(@PathVariable Integer id) {
        Optional<Lawyers> lawyers = lawyersRepo.findById(id);
        if (lawyers.isEmpty()) {
            throw new RuntimeException();
        }
        return lawyers.get();
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/lawyers/{id}")
    void updateLawyers(@RequestBody Lawyers lawyers, @PathVariable Integer id) {
        lawyersRepo.save(lawyers);

        lawyersRepo.save(lawyers);
    }

    //Delete
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/lawyers/{id}")
    void deleteLawyers(@PathVariable Integer id) {
        lawyersRepo.deleteById(id);

        lawyersRepo.deleteById(id);
    }
}
