let vizeNot = "";
let vizeOran = "";
let projeNot = "";
let projeOran = "";
let finalNot = "";
let finalOran = "";
let sinifOrt = "";
let sapma = "";
let hampuan;
let tNotu;
let harf;
let ustPuan;
let ustTpuan;
let eksikPuan;
let terstenTnotu;

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
  
  event.preventDefault(); 

 
 const formData = new FormData(myForm);
  vizeNot = Number(formData.get('nVize'));
  vizeOran = Number(formData.get('oVize'));
  projeNot = Number(formData.get('nProje'));
  projeOran = Number(formData.get('oProje'));
  finalNot = Number(formData.get('nFinal'));
  finalOran = Number(formData.get('oFinal'));
  sinifOrt = Number(formData.get('ortalama'));
  sapma = Number(formData.get('standart'));
 
tnotuHesapla();

if(vizeOran + projeOran + finalOran == 100 && vizeNot<=100 && vizeNot>=0 && finalNot<=100 && 
  finalNot>=0 && projeNot<=100 && projeNot>=0 && sapma!="" && sinifOrt!="" && sinifOrt<=100 &&
  sinifOrt>=0){

  const harfYeri = document.getElementById('harfKismi');
  harfYeri.innerHTML = harf;
  harfYeri.classList.remove('basliklar');
  harfYeri.classList.add('harfOzel');

  if(harf!="AA"){
  const eksikYer = document.getElementById('eksik');
  eksikYer.innerHTML = "Bir sonraki harf için almanız gereken puan : " + eksikPuan.toFixed(2);
  eksikYer.classList.remove('basliklar');
  eksikYer.classList.add('eksikOzel');
  }
  else{
  const eksikYer = document.getElementById('eksik');
  eksikYer.innerHTML = "En üst harf notundasınız." ;
  eksikYer.classList.remove('basliklar');
  eksikYer.classList.add('eksikOzel');
  }

  if(finalNot<40){
  harf="FF";

  const harfYeri = document.getElementById('harfKismi');
  harfYeri.innerHTML = harf;
  harfYeri.classList.remove('basliklar');
  harfYeri.classList.add('harfOzel');
  
  const eksikYer = document.getElementById('eksik');
  eksikYer.innerHTML = "Final notu 40'dan düşük olduğundan otomatikmen kaldınız." ;
  eksikYer.classList.remove('basliklar');
  eksikYer.classList.add('eksikOzel');
}
}

});

function tnotuHesapla(){
if(vizeOran + projeOran + finalOran == 100 && vizeNot<=100 && vizeNot>=0 && finalNot<=100 && 
  finalNot>=0 && projeNot<=100 && projeNot>=0 && sapma!="" && sinifOrt!="" && sinifOrt<=100 &&
  sinifOrt>=0){
hampuan = (vizeNot*vizeOran)/100 + (projeNot*projeOran)/100 + (finalNot*finalOran)/100;

tNotu = 50+10*(hampuan-sinifOrt)/sapma;

console.log("Ham Puan : " + hampuan);
console.log("T notu : " + tNotu);
harfNotu();
}
else{
  alert("HATA: Eksik veya tutarsız değerler girdiniz!");
  
}
}

function harfNotu(){

if(sinifOrt<=100 && sinifOrt>=80){
  if(hampuan<=100 && hampuan>=90)
    harf="AA";
  else if(hampuan<=89 && hampuan>=80){
    harf="BA";
    ustPuan=90;}
  else if(hampuan<=79 && hampuan>=75){
    harf="BB";
    ustPuan=80;}
  else if(hampuan<=74 && hampuan>=70){
    harf="CB";
    ustPuan=75;}
  else if(hampuan<=69 && hampuan>=60){
    harf="CC";
    ustPuan=70;}
  else if(hampuan<=59 && hampuan>=50){
    harf="DC";
    ustPuan=60;}
  else if(hampuan<=49 && hampuan>=40){
    harf="DD";
    ustPuan=50;}
  else if(hampuan<=39 && hampuan>=30){
    harf="FD";
    ustPuan=40;}
  else if(hampuan<=29 && hampuan>=0){
    harf="FF";
    ustPuan=30;}
}

else if(sinifOrt<=79.99 && sinifOrt>=70.01){
    if(tNotu<=100 && tNotu>=59)
    harf="AA";
  else if(tNotu<=58.99 && tNotu>=54){
    harf="BA";
    ustTpuan=59;}
  else if(tNotu<=53.99 && tNotu>=49){
    harf="BB";
    ustTpuan=54;}
  else if(tNotu<=48.99 && tNotu>=44){
    harf="CB";
    ustTpuan=49;}
  else if(tNotu<=43.99 && tNotu>=39){
    harf="CC";
    ustTpuan=44;}
  else if(tNotu<=38.99 && tNotu>=34){
    harf="DC";
    ustTpuan=39;}
  else if(tNotu<=33.99 && tNotu>=29){
    harf="DD";
    ustTpuan=34;}
  else if(tNotu<=28.99 && tNotu>=24){
    harf="FD";
    ustTpuan=29;}
  else if(tNotu<=23.99 && tNotu>=0){
    harf="FF";
    ustTpuan=24;}
}

else if(sinifOrt<=70 && sinifOrt>=62.51){
    if(tNotu<=100 && tNotu>=61)
    harf="AA";
  else if(tNotu<=60.99 && tNotu>=56){
    harf="BA";
    ustTpuan=61;}
  else if(tNotu<=55.99 && tNotu>=51){
    harf="BB";
    ustTpuan=56;}
  else if(tNotu<=50.99 && tNotu>=46){
    harf="CB";
    ustTpuan=51;}
  else if(tNotu<=45.99 && tNotu>=41){
    harf="CC";
    ustTpuan=46;}
  else if(tNotu<=40.99 && tNotu>=36){
    harf="DC";
    ustTpuan=41;}
  else if(tNotu<=35.99 && tNotu>=31){
    harf="DD";
    ustTpuan=36;}
  else if(tNotu<=30.99 && tNotu>=26){
    harf="FD";
    ustTpuan=31;}
  else if(tNotu<=25.99 && tNotu>=0){
    harf="FF";
    ustTpuan=26;}
}

else if(sinifOrt<=62.50 && sinifOrt>=57.51){
    if(tNotu<=100 && tNotu>=63)
    harf="AA";
  else if(tNotu<=62.99 && tNotu>=58){
    harf="BA";
    ustTpuan=63;}
  else if(tNotu<=57.99 && tNotu>=53){
    harf="BB";
    ustTpuan=58;}
  else if(tNotu<=52.99 && tNotu>=48){
    harf="CB";
    ustTpuan=53;}
  else if(tNotu<=47.99 && tNotu>=43){
    harf="CC";
    ustTpuan=48;}
  else if(tNotu<=42.99 && tNotu>=38){
    harf="DC";
    ustTpuan=43;}
  else if(tNotu<=37.99 && tNotu>=33){
    harf="DD";
    ustTpuan=38;}
  else if(tNotu<=32.99 && tNotu>=28){
    harf="FD";
    ustTpuan=33;}
  else if(tNotu<=27.99 && tNotu>=0){
    harf="FF";
    ustTpuan=28;}
}

else if(sinifOrt<=57.50 && sinifOrt>=52.51){
    if(tNotu<=100 && tNotu>=65)
    harf="AA";
  else if(tNotu<=64.99 && tNotu>=60){
    harf="BA";
    ustTpuan=65;}
  else if(tNotu<=59.99 && tNotu>=55){
    harf="BB";
    ustTpuan=60;}
  else if(tNotu<=54.99 && tNotu>=50){
    harf="CB";
    ustTpuan=55;}
  else if(tNotu<=49.99 && tNotu>=45){
    harf="CC";
    ustTpuan=50;}
  else if(tNotu<=44.99 && tNotu>=40){
    harf="DC";
    ustTpuan=45;}
  else if(tNotu<=39.99 && tNotu>=35){
    harf="DD";
    ustTpuan=40;}
  else if(tNotu<=34.99 && tNotu>=30){
    harf="FD";
    ustTpuan=35;}
  else if(tNotu<=29.99 && tNotu>=0){
    harf="FF";
    ustTpuan=30;}
}

else if(sinifOrt<=52.50 && sinifOrt>=47.51){
    if(tNotu<=100 && tNotu>=67)
    harf="AA";
  else if(tNotu<=66.99 && tNotu>=62){
    harf="BA";
    ustTpuan=67;}
  else if(tNotu<=61.99 && tNotu>=57){
    harf="BB";
    ustTpuan=62;}
  else if(tNotu<=56.99 && tNotu>=52){
    harf="CB";
    ustTpuan=57;}
  else if(tNotu<=51.99 && tNotu>=47){
    harf="CC";
    ustTpuan=52;}
  else if(tNotu<=46.99 && tNotu>=42){
    harf="DC";
    ustTpuan=47;}
  else if(tNotu<=41.99 && tNotu>=37){
    harf="DD";
    ustTpuan=42;}
  else if(tNotu<=36.99 && tNotu>=32){
    harf="FD";
    ustTpuan=37;}
  else if(tNotu<=31.99 && tNotu>=0){
    harf="FF";
    ustTpuan=32;}
}

else if(sinifOrt<=47.50 && sinifOrt>=42.51){
    if(tNotu<=100 && tNotu>=69)
    harf="AA";
  else if(tNotu<=68.99 && tNotu>=64){
    harf="BA";
    ustTpuan=69;}
  else if(tNotu<=63.99 && tNotu>=59){
    harf="BB";
    ustTpuan=64;}
  else if(tNotu<=58.99 && tNotu>=54){
    harf="CB";
    ustTpuan=59;}
  else if(tNotu<=53.99 && tNotu>=49){
    harf="CC";
    ustTpuan=54;}
  else if(tNotu<=48.99 && tNotu>=44){
    harf="DC";
    ustTpuan=49;}
  else if(tNotu<=43.99 && tNotu>=39){
    harf="DD";
    ustTpuan=44;}
  else if(tNotu<=38.99 && tNotu>=34){
    harf="FD";
    ustTpuan=39;}
  else if(tNotu<=33.99 && tNotu>=0){
    harf="FF";
    ustTpuan=34;}
}

else if(sinifOrt<=42.50 && sinifOrt>=0){
    if(tNotu<=100 && tNotu>=71)
    harf="AA";
  else if(tNotu<=70.99 && tNotu>=66){
    harf="BA";
    ustTpuan=71;}
  else if(tNotu<=65.99 && tNotu>=61){
    harf="BB";
    ustTpuan=66;}
  else if(tNotu<=60.99 && tNotu>=56){
    harf="CB";
    ustTpuan=61;}
  else if(tNotu<=55.99 && tNotu>=51){
    harf="CC";
    ustTpuan=56;}
  else if(tNotu<=50.99 && tNotu>=46){
    harf="DC";
    ustTpuan=51;}
  else if(tNotu<=45.99 && tNotu>=41){
    harf="DD";
    ustTpuan=46;}
  else if(tNotu<=40.99 && tNotu>=36){
    harf="FD";
    ustTpuan=41;}
  else if(tNotu<=35.99 && tNotu>=0){
    harf="FF";
    ustTpuan=36;}
}

if(sinifOrt<=100 && sinifOrt>=80){
  eksikPuan=ustPuan-hampuan;
}
else{
  terstenTnotu= (sapma*(ustTpuan-50))/10 + sinifOrt;
  eksikPuan=terstenTnotu-hampuan;
}

console.log("Eksik puan : " + eksikPuan);
console.log("Harf : " + harf);
}

