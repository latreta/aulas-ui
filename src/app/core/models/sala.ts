import { Bloco } from './bloco';

export interface Sala {
    id: number;
    name: string;
    bloco: Bloco;
    createdAt: any;
    updatedAt: any;
}