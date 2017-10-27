/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//самовызывающаяся функция (выполнить код и забыть)
//не создает переменные в глобальном скопе
;(function(){ 
    var x=1;
    console.log(x+2);
})();
$("#click").click(function () {
    alert("Handler for .click() called.");
});