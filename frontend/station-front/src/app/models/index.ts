export interface Station {
    id?: number;
    nom: string;
    ville: string;
    histoCarbs?: HistoCarb[];
}

export interface Carburant {
    id?: number;
    nom: string;
    description: string;
    adresse: string;
    histoCarbs?: HistoCarb[];
}

export interface HistoCarb {
    id?: number;
    date: Date;
    prix: number;
    station?: Station;
    carburant?: Carburant;
}