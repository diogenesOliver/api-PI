import { app } from "./main";
const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    console.log(`Server running on port: ${PORT}`)
})