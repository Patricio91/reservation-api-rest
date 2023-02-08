import * as signToken from "./token";

export interface IPayload {
    id: string;
    role: string;
    iat: number;
    exp: number;
}

export default { signToken };