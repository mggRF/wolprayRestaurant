

export function arrayIgual(propArray, array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (propArray.length !== array.length)
        return false;

    for (var i = 0, l = propArray.length; i < l; i++) {
        // Check if we have nested arrays
        if (propArray[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!propArray[i].equals(array[i]))
                return false;
        }
        else if (propArray[i] !== array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}

export function objetoIgual(propObj, object2) {
    //For the first loop, we only check for types
    for (let propName in propObj) {
        //Check instance type
        if (typeof propObj[propName] !== typeof object2[propName]) {
            //Different types => not equal
            return false;
        }
    }
    //Now a deeper check using other objects property names
    for (let propName in object2) {
        //We must check instances anyway, there may be a property that only exists in object2
        //I wonder, if remembering the checked values from the first loop would be faster or not 
        if (typeof propObj[propName] !== typeof object2[propName]) {
            //Different types => not equal
            return false;
        }
        //Now the detail check and recursion

        //This returns the script back to the array comparing
        if (propObj[propName] instanceof Array && object2[propName] instanceof Array) {
            // recurse into the nested arrays
            if (!propObj[propName].compare(object2[propName]))
                return false;
        }
        else if (propObj[propName] instanceof Object && object2[propName] instanceof Object) {
            // recurse into the nested arrays
            if (!arrayIgual(propObj[propName], object2[propName]))
                return false;
        }
        else if (propObj[propName] !== object2[propName]) {
            return false;
        }
    }
    return true
}

//  function showTests() {
//     alert("Inicio del trabajo");
//     var data = "";
//     data += "({a:1, foo:\"bar\", numberOfTheBeast: 666}).equals({a:1, foo:\"bar\", numberOfTheBeast: 666})";
//     data += " - ";
//     data += ({a:1, foo:"bar", numberOfTheBeast: 666}).equals({a:1, foo:"bar", numberOfTheBeast: 666})?"true":"false";
//     window.print(data);
//     window.print("Fin del trabajo");
//  }
//  showTests() 





