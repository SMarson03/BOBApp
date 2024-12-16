package com.GreenUnderground.GreenU.Controller;

import com.GreenUnderground.GreenU.Bar.Bars;
import com.GreenUnderground.GreenU.Bar.BarsRepo;
import com.GreenUnderground.GreenU.Cafe.Cafes;
import com.GreenUnderground.GreenU.Cafe.CafesRepo;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/NoirX")
public class CafesController {
   private final CafesRepo cafesRepo;

   public CafesController(CafesRepo cafesRepo) {
            this.cafesRepo = cafesRepo;
        }

   @GetMapping("/cafes")
        public List<Cafes> getAllCafes() {
            List<Cafes> cafes = cafesRepo.findAll();
            return cafes;
        }

        @GetMapping("/cafes/{id}")
        Cafes getCafesByID(@PathVariable Integer id) {
            Optional<Cafes> cafes = cafesRepo.findById(id);
            if (cafes.isEmpty()) {
                throw new RuntimeException();
            }
            return cafes.get();
        }


        @ResponseStatus(HttpStatus.NO_CONTENT)
        @PutMapping("/cafes/{id}")
        void updateCafes(@RequestBody Cafes cafes, @PathVariable Integer id) {
            cafesRepo.save(cafes);

            cafesRepo.save(cafes);
        }

        //Delete
        @ResponseStatus(HttpStatus.NO_CONTENT)
        @DeleteMapping("/cafes/{id}")
        void deleteCafes(@PathVariable Integer id) {
            cafesRepo.deleteById(id);

            cafesRepo.deleteById(id);
        }
    }

