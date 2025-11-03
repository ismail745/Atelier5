package com.example.station.controllers;

import com.example.station.entities.HistoCarb;
import com.example.station.services.HistoCarbService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/histocarbs")
@AllArgsConstructor
@CrossOrigin("*")
public class HistoCarbController {
    private final HistoCarbService histoCarbService;

    @GetMapping
    public List<HistoCarb> getAllHistoCarbs() {
        return histoCarbService.getAllHistoCarbs();
    }

    @GetMapping("/station/{stationId}")
    public List<HistoCarb> getHistoCarbsByStation(@PathVariable Long stationId) {
        return histoCarbService.getHistoCarbsByStation(stationId);
    }

    @GetMapping("/station/{stationId}/latest")
    public List<HistoCarb> getLatestPricesByStation(@PathVariable Long stationId) {
        return histoCarbService.getLatestPricesByStation(stationId);
    }

    @PostMapping
    public HistoCarb createHistoCarb(@RequestBody HistoCarb histoCarb) {
        return histoCarbService.createHistoCarb(histoCarb);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteHistoCarb(@PathVariable Long id) {
        histoCarbService.deleteHistoCarb(id);
        return ResponseEntity.ok().build();
    }
}