import { Request, Response } from "express";
import { HttpResponse } from "./http";

export interface IController { 
    handler(req : Request, res : Response): Promise<HttpResponse>;
}