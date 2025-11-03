package com.example.station.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistoCarb {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    private Double prix;
    
    @ManyToOne
    @JoinColumn(name = "station_id")
    private Station station;
    
    @ManyToOne
    @JoinColumn(name = "carburant_id")
    private Carburant carburant;
}