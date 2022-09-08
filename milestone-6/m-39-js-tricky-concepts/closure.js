/* function add() {
    let counter = 0;
    return function() {
        counter += 1;
       return counter
    }
  }

const result = add();
const aa = result()
console.log(aa);  */

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}

a();



