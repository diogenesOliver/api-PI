interface IFitDataInformations{
    peso: number,
    altura: number,
    restricaoAlimentar: string,
    restricaoFisicia: string,
    nivel: string
}

export class FitDataUserEntitie{

    public props: IFitDataInformations

    constructor(props: IFitDataInformations){
        this.props = props
    }

}