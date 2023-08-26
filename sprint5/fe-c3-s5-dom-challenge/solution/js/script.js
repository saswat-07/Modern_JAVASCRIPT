// Write solution code here to dynamically add the form fields 
let orderForm = document.getElementById("order-form");
//console.log(orderForm);

let addOrderItemButton = document.getElementById("add-order");
let orderItemsContainer = document.getElementById("order-container");
let totalAmount = document.getElementById("total-amount");


addOrderItemButton.addEventListener("click", function(event) {
  event.preventDefault();

  createOrderFields();
})

// document.getElementById("order-now").addEventListener('submit',function(){

//   submitOrder();

// });

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

  // let orderAmountLabel = document.createElement("label");
  // orderAmountLabel.textContent = "Amount";
  // orderItemDiv.appendChild(orderAmountLabel);

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

  calTotalBillAmount(addButton,orderItems);
  
  // calTotalBillAmount(`orderAmount-${count}`)
  // totalAmount.value="0";

//   categoryInput.readOnly = true;
//  itemNameInput.readOnly = true;
//  priceInput.readOnly = true;
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
function calTotalBillAmount(addButton,orderItems){
let total=0;
 
  
  for (let i = 0; i < orderItems.length; i++) {
    total += orderItems[i].amount;
  }
 
  totalAmount.value = total;

  // categoryInput.readOnly = true;
  //  itemNameInput.readOnly = true;
  //  priceInput.readOnly = true;
  //  quantityInput.readOnly = true;
  //  orderAmountInput.readOnly = true;
  addButton.disabled=true;
}

// define funtion submitOrder() to save the order details on clicking the submit button

const formData=[];
function submitOrder(event) {
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
  
  formData.push(form);
  console.log(formData);

alert(`Total amount to be paid: ${totalAmount.value}`);
}


// do not delete the code given below, it is written to export the functions to be tested
module.exports = submitOrder;









// ///
// let orderForm = document.getElementById("order-form");

// orderForm.addEventListener("submit", function(event) {
//   let orderId = document.getElementById("order-id");
//   let orderDate = document.getElementById("order-date");
//   let customerName = document.getElementById("customer-name");
//   let emailId = document.getElementById("email-id");
//   let contactNumber = document.getElementById("contact-number");
//   let customerAddress = document.getElementById("customer-address");



//   if (!orderDate.checkValidity()) {
//     document.getElementById("order-date-error").textContent = "Order Date is required and should be in correct date format";
//     event.preventDefault();
//   }

//   if (!emailId.checkValidity()) {
//     document.getElementById("email-id-error").textContent = "Email ID is required and should be of type email";
//     event.preventDefault();
//   }


// });

// function createOrderItemFields() {
//   const orderItemDiv = document.createElement('div');
//   orderItemDiv.classList.add('row', 'ms-3');

  
//   const categoryInput = createInputField('text', 'Category Name');
//   categoryInput.style.display = 'inline-block';
//   categoryInput.style.width = '150px';
//   categoryInput.style.marginRight = '10px';
//   categoryInput.style.marginBottom = '10px';
  
//   const priceInput = createInputField('number', 'Price');

  
//   const quantityInput = createInputField('number', 'Quantity');
  
//   const amountInput = createInputField('number', 'Amount', true);

//   const addButton = document.createElement('button');

    

//   orderItemDiv.appendChild(categoryInput);
//   orderItemDiv.appendChild(itemNameInput);
//   orderItemDiv.appendChild(priceInput);
//   orderItemDiv.appendChild(quantityInput);
//   orderItemDiv.appendChild(amountInput);
//   orderItemDiv.appendChild(addButton);

//   orderContainer.appendChild(orderItemDiv);
// }





