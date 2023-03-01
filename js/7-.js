let n1 = parseInt(prompt('ingrese el primer numero'));

let n2= parseInt(prompt('ingrese el segundo numero'));

let n3 = parseInt(prompt('ingrese el tercer numero'));

if (n1>n2 && n1>n3){
    document.write('el mayor es:',n1);
}else if(n2>n1 && n2>n3){
    document.write('el mayor es:',n2);
}else {
    document.write('el mayor es:',n3);
}