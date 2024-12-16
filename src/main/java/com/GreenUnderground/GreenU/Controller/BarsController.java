package com.GreenUnderground.GreenU.Controller;

import com.GreenUnderground.GreenU.Bar.Bars;
import com.GreenUnderground.GreenU.Bar.BarsRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping ("/NoirX")
public class BarsController {
    private final BarsRepo barsRepo;

    public BarsController(BarsRepo barsRepo) {
        this.barsRepo = barsRepo;
    }

    @GetMapping("/bars")
    public List<Bars> getAllBars() {
        List<Bars> bars = barsRepo.findAll();
        return bars;
    }

    @GetMapping("/bars/{id}")
    Bars getBarsByID(@PathVariable Integer id) {
        Optional<Bars> bars = barsRepo.findById(id);
        if (bars.isEmpty()) {
            throw new RuntimeException();
        }
        return bars.get();
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/bars/{id}")
    void updateBars(@RequestBody Bars bars, @PathVariable Integer id) {
        barsRepo.save(bars);

        barsRepo.save(bars);
    }

    //Delete
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/bars/{id}")
    void deleteBars(@PathVariable Integer id) {
        barsRepo.deleteById(id);

        barsRepo.deleteById(id);
    }
}