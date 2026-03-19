let users = []

function addUser(){
let name = document.getElementById("name").value
let email = document.getElementById("email").value

let user = {
id: Date.now(),
name: name,
email: email,
balances: {}}

users.push(user)

updateUserUI()}

function updateUserUI(){

let userList = document.getElementById("userList")
let paidBy = document.getElementById("paidBy")
let settleUser1 = document.getElementById("settleUser1")
let settleUser2 = document.getElementById("settleUser2")

userList.innerHTML=""
paidBy.innerHTML=""
settleUser1.innerHTML=""
settleUser2.innerHTML=""

users.forEach(user=>{

let li=document.createElement("li")
li.innerText=user.name
userList.appendChild(li)

let option=document.createElement("option")
option.value=user.id
option.text=user.name
paidBy.appendChild(option)

let option1=document.createElement("option")
option1.value=user.id
option1.text=user.name
settleUser1.appendChild(option1)

let option2=document.createElement("option")
option2.value=user.id
option2.text=user.name
settleUser2.appendChild(option2)

})

}

