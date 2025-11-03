# Gestion des Stations-Service

Application web pour la gestion des stations-service et le suivi des prix des carburants.

## 📋 Table des matières
- [Présentation](#-présentation)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies utilisées](#-technologies-utilisées)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Démarrage](#-démarrage)
- [API Endpoints](#-api-endpoints)
- [Structure du projet](#-structure-du-projet)
- [Auteurs](#-auteurs)

## 🚀 Présentation

Cette application permet de gérer les stations-service et de suivre l'évolution des prix des différents types de carburants. Elle se compose d'un backend en Spring Boot et d'un frontend en Angular.

## ✨ Fonctionnalités

- Gestion des stations-service (CRUD)
- Gestion des types de carburants
- Suivi historique des prix des carburants
- Interface utilisateur réactive et intuitive
- API RESTful complète

## 🛠 Technologies utilisées

### Backend (Spring Boot)
- Java 17
- Spring Boot 3.x
- Spring Data JPA
- Hibernate
- Maven
- Base de données H2 (développement)
- PostgreSQL (production)

### Frontend (Angular)
- Angular 15+
- TypeScript
- RxJS
- Angular Material
- HTML5/CSS3

## 🚀 Installation

### Prérequis

- Java 17 ou supérieur
- Node.js 16+ et npm
- Maven 3.6+
- PostgreSQL (pour la production)

### Configuration du backend

1. Cloner le dépôt :
   ```bash
   git clone [URL_DU_REPO]
   cd Atelier5
   ```

2. Configurer la base de données (fichier `application.properties`) :
   ```properties
   # Pour H2 (développement)
   spring.datasource.url=jdbc:h2:mem:stationdb
   spring.datasource.driverClassName=org.h2.Driver
   spring.datasource.username=sa
   spring.datasource.password=password
   spring.h2.console.enabled=true
   
   # Pour PostgreSQL (production)
   # spring.datasource.url=jdbc:postgresql://localhost:5432/stationdb
   # spring.datasource.username=postgres
   # spring.datasource.password=yourpassword
   ```

3. Compiler et exécuter l'application :
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

### Configuration du frontend

1. Se rendre dans le dossier frontend :
   ```bash
   cd frontend/station-front
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Démarrer l'application :
   ```bash
   ng serve
   ```

## 🔌 API Endpoints

### Stations
- `GET /api/stations` - Récupérer toutes les stations
- `GET /api/stations/{id}` - Récupérer une station par ID
- `POST /api/stations` - Créer une nouvelle station
- `PUT /api/stations/{id}` - Mettre à jour une station
- `DELETE /api/stations/{id}` - Supprimer une station

### Carburants
- `GET /api/carburants` - Récupérer tous les carburants
- `POST /api/carburants` - Créer un nouveau type de carburant

### Historique des prix
- `GET /api/histocarbs` - Récupérer tout l'historique
- `GET /api/histocarbs/station/{stationId}` - Historique par station
- `GET /api/histocarbs/station/{stationId}/latest` - Derniers prix par station
- `POST /api/histocarbs` - Ajouter un nouvel historique de prix

## 📁 Structure du projet

```
Atelier5/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/example/station/
│       │       ├── controllers/    # Contrôleurs REST
│       │       ├── entities/       # Entités JPA
│       │       ├── repositories/   # Repositories Spring Data
│       │       ├── services/       # Couche métier
│       │       └── StationApplication.java
│       └── resources/
│           ├── static/
│           └── application.properties
├── frontend/
│   └── station-front/
│       ├── src/
│       │   ├── app/
│       │   │   ├── components/    # Composants Angular
│       │   │   ├── models/        # Modèles TypeScript
│       │   │   └── services/      # Services Angular
│       │   └── assets/
│       └── angular.json
└── pom.xml
```

## 👥 Auteurs

- Ismail KCHIBAL

---
