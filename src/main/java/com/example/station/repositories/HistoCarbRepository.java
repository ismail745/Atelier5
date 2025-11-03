package com.example.station.repositories;

import com.example.station.entities.HistoCarb;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HistoCarbRepository extends JpaRepository<HistoCarb, Long> {
    List<HistoCarb> findByStationId(Long stationId);
    
    @Query("SELECT h FROM HistoCarb h WHERE h.station.id = :stationId ORDER BY h.date DESC")
    List<HistoCarb> findLatestPricesByStation(@Param("stationId") Long stationId);
}