/* 

Objetivo

Neste desafio, praticamos o loop sobre os caracteres da string. Confira o tutorial em anexo para mais detalhes.

Tarefa

Primeiro, imprima cada vogal emem uma nova linha. As vogais inglesas são a , e , i , o e u , e cada vogal deve ser impressa na mesma ordem em que apareceu em.
Segundo, imprima cada consoante (ou seja, não-vogal) emem uma nova linha na mesma ordem em que apareceu em.
Descrição da função

Complete a função vogaisAndConsonants no editor abaixo.


vogalsAndConsonants tem os seguintes parâmetros:

string s: a string a ser processada
Impressões

Imprima cada vogal deem ordem em uma nova linha, então imprima cada consoante em ordem em uma nova linha. Devolva nada.
Formato de entrada

Existe uma linha de entrada com a string.

Formato de saída

Primeiro, imprima cada vogal emem uma nova linha (na mesma ordem em que apareceram em). Segundo, imprima cada consoante (ou seja, não-vogal) emem uma nova linha (na mesma ordem em que apareceram em).

Entrada de Amostra 0

javascriptloops
Saída de Amostra 0

a 
a 
i 
o 
o 
j 
v 
s 
c 
r 
p 
t 
l 
p 
s
Explicação 0

Observe o seguinte:

Cada letra é impressa em uma nova linha.
Em seguida, as vogais são impressas na mesma ordem em que apareceram no.
Em seguida, as consoantes são impressas na mesma ordem em que apareceram no

*/

function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    var consoants = '';
    
    for(var i = 0; i < s.length; i++) {
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       else {
           consoants += s[i] + '\n';
       }
    }
    
    console.log(consoants.trim());   
}