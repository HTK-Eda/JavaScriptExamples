/*var ad;
ad=prompt("Adınızı girin:");
document.write(ad);
console.log(ad);*/

/*Ekrandan alınan iki sayının toplamını bul
var a,b,toplam;
a= Number(prompt("1.sayı gir:"));
b=Number(prompt("2.sayı gir:"));
toplam=a+b;
alert("Toplam="+toplam);
console.log(toplam); */

/*Örnek:Ad yazma
var ad=prompt("Adınızı giriniz");
var soyad=prompt("Soyadınızı giriniz");
document.write("Merhaba"+"<br>"+"Adınız:"+ad+"<br>");
document.write("Soyadınız:"+soyad); */

/*Örnek:Girilen sayının karesini hesaplama
var sayi, sonuc;
sayi=Number(prompt("Karesini hesaplamak istediğiniz sayi:"));
sonuc=sayi*sayi;
alert(sayi+" sayısının karesi "+sonuc); */

/*Örnek:3 sayının prtalaması
var a,b,c,ort;
a=Number(prompt("1.sayı:"));
b=Number(prompt("2.sayı:"));
c=Number(prompt("3.sayı:"));
ort=(a+b+c)/3;
alert("3 sayının ortolaması:"+ort); */

/*Örnek:Dikdörtgenin alanını ve çevresini hesaplama
var uzun,kisa,alan,cevre;
kisa=Number(prompt("Kısa kenar:"));
uzun=Number(prompt("Uzun kenar:"));
alan=uzun*kisa;
cevre=(uzun+kisa)*2;
alert("Çevre:"+cevre+" Alan"+alan);  */

//Örnek:Dairenin alanını ve çevresini hesaplama
var r,alan,cevre;
const pi=3.14;
r=Number(prompt("Yarıçap giriniz:"));
alan=pi*r*r;
cevre=2*pi*r;
alert("Çevre:"+cevre+" Alan"+alan);

