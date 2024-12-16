package com.GreenUnderground.GreenU.Controller;

import com.GreenUnderground.GreenU.Gallery.Galleries;
import com.GreenUnderground.GreenU.Gallery.GalleriesRepo;
import com.GreenUnderground.GreenU.JuiceBar.JuiceBars;
import com.GreenUnderground.GreenU.JuiceBar.JuiceBarsRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/NoirX")
public class JuiceBarsController {
    private final JuiceBarsRepo juiceBarsRepo;

    public JuiceBarsController(JuiceBarsRepo juiceBarsRepo) {
        this.juiceBarsRepo = juiceBarsRepo;
    }

    @GetMapping("/juicebars")
    public List<JuiceBars> getAllJuiceBars() {
        List<JuiceBars> juiceBars = juiceBarsRepo.findAll();
        return juiceBars;
    }

    @GetMapping("/juicebars/{id}")
    JuiceBars getJuiceBarsByID(@PathVariable Integer id) {
        Optional<JuiceBars> juiceBars = juiceBarsRepo.findById(id);
        if (juiceBars.isEmpty()) {
            throw new RuntimeException();
        }
        return juiceBars.get();
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/juicebars/{id}")
    void updateJuiceBars(@RequestBody JuiceBars juiceBars, @PathVariable Integer id) {
        juiceBarsRepo.save(juiceBars);

        juiceBarsRepo.save(juiceBars);
    }

    //Delete
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/juicebars/{id}")
    void deleteJuiceBars(@PathVariable Integer id) {
        juiceBarsRepo.deleteById(id);

        juiceBarsRepo.deleteById(id);
    }
}
