var duplicateArray = (function () {

    var copyArray = function (oldArray) {
        return oldArray.slice();
    };

    return {
    	copyArray: copyArray
    }

}());

var array1 = [1, 2, 3, 4, 5];
var array2 = duplicateArray.copyArray(array1);

array1.push(6);

var answer = document.getElementsByClassName('answer');

answer[0].innerHTML = 'array2 is a duplicate of array1: ';
answer[0].innerHTML += (array1 !== array2) ? '<b>true</b>' : '<b>false</b>';

console.log('array1: ', array1, 'array2: ', array2);