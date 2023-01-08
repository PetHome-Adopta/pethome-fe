export enum Backends {
    API,
}

export const Backend:any = {}

Backend[Backends.API] = process.env.BACKEND_API;