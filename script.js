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

function addExpense(){

let amount=parseFloat(document.getElementById("amount").value)
let paidById=parseInt(document.getElementById("paidBy").value)

let paidBy=users.find(u=>u.id===paidById)

let split=amount/users.length

users.forEach(user=>{

if(user.id!==paidById){

if(!paidBy.balances[user.name]) 
paidBy.balances[user.name]=0
if(!user.balances[paidBy.name]) 
user.balances[paidBy.name]=0

paidBy.balances[user.name]+=split
user.balances[paidBy.name]-=split

}

})

showBalances()
}

function showBalances(){

let container=document.getElementById("balances")
container.innerHTML=""

users.forEach(user=>{

for(let person in user.balances){

let amount=user.balances[person]

if(amount>0){

let p=document.createElement("p")
p.innerText=person+" owes "+user.name+" "+amount.toFixed(2)

container.appendChild(p)

}

}

})

}
