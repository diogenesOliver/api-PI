import { app } from "./main";
import { dataBaseClientInstance } from "./infra/dataBaseClientIndex";

const PORT = process.env.PORT

app.listen(PORT, async () => {
    
    await dataBaseClientInstance.connect()
    console.log(`Server running on port: ${PORT}`)

})