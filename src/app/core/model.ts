export interface Aula {
    id: number;
    nome: string;
    sala: string;
    cadeira: string;
    professor: string;
    horarioInicio: string;
    horarioFim: string;
    horaCadastro: string;
}

export interface Professor {
    id: number;
    nome: string;
}

export interface Sala {
    id: number;
    nome: string;
}
