import { body } from "express-validator";

export const movieCreateValidation = () => {
    return [
        body("title")
        .isString()
        .withMessage("O título é obrigatório!")
        .isLength({min: 5})
        .withMessage("O Filme precisa ter ao menos 5 caracteres"),
        body("rating")
        .isNumeric()
        .withMessage("Precisa ser um número")
        .custom((value: number) => {
            if(value < 0 || value > 10) {
                throw new Error("A avaliação tem que estar entre 0 e 10")
            }
            return true
        }),
        body("description")
        .isString()
        .withMessage("A descrição é obrigatória"),
        body("director")
        .isString()
        .withMessage("O nome do diretor é obrigatório"),
        body("poster")
        .isURL()
        .withMessage("A imagem precisa ser uma URL")
    ]
}