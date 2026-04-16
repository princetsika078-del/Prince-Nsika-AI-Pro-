function toggleMenu(){
  const menu=document.getElementById('menu');
  menu.style.display=menu.style.display==='flex'?'none':'flex';
}
function ouvrirJeu(){
  document.getElementById('popup-jeu').style.display='block';
  document.getElementById('menu').style.display='none';
}
function fermer(){
  document.getElementById('popup-jeu').style.display='none';
}
function modeIA(){
  document.getElementById('zone-ia').style.display='block';
  document.getElementById('zone-code').style.display='none';
}
function modeCode(){
  document.getElementById('zone-code').style.display='block';
  document.getElementById('zone-ia').style.display='none';
}
function creerJeuIA(){
  const desc=document.getElementById('desc').value;
  document.getElementById('result').innerHTML='<p>🎮 Lia génère ton jeu : "'+desc+'"<br><br>Mode démo : ton jeu est prêt !</p>';
}
function testerCode(){
  const code=document.getElementById('code').value;
  document.getElementById('result').innerHTML='<iframe style="width:100%;height:200px;border:none;background:#000" srcdoc="<script>'+code+'</script>"></iframe>';
}
async function payer(){
  const res=await fetch('/create-payment',{method:'POST'});
  const data=await res.json();
  if(data.link){window.location.href=data.link}else{alert('Erreur paiement')}
}
