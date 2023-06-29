import { app } from "./main";

const PORT = 3000
const HOST = '0.0.0.0'

app.listen(PORT, HOST, async () => {
    console.log(`Server running on port: ${PORT}`)
})