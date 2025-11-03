package com.example.station.repositories;

import com.example.station.entities.Carburant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarburantRepository extends JpaRepository<Carburant, Long> {
}