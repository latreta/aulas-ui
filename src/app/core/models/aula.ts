import { Sala } from './sala';
import { Discente } from './discente';
import { Disciplina } from './disciplina';

export interface Aula {
    id?: number;
    turma: string;
    discente: Discente;
    sala: Sala;
    disciplina: Disciplina;
    inicio: any;
    fim: any;
    createdAt: any,
    updatedAt: any,
}