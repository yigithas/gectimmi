let nvize1 = "";
let ovize1 = "";
let nvize2 = "";
let ovize2 = "";
let nproje = "";
let oproje = "";
let gecme = "";
let finalnot ;
let finaloran;
let mevcutPuan;
let sonuc;

const myForm = document.getElementById('myForm');
const eksikYer = document.getElementById('eksik');

myForm.addEventListener('submit', function(event) {
  
  event.preventDefault(); 
  const formData = new FormData(myForm);
  nvize1 = Number(formData.get('vize1n'));
  ovize1 = Number(formData.get('vize1o'));
  nvize2 = Number(formData.get('vize2n'));
  ovize2 = Number(formData.get('vize2o'));
  nproje = Number(formData.get('projen'));
  oproje = Number(formData.get('projeo'));
  gecme =  Number(formData.get('gecme'));
 
 Hesaplama();
 MesajEkleme();
    

});

function Hesaplama(){

finaloran = 100-ovize1-ovize2-oproje ;

if(finaloran>0 && finaloran<=100 && nvize1<=100 && nvize1>=0 && nvize2<=100 && nvize2>=0 
    && nproje<=100 && nproje>=0 && ovize1<=100 && ovize1>=0 && ovize2<=100 && ovize2>=0 
    && oproje<=100 && oproje>=0 && gecme<=100 && gecme>=0){

mevcutPuan = (nvize1 * ovize1 / 100) + (nvize2 * ovize2 / 100) + (nproje * oproje / 100);
finalnot = (gecme - mevcutPuan) / (finaloran / 100);


console.log("Final Notunuz : " + finalnot);
console.log("Final Oranı : " + finaloran )
    }
}

function MesajEkleme(){
    Hesaplama();
if(finaloran>0 && finaloran<=100 && nvize1<=100 && nvize1>=0 && nvize2<=100 && nvize2>=0 
    && nproje<=100 && nproje>=0 && ovize1<=100 && ovize1>=0 && ovize2<=100 && ovize2>=0 
    && oproje<=100 && oproje>=0 && gecme<=100 && gecme>=0){

    if(finalnot > 100)
        sonuc = "Malesef geçmeniz imkansız";
    else if(finalnot <  40)
        sonuc = "Minumum final şartı olan 40 notunu almanız gerek."
    else
        sonuc = "Almanız gereken minimum not : " + finalnot.toFixed(2);


 
  eksikYer.innerHTML = sonuc ;
  eksikYer.classList.remove('basliklar');
  eksikYer.classList.add('eksikOzel');
    }
}