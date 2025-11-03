package com.example.station.controllers;

import com.example.station.entities.Carburant;
import com.example.station.services.CarburantService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carburants")
@AllArgsConstructor
@CrossOrigin("*")
public class CarburantController {
    private final CarburantService carburantService;

    @GetMapping
    public List<Carburant> getAllCarburants() {
        return carburantService.getAllCarburants();
    }

    @GetMapping("/{id}")
    public Carburant getCarburant(@PathVariable Long id) {
        return carburantService.getCarburant(id);
    }

    @PostMapping
    public Carburant createCarburant(@RequestBody Carburant carburant) {
        return carburantService.createCarburant(carburant);
    }

    @PutMapping("/{id}")
    public Carburant updateCarburant(@PathVariable Long id, @RequestBody Carburant carburant) {
        return carburantService.updateCarburant(id, carburant);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCarburant(@PathVariable Long id) {
        carburantService.deleteCarburant(id);
        return ResponseEntity.ok().build();
    }
}