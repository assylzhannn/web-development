alert(1 && null && 2);//null

//The answer: 1, and then undefined.
alert( alert(1) && alert(2) );


//3.
alert( null || 2 && 3 || 4 );