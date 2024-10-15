import express from 'express'
import cors from 'cors'
import nodeRoutes from './api/routes/NodeRoute'

const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

app.use('/api', nodeRoutes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

