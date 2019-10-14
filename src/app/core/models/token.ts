export interface Token {
    exp: number;
    iat: Date;
    iss: Date;
    name: string;
    sub: string;
}