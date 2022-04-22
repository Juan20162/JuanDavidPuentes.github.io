
function operacion(){
    var vin=parseFloat(document.MyForm.Vin.value);
    var vf=parseFloat(document.MyForm.Vf.value);
    var adc=parseFloat(document.MyForm.adc.value);
    elevado = Math.pow(2, adc)
    var LSB=(vf/(elevado));
    var Vdecimal=(vin/LSB);
    resul1=document.getElementById("LSB");
    resul2=document.getElementById("Vdecimal");
    resul1.innerHTML=LSB;
    resul2.innerHTML=Vdecimal;
}