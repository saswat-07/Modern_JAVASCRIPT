// Reuse the solution created to dynamically create order form fields developed 

//const { default: axios } = require("axios");

// in the previous sprint challenge

const order_url="http://localhost:3002/order";

let orderForm = document.getElementById("order-form");
//console.log(orderForm);

let addOrderItemButton = document.getElementById("add-order");
let orderItemsContainer = document.getElementById("order-container");
let totalAmount = document.getElementById("total-amount");


addOrderItemButton.addEventListener("click", function(event) {
  event.preventDefault();

  createOrderFields();
})



let count=0;

let orderItems = [];
function createOrderFields() {
  
  let orderItemDiv = document.createElement("form");
  orderItemDiv.classList.add('row', 'ms-3');
  //orderItemDiv.className = "order-item";

  let categoryInput=document.createElement("input");
  categoryInput.classList.add('border-0','border-bottom','border-dark','col-2','me-3');
  categoryInput.id =`category${count}`;
  categoryInput.type ="text";
  categoryInput.placeholder="Category Name";
  categoryInput.required =true;
  orderItemDiv.appendChild(categoryInput);

  let itemNameInput = document.createElement("input");
  itemNameInput.classList.add('border-0','border-bottom','border-dark','col-2','me-3');
  itemNameInput.id =`item${count}`;
  itemNameInput.type = "text";
  itemNameInput.placeholder ="Item Name";
  itemNameInput.required = true;
  orderItemDiv.appendChild(itemNameInput);

  let priceInput = document.createElement("input");
  priceInput.classList.add('border-0','border-bottom','border-dark','col-2','me-3');
  priceInput.id =`price${count}`;
  priceInput.type = "number";
  priceInput.placeholder ="Price";
  priceInput.min = "0";
  priceInput.value = "0";
  priceInput.required = true;
  orderItemDiv.appendChild(priceInput);

  let quantityInput = document.createElement("input");
  quantityInput.classList.add('border-0','border-bottom','border-dark','col-2','me-3');
  quantityInput.id =`quantity${count}`;
  quantityInput.type = "number";
  quantityInput.placeholder ="Quantity";
  quantityInput.min = "0";
  quantityInput.value = "0";
  quantityInput.required = true;
  orderItemDiv.appendChild(quantityInput);

  let orderAmountInput = document.createElement("input");
  orderAmountInput.classList.add('border-0','border-bottom','border-dark','col-2');
  orderAmountInput.id =`orderAmount${count}`;
  orderAmountInput.type = "number";
  orderAmountInput.placeholder ="Amount";
  orderAmountInput.readOnly = true;
  orderAmountInput.value = "0";
  orderItemDiv.appendChild(orderAmountInput);

  const addButton = document.createElement('button');
  addButton.textContent = 'Add';
  addButton.classList.add('btn', "btn-outline-dark", 'ms-1');
  addButton.style.display = 'inline-block';
  addButton.style.width = '100px';
  addButton.style.marginBottom = '10px';
  addButton.style.borderRadius = '50%';
  addButton.style.backgroundColor = 'rgb(227, 224, 224)';
  addButton.style.color = 'black';
  orderItemDiv.appendChild(addButton);

orderItemsContainer.appendChild(orderItemDiv);

calOrderAmount(`price${count}`,`quantity${count}`,`orderAmount${count}`);
count++;

addButton.addEventListener('click', function() {
  const price = parseInt(priceInput.value);
  const quantity = parseInt(quantityInput.value);
// orderAmountInput.value = amount;

  const order = {
    category: categoryInput.value,
    itemName: itemNameInput.value,
    price: price,
    quantity: quantity,
    amount: price*quantity
  };

  orderItems.push(order);

  calTotalBillAmount(addButton,orderItems,categoryInput,itemNameInput,priceInput,quantityInput);
//  quantityInput.readOnly = true;
//  orderAmountInput.readOnly = true;
      })  

}

function calOrderAmount(price,quantity,amount) {
  let Price =document.getElementById(price);
  let Quantity =document.getElementById(quantity);
  let Amount =document.getElementById(amount);

  Quantity.addEventListener('input',()=>{
    Amount.value = Price.value*Quantity.value;
  })
}


//let total=0;
function calTotalBillAmount(addButton,orderItems,categoryInput,itemNameInput,priceInput,quantityInput){
let total=0;
 
  
  for (let i = 0; i < orderItems.length; i++) {
    total += orderItems[i].amount;
  }
 
  totalAmount.value = total;

  categoryInput.readOnly = true;
   itemNameInput.readOnly = true;
   priceInput.readOnly = true;
   quantityInput.readOnly = true;
  addButton.disabled=true;
}

// Define function submitOrder to save the order details captured from the form 
// in json-server using Axios API
const formData=[];

function submitOrder(event) {       //either write onSubmit="submitorder(event)" in order.html or document.getElementId("id-name").addEventListener('submit',submitOrder);
    event.preventDefault();
  
    const customerName = document.getElementById("customer-name").value;
    const emailId = document.getElementById("email-id").value;
    const contactNumber = document.getElementById("contact-number").value;
    const orderDate = document.getElementById("order-date").value;
    const customerAddress = document.getElementById("customer-address").value;
    const orderId = document.getElementById("order-id").value;
  
    let form = {
      id: orderId,
      name: customerName,
      email: emailId,
      phone: contactNumber,
      date: orderDate,
      address: customerAddress,
      items: orderItems,
      totalBill: totalAmount.value
    };
    

  const postPromise = axios.post(order_url,form);

    return postPromise.then((response) =>{
      console.log(response.data);
      formData.push(form);
    
      alert(`Total amount to be paid: ${totalAmount.value}`);
    })
    .catch(error => {
      alert(`An error occurred while saving the note: ${error}`);
    });
  
}
// Note:: As per test requirement, Order API should be running on port 3002

// The function should display the text `Total amount to be paid: $<value of total amount>` 
// after the details are successfully stored at the server



// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    submitOrder
}



