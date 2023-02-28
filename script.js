
const balance=document.querySelector(".balance")
const moneyPlus=document.querySelector(".money-plus")
const moneyMinus=document.querySelector(".money-minus")

const Mylist=document.querySelector(".list")

const amount=document.getElementById("amound")
const nameofTransaction=document.getElementById("text")


const add=document.querySelector(".btn")

let incomeSum=0;
let expenseSum=0;

add.addEventListener('click',function(event){
    event.preventDefault();
    let nameText=nameofTransaction.value;
    let amountText=amount.value;

   
    

    if(nameText==""||amountText==""){
        alert('please enter all the inputs')
    }
    else{
           if(parseInt(amountText)<0){
            
           const li=document.createElement('li');
           li.classList.add('minus')

           Mylist.appendChild(li)
           li.innerHTML = nameText

           const div=document.createElement('div')
           li.appendChild(div)   
           const span=document.createElement('span')
           span.innerHTML=amountText 
           div.appendChild(span) 
           const btn=document.createElement('button')
           btn.classList.add("delete-btn")
           btn.innerHTML=" X "
           div.appendChild(btn)


           expenseSum+=parseInt(amountText)
           moneyMinus.textContent=expenseSum



            btn.addEventListener('click',function(event){
                event.preventDefault();
                Mylist.removeChild(li)
                expenseSum-=parseInt(amountText)
                moneyMinus.textContent=expenseSum
                balance.textContent="$ "+(incomeSum+expenseSum)
           })

           }
           else{
                const li=document.createElement('li');
                li.classList.add('plus')
     
                Mylist.appendChild(li)
                li.innerHTML = nameText
     
                const div=document.createElement('div')
                li.appendChild(div)   
                const span=document.createElement('span')
                span.innerHTML=amountText 
                div.appendChild(span) 
                const btn=document.createElement('button')
                btn.classList.add("delete-btn")
                btn.innerHTML=" X "
                div.appendChild(btn)
     
                incomeSum+=parseInt(amountText)
                moneyPlus.textContent=incomeSum

                 btn.addEventListener('click',function(event){
                     event.preventDefault();
                     Mylist.removeChild(li)
                     incomeSum-=parseInt(amountText)
                     moneyPlus.textContent=incomeSum
                     balance.textContent="$ "+(incomeSum+expenseSum)
                })
           }
            balance.textContent="$ "+(incomeSum+expenseSum)
          


           amount.value=""
           nameofTransaction.value=""





    }

})