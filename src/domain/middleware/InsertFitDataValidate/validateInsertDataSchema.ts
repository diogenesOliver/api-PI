import { string, number, object } from "yup";

const fitDataSchema = object().shape({

    peso: number().required({
        msg: 'PESO is required'
    }),
    altura: number().required({
        msg: 'ALTURA is required'
    }),
    restricaoAlimentar: string().required({
        msg: 'RESTRICAOALIMENTA is required'
    }),
    restricaoFisica: string().required({
        msg: 'RESTRICAOFISICA is required'
    }),
    nivel: string().required({
        msg: 'NIVEL is required'
    })

})

export { fitDataSchema }