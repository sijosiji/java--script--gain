

// .find() method:
    var myarray = [ 'hello, world!', 2, 3, true, 5, null, 38 ];
    var myvalue = myarray.find(function(element) {return element >4;} );
    console.log ( myvalue);//returns 5. only gives the first element

    // find is helpful for checking if an elemenet exists in an array!
    var ismystringinside = myarray.find( function(element){return element==="hello","world";});
    console.log( ismystringinside);  // we would get the matching element

    var ismystringinsde = myarray.find(function (element){return element=== 'goodbye, everyone :(';'});
    console.log ( ismystringinside);

    var findanindex = myarray.findIndex(function (element){return element==2; } );
    console.log( findanindex);

    var pairing =myarray.entries();
    console.log(pairing); // returms an iterator.
    console.log(pairing.next().value);// we can keep bumbing to the next item,getting a valur array to lets us know whats inside!
    console.log(pairing.next().value);
    console.log(pairing.next().value);
    console.log(pairing.next().value);
    console.log(pairing.next().value);
    console.log(pairing.next().value);
    console.log(pairing.next().value);

    var fromArray = Array.from('ABCDEFGHIJKLMNOPQRS');
    Console.LOG(fromarray);
    var fromarray2 = array.from('hello,world!');
    console.log(fromarray2);

    var filetered = myarray.filter(function(elemenet){return element>4;});
    console.log(filtered);

    var reduceresult = myarray.reduce( function (accumulator,currentval) {return accumulator + currentval;});
    console.log( reduceresult);
    console.log([1,2,3,4,].reduce(function(a,v){return a +v;}));

    var x= 3;
    let y =7;
    const z = 36;

    y =13;
    console.log(y);

    for (let mynewvar =0; myvar <10; myvar++){
        console.log( 'for loop iteration...');
    }

    console.log( 'mynewvar='+mynewvar);
    }

    const myobj = {
        name: 'jacob',
        age: 18
    }
    myobj.name='jacob';
    myobj.hobbies =[];
    myobj.hobbies.push( 'mountain climbing');
    console.log( myobj);

    function myfunction(a,b) { return number (a) + Number (B);
        
    }
console.log (myfunction (3,7));

myfunction =(a,b)=> number(a) + number(b);
console.log ( myfunction (3,8));

// bigger function
myOtherFunction =(a,b) =>{
    const myanswer = number (a) + Number (b);
    return myanswer;
}

console.log( myotherfunction(34,6));
