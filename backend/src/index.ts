import express from 'express'
import { PORT } from './secrets';
import rootRouter from './infrastructure/routes';
import { PrismaClient } from '@prisma/client';


const app=express();
const prismaCliente=new PrismaClient({
    log:['query']
})

 app.use('/api',rootRouter)
app.listen(PORT, ()=>{console.log("Working Server")})