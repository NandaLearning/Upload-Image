import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


export const getAllCloud = async (req,res) => {
    try{
        const data =  await prisma.cloud.findMany()
        res.json({
            message : "data akun berhasil di temukan",
            status : 200,
            data : data
        })
    }catch(err){
        res.json({
            message : "data akun tidak di temukan",
            status : 404
        })
    }
}


export const createNewCloud = async (req,res) => {
    try{
        const fileNames = req.files.map(file => file.filename)
        const data = await prisma.cloud.create({
        data: {
           gambar: fileNames
    }
});
        res.json({
            message : "data cloud berhasil di buat",
            status : 200,
            data : data
        })
    }catch(err){
        console.log(err)
        res.json({
            message : "data gambar tidak bisa di buat",
            status : 404
        })
    }
}



export const deleteAll = async (req,res) => {
    try{
        const data = await prisma.cloud.deleteMany()
        res.json({
            message : "data berhasil di hapus",
            status : 200,
            data : data
        })
    }catch(err){
        res.json({
            message : "data akun tidak di temukan",
            status : 404
        })
    }
}