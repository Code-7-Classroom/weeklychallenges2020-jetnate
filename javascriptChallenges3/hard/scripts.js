function getName(){
    return function(){
        var pii = {
            name:'Nathan',
            lastName:'Tadesse',
            ssn: '281-33-0804'
        };
     return pii.name;


    };
}

var getOneName = getName();
console.log(getOneName());