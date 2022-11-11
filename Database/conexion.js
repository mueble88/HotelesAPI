import mongoose from 'mongoose';

export async function conectarConMongo(){

    try{
        await mongoose.connect(process.env.DATABASE);
        console.log('Exito en la conexión con mongoDB')
    }catch(error){
        console.log(error)
    }
}