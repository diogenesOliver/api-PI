import { app } from "./main";
import { dataBaseClientInstance } from "./infra/dataBaseClientIndex";

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    
    await dataBaseClientInstance.connect()
    console.log(`Server running on port: ${PORT}`)

})