interface IFitDataInformations{
    peso: number,
    altura: number,
    restricaoAlimentar: string,
    restricaoFisica: string,
    nivel: string
}

export class FitDataUserEntitie{

    public props: IFitDataInformations

    constructor(props: IFitDataInformations){
        this.props = props
    }

}