var fname = document.getElementById('fname');
if (checkForNumberinName(fname) === 1){
    return alert('name contains a number.')
}

function checkForNumberinName(name){
    hasNumber = /\d/;
    return hasNumber.test(name);
}