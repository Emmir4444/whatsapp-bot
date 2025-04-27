const VerifiToken=(req,res)=>{
    res.send("Hola verify token")
}

const ReceivedMessage=(req,res)=>{
    res.send("Hola received message")
}
module.exports={
    VerifiToken,
    ReceivedMessage
}