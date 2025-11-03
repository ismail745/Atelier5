package com.example.station.services;

import com.example.station.entities.Carburant;
import com.example.station.repositories.CarburantRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CarburantService {
    private final CarburantRepository carburantRepository;

    public List<Carburant> getAllCarburants() {
        return carburantRepository.findAll();
    }

    public Carburant getCarburant(Long id) {
        return carburantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Carburant not found"));
    }

    public Carburant createCarburant(Carburant carburant) {
        return carburantRepository.save(carburant);
    }

    public Carburant updateCarburant(Long id, Carburant carburant) {
        Carburant existingCarburant = getCarburant(id);
        existingCarburant.setNom(carburant.getNom());
        existingCarburant.setDescription(carburant.getDescription());
        existingCarburant.setAdresse(carburant.getAdresse());
        return carburantRepository.save(existingCarburant);
    }

    public void deleteCarburant(Long id) {
        carburantRepository.deleteById(id);
    }
}