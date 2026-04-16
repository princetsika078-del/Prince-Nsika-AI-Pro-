const express=require('express');
const app=express();
const axios=require('axios');
app.use(express.static('.'));
app.use(express.json());
app.post('/create-payment',async(req,res)=>{
  try{
    const response=await axios.post('https://api.flutterwave.com/v3/payments',{
      tx_ref:'prince-'+Date.now(),amount:'10',currency:'USD',
      redirect_url:'https://ton-site.com/success',
      customer:{email:'user@test.com',name:'Prince User'},
      customizations:{title:'Prince Nsika AI Pro',description:'Abonnement Pro 10$'}
    },{headers:{Authorization:'Bearer '+process.env.FLUTTERWAVE_SECRET_KEY}});
    res.json({link:response.data.data.link});
  }catch(e){res.status(500).json({error:'Erreur'})}
});
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log('Serveur ON port '+PORT));
