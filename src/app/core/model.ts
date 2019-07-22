export interface User {
    name: string;
    actions: Action[];
}

export interface Action {
    id?: number;
    label: string;
    address: string;
}

export interface Aula {
    id?: number;
    turma: string;
    professor: Dicente;
    sala: Sala;
    cadeira: Cadeira;
    inicio: string;
    fim: string;
}

export interface Cadeira {
    id: number;
    name: string;
}

export interface Sala {
    id: number;
    name: string;
    bloco: Bloco;
}

export interface Bloco {
    id: number;
    name: string;
}

export interface Dicente {
    id: number;
    name: string;
}