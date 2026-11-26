const express = require('express');
const app = express();
app.use(express.json());
const users = { "null": "1234", "admin": "null123", "demo": "demo" };
app.post('/login', (req,res)=>{
  const {user,pass}=req.body;
  if(users[user] && users[user]===pass) return res.json({ok:true,msg:"Bienvenido "+user});
  return res.json({ok:false,msg:"Usuario o clave mal"});
});
app.get('/',(req,res)=>res.send("Servidor Null ON"));
app.listen(process.env.PORT||3000,()=>console.log("ON"));
