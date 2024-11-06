import { Request, Response } from "express";
import Logger from "../../config/logger";
import { MovieModel } from "../models/Movie";


export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
    } catch (e: any) {
        Logger.error(`Erro no SIstema: ${e.message}`)
    }
}

export async function findMovieById(req: Request, res: Response) {
    try {
        
        const id = req.params.id 
        const movie = await MovieModel.findById(id)

        if (!movie) {
            return res.status(404).send({msg: "Filme não encontrado"})
        }

        return res.status(200).send(movie)

    } catch (e: any) {
        Logger.error(`Erro no SIstema: ${e.message}`)
    }
}

export async function findAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find()
    
        if (!movies) {
            return res.status(404).send({msg: "Filme não encontrado"})
        }
    
        return res.status(200).send(movies)
    } catch (e: any) {
        Logger.error(`Erro no SIstema: ${e.message}`)
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id)
    
        if(!movie) {
            return res.status(404).send({msg: "Filme não encontrado"})
        }

        await movie.deleteOne()

        return res.status(200).send({msg: "Filme excluido com sucesso"})

    } catch (e: any) {
        Logger.error(`Erro no SIstema: ${e.message}`)
    }
}