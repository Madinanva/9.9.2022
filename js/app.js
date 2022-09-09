var age = prompt("Please enter your age")
if(age>18){
    alert('Welcome!');
}
else{
    alert('You have no acces!')
}

if(confirm()==true){
    alert("You press Ok");
}
else{
    alert("You press Cancel");
}

function Click() {
    if(document.body.style.backgroundColor === 'black'){
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
    else{
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }
}

function Show() {
    var input = document.getElementById('inp').value;
    var text = document.getElementById('gname');
    text.innerHTML = input;

    time=input.slice(-3)
    if(time[0]==1) {
        document.body.style.backgroundColor = 'yellow'
    }
    
    else if(time[0]==2) {
        document.body.style.backgroundColor = 'red'
    }
    
    else if(time[0]==2) {
        document.body.style.backgroundColor = 'black'
    }
    
    else{
        alert('There is no group like that')
    }
}
