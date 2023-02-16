import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailProvider implements IMailProvider{

    private transporter: Mail

    constructor(){
        this.transporter = nodemailer.createTransport({  })
    }

    async sendMail(message: IMessage): Promise<void> {
        
    }

}