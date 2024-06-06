const btn = document.getElementById('btn');
btn.onclick = function () {
   const name =prompt ('Enter full name');
   document.getElementById('name').innerText =name;

}

//Variables
const pi =3.142;
let username ='sarahdarko' ;
let age= 101;
let present = false;

//Objects
const person={
    username:'sarahdarko' ,
    age:101,
    present:false,
    child: {
        name:'Mickey Mouse',
        friend: {
            name:'Biggie',
        }
    }
}
console.log(person.username);
person.age =105;
console.log(person);


// Arrays
const bottle1={
    size:'large',
    color:'yellow'
  }
  
  const bottle2={
    size:'small',
    color:'blue'
  }
  
  
  
  const bottles = [bottle1,bottle2];
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  
  bottles[1].size;
  
  
   const date =new Date();
  date.getMonth();
  
//   const age=18
  if(age>=18){
    'You are true'  
  }else{
  'You are false'  
  }
  
  //for loop
  for(let i=0;i < bottles.length; i++){
    //console.log('We did it!',i)
    console.log(bottles[i]);
   
  }







