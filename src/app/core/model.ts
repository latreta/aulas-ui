export interface Token {
    exp: number;
    iat: Date;
    iss: Date;
    name: string;
    sub: string;
}

export interface Action {
    id?: number;
    label: string;
    address: string;
}

export interface Aula {
    id?: number;
    turma: string;
    discente: Discente;
    sala: Sala;
    disciplina: Disciplina;
    inicio: Date;
    fim: string;
    createdAt: string,
    updatedAt: string,
}

export interface Horario {
    hour: string;
    minute: string;
}

export interface Disciplina {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
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

export interface Discente {
    id: number;
    name: string;
}
