//function scope : (anything inside the function is function scope)
//block scope: anything inside the second bracket
//we can not access a variable outside a function which is declared and assigned inside a function
function functionScope(){
    //console.log('object');
    const a = 2;
    if( a === 2){
        console.log(this);
        const b = 2;
        let c = 3;
        var d = 4; // var here is hoisted to the top of the inside the function and thats why we can access the var outside the block but inside the function
    }
    //console.log(b); //not accesible outside the block
    //console.log(c); //not accesible outside the block
    //console.log(d); ===> only variable with var is accesible outside of the block(var is hoisted in this case )
    console.log(d);
}
//console.log(a); //a is not defind outside the function scope

functionScope();

