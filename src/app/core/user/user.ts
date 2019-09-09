export interface User {
    name: string;
    authorities: string[]
}

export interface MyAccount {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    
}