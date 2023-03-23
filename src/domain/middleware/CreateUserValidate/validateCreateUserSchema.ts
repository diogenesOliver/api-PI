import { object, ref, string } from "yup";

const userDataSchema = object().shape({

    nome: string().required({
        msg: 'Name required'
    }),
    email: string().required().email(),
    confirmEmail: string().required().email().oneOf(
        [ref('email')], 'The emails do not match'
    ),
    cpf: string().required({
        msg: 'CPF required'
    })

})

export { userDataSchema }