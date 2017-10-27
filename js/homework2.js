/**
 Напишите функцию которая возвращает количество переданных аргументов
 */
console.log("=== HM2_1:");
nVariables(1, 2);
nVariables(1, 2, "ag");
function nVariables() {
    console.log(arguments.length);
    return arguments.length;
}
//Напишите функцию которая возвращает количество аргументов, которые являются строками. Для решения вам понадобиться изучить оператор typeof
console.log("=== HM2_2:");
nStr(1, 2, "asd", 1, "daa");
nStr(1, 2, "asd", 1, "daa", "dfa");
function nStr() {
    var result = 0;
    for (var i = 0, max = arguments.length; i < max; i++) {
        //console.log(arguments[i]);
        if (typeof arguments[i] === 'string') {
            result++;
        }
    }
    console.log(result);
    return result;
}
//Напишите функцию которая возвращает сумму значений всех переданных аргументов
console.log("=== HM2_3:");
var sum = function () {
    var result = 0;
    for (var i = 0, max = arguments.length; i < max; i++) {
        if (typeof arguments[i] === 'number') {
            result += arguments[i];
        }
    }
    console.log(result);
    return result;
};
sum(1, 2, 5, "adf");
//Сделайте так чтобы как только в инпут впишут слово "JavaScript", то сразу чекбокс справа перешёл в зачеканное состояние
console.log("=== HM2_4:");
/**
var hm2_4_inp_text = document.getElementById("hm2_4_inp_text");
hm2_4_inp_text.oninput = function () {
    if (this.value === "JavaScript"){document.getElementById('hm2_4_inp_checkb').checked = true;}
    else{document.getElementById('hm2_4_inp_checkb').checked = false;}
};
*/
document.getElementById("hm2_4_inp_text").oninput = function () {
    if (this.value === "JavaScript"){document.getElementById('hm2_4_inp_checkb').checked = true;}
    else{document.getElementById('hm2_4_inp_checkb').checked = false;}
};

//Сделать перед сабмитом формы проверку всех инпутов и если хоть один не прошёл её, то выводить сообщение с помощью функции alert() 
//и откланять сабмит формы через метод события preventDefault(). 
//В первом поле должны быть только числа, 
//во втором только буквы a, b, c и d, 
//чекбокс должен быть зачекан,
// один из инпутов в четвёртой группе должен быть зачекан.
console.log("=== HM2_5:");
