import { environment } from 'src/environments/environment';
import { DefaultDataServiceConfig } from '@ngrx/data';


const root = environment.API_URL;

// export const defaultDataServiceConfig: DefaultDataServiceConfig = {
//     root,
//     entityHttpResourceUrls: {
//         Aula: {
//             entityResourceUrl: `${root}/classes`,
//             collectionResourceUrl: `${root}/classes`
//         },
//         Disciplina: {
//             entityResourceUrl: `${root}/disciplinas`,
//             collectionResourceUrl: `${root}/disciplinas`
//         },
//         Discente: {
//             entityResourceUrl: `${root}/discentes`,
//             collectionResourceUrl: `${root}/discentes`
//         },
//         Sala: {
//             entityResourceUrl: `${root}/salas`,
//             collectionResourceUrl: `${root}/salas`
//         },
//         Bloco: {
//             entityResourceUrl: `${root}/blocos`,
//             collectionResourceUrl: `${root}/blocos`
//         },
//     }
// };
