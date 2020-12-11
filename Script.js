function welcome(name,lastname){
    console.log("Hello " +  name + lastname)
}

welcome("Alexander" , " Edbert");

function ind(a,c,e,f){
    var b = a+c+e+f
   document.write(b);
}

ind("Halo"," Nama"," Saya"," Alex");


var name = "ora ora ora ora ora ora!"
function upperCase(texts){
    var hasil = texts.toUpperCase();
    console.log(hasil);
}

upperCase(name);

var textUpper = "alexander"
function Upper(isi){
    var big = isi.toUpperCase();
    console.log(big);
}
Upper(textUpper);


function last (angka1 ,angka2 ,angka3){
    var m = angka1+ angka2+ angka3
    console.log(m);
    console.log(typeof m )
}
last(100,500,400);
