interface IUserInformations {
    nome: string,
    email: string,
    confirmEmail: string,
    cpf: string
}

export class UserInformationEntitie{

    public props: IUserInformations

    constructor(props: IUserInformations){
        this.props = props
    }
}