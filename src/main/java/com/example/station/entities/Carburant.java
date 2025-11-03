package com.example.station.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Carburant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String description;
    private String adresse;
    
    @OneToMany(mappedBy = "carburant", cascade = CascadeType.ALL)
    private List<HistoCarb> histoCarbs;
}