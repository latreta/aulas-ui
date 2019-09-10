interface MyAccount {
    id: number;
    name: string;
    lastName: string;
    sexo: string;
    email: string;
    birthdate: string;
    profiles: Profile[];
    endereco: Endereco;
    primario: Primario;
    secundario: Secundario;
    enabled: boolean;
    username: string;
    authorities: Profile[];
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
  }
  
  interface Secundario {
    ddd2: string;
    numeroSecundario: string;
  }
  
  interface Primario {
    ddd1: string;
    numeroPrincipal: string;
  }
  
  interface Endereco {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    cep: string;
    estado: string;
    complemento?: any;
  }
  
  interface Profile {
    id: number;
    description: string;
    authority: string;
  }