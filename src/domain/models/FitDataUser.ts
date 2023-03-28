import { Schema, model } from "mongoose";

interface IFitData{
    peso: number,
    altura: number,
    restricaoAlimentar: string,
    restricaoFisica: string,
    nivel: string
}

const fitDataSchema = new Schema<IFitData>(
    {
        peso: { type: Number, required: true },
        altura: { type: Number, required: true },
        restricaoAlimentar: { type: String, required: true },
        restricaoFisica: { type: String, required: true },
        nivel: { type: String, required: true }
    },{
        timestamps: true
    }
)

const FitData = model<IFitData>('FitData', fitDataSchema)

export { FitData }