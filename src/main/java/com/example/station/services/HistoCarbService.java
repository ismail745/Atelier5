package com.example.station.services;

import com.example.station.entities.HistoCarb;
import com.example.station.repositories.HistoCarbRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class HistoCarbService {
    private final HistoCarbRepository histoCarbRepository;

    public List<HistoCarb> getAllHistoCarbs() {
        return histoCarbRepository.findAll();
    }

    public List<HistoCarb> getHistoCarbsByStation(Long stationId) {
        return histoCarbRepository.findByStationId(stationId);
    }

    public List<HistoCarb> getLatestPricesByStation(Long stationId) {
        return histoCarbRepository.findLatestPricesByStation(stationId);
    }

    public HistoCarb createHistoCarb(HistoCarb histoCarb) {
        return histoCarbRepository.save(histoCarb);
    }

    public void deleteHistoCarb(Long id) {
        histoCarbRepository.deleteById(id);
    }
}