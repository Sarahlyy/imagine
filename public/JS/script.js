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




  // Functions

// Defining Functions

function login(username,password){
  // Validate username and password
  if(!username|| !password){
    return'Username or password not provided';
  }
  // Verify username and password
  if(username=='Sarah'&& password =='1234'){
    return'User is logged in';
  }
  else{
    return 'Invalid username or password';
  }
}

// Invoking a Function
login('Sarah' ,'1234');

//  Basic Arithmetic Operations
11+12;
1+0.5;
43-12;
18/6
45/5
45/7;
5*3;
60%5
45-24
Math.round(18/5);
Math.random()*1000;
Math.max(34,56,45);
2*(3+4)-5/2
'2'+'2'
Number('2')+2
Number('a')+2


// Strings in Javascript
// Concatenation

const firstname ='Sarah';
const lastname='Darko';
const middlename='Nshira';

firstname +' ' +middlename+ ' '
  +lastname;

//Template Literal
`${firstname} ${middlename} ${lastname}`

let fullName="Sarah Darko"
fullName.length

for(let i=0; i<=fullName.length; i++){
  console.log(i)

}

fullName.length
fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(8)
fullName.slice(7,16)
fullName.split("")
fullName.replace("Darko", "bills")
fullName.indexOf('bil')


//string conversion
Number('3.243')
parseInt('3.243')
parseFloat('3.243')
let amount =18000
console.log(`GhS${amount}`)
amount.toString()




// //write a function that will add a participant to our google claasroom

const participants =[];
function addParticipant(email){ 
  //check if email was provided
  // if(email==undefined || email ==null) this is longhand of the if(!email)
  if (!email){
    return'No email provided';
  }
  //check if email is valid
  if(!email.includes('@')){
    return 'Invalid email provided';
  }
  //Add email to participants
  participants.push(email);
return'Participant added';
  }
addParticipant('mickeymond@yahoo.com');
addParticipant('mickeymond@outlook.com')

addParticipant();
participants;

//Arrays in JavaScript
// const users=[
//   {
//     username:'mickeymond',
//     password:'1234',
//     email:'mickeymond@yahoo.com'
//   },
//     {
//     username:'mickeymond201',
//     password:'12345',
//     email:'mickeymond@outlook.com'
//   },
// ];












// Write a function that will take a user with firstname,lastname and return fullname

//  function fullName(){
//    return 'Sarah Darko';
//  }
// fullName();

// step 2 the question is looking for a user hence the parameter is user amd the user has properties of firstname and lastname
// fullname();
// step 3 now we define the user
// answer 1
function fullName(user){
  // return user.firstname + ' '+user.lastname;//j`${user.firstname} ${user.lastname}`
 return {
   ...user,
   fullName:`${user.firstname} ${user.lastname}`
 };
}
const user={
 firstname:'Michael',
 lastname:'Hammond'
}
fullName(user);

//Array map
const users=[
 {firstname:'Michael',lastname:'Hammond'},
 {firstname:'Elon',lastname:'Musk'},
 {firstname:'Barry',lastname:'Allen'},
 {firstname:'Oliver',lastname:'Queen'},
 {firstname:'Will',lastname:'Smith'}
]


users.map(fullName);

// function square(number){
//   return number*number;

// }
//  square(3)

// Square of numbers
function square(number){
 return number**2;
}
square(4);
const numbers=[9,8,7,6];
numbers.map(square);

//Array filter
function isEven(number){
 return number % 2===0;
}
isEven(9);

numbers.filter(isEven);




//write a function that will allow a user to reset their password

// const user ={
//   email:"mickeymond@yahoo.com",
//   password:'1234'
// }

  
function resetPassword(email,newPassword){
  //check if email and new password was provided
  if(!email|| !newPassword){
    return "Email or password not provided";
  }
  
  // check if provided email is correct
  if (email === user.email){
//Update Password with new one
  user.password = newPassword;
 return "Password reset successful";
}
  
if(email !==user.email) {
  return "Invalid email";
 }
}  
 user;
 resetPassword("mickeymond@yahoo.com"); 
user;
  
  




// //you have been given an array of students with some of them marked as absent and others marked as present.Write a function that returns the total number of students present

const students =[
  
  {id:1,present:true},
  {id:2,present:true},
  {id:3 ,present:false},  
  {id:4 ,present:true},
  {id:5 ,present:false},
  ]
    
  
  
  function studentsPresent(students){
  let total =0;
    for(let i=0; i< students.length; i++){
      if(students[i].present ===false){
        total ++;
      }
    }
      return total;
    }
  
  studentsPresent(students);
  
  //Classes in JavaScript
  class Laptop{
    
    constructor(brand,color){
      this.brand =brand;
      this.color=color;
    }
  }
  
  const laptop1=new Laptop('Dell','black');
  const laptop2 =new Laptop('HP','silver');
  
  
  laptop1.brand;
  laptop2.brand;
  
