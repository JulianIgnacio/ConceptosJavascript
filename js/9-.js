let frase = prompt('ingrese una frase');

for(i = 0;i < frase.length; i++){
    if(frase.charAt(i)=== 'a' || frase.charAt(i)=== 'e' || frase.charAt(i)=== 'i' || frase.charAt(i)=== 'o' || frase.charAt(i)=== 'u'){
        document.write('La vocal es:'+ frase.charAt(i,1));
        document.write('<br/>')
    }
}