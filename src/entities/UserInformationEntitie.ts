interface IUserInformations {
    nome: string,
    idade: number,
    telefone: number,
    email: string,
    peso: number
    altura: number,
    sexo: string
}

export class UserInformationEntitie{

    public props: IUserInformations

    constructor(props: IUserInformations){
        this.props = props
    }
}