function swap() {
    let a = document.getElementById('vone').value;
    let b = document.getElementById('vtwo').value;
    let c;
    document.getElementById("before").innerHTML = 'Before Swap: Variable 1 ='+a+' , Variable 2 ='+b;

    c=b;
    b=a;
    a=c;

    // or

    // a = a*b;
    // b = a/b;
    // a = a/b;

    //or

    // a = a + b;
    // b = a - b;
    // a = a - b;
    document.getElementById("after").innerHTML = 'Before Swap: Variable 1 ='+ a +' , Variable 2 ='+ b;


    // FOR in the input changing the values

    // document.getElementById('vone').value=a;
    // document.getElementById('vtwo').value=b;

}