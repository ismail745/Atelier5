package com.example.station.services;

import com.example.station.entities.Station;
import com.example.station.repositories.StationRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class StationService {
    private final StationRepository stationRepository;

    public List<Station> getAllStations() {
        return stationRepository.findAll();
    }

    public Station getStation(Long id) {
        return stationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Station not found"));
    }

    public Station createStation(Station station) {
        return stationRepository.save(station);
    }

    public Station updateStation(Long id, Station station) {
        Station existingStation = getStation(id);
        existingStation.setNom(station.getNom());
        existingStation.setVille(station.getVille());
        return stationRepository.save(existingStation);
    }

    public void deleteStation(Long id) {
        stationRepository.deleteById(id);
    }
}