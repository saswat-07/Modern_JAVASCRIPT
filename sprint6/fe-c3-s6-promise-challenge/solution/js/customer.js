const customer_url = "http://localhost:3001/customers";

//Write  password validation code here 
function setPasswordConfirmValidity() {
   const password = document.getElementById("custPasword");
   const confirmPassword = document.getElementById("custConfirmPassword");
   if (password.value === confirmPassword.value) {
    return "Password Matched!!";
   } else {
    return "Should match with the password";
   }
}
//Using axios POST to save the customer details 
// Note:As per test requirement, Customer API should be running on port 3001

const customerData =[];

function submitCustomerDetail(event) {
  event.preventDefault();
  const customerId = document.getElementById("custID").value;
  const customerName = document.getElementById("name").value;
  const customerPasword = document.getElementById("custPasword").value
  const confirmcustomerPassword = document.getElementById("custConfirmPassword").value;
  const emailId = document.getElementById("email").value;
  const contactNumber = document.getElementById("contact").value;
  const customerAddress = document.getElementById("address").value;

  let customer = {
    id: customerId,
    name: customerName,
    password: customerPasword,
    confirmPassword: confirmcustomerPassword,
    email: emailId,
    phone: contactNumber,
    address: customerAddress
  };
  

const postPromise = axios.post(customer_url,customer);

  return postPromise.then((response) =>{
    console.log(response.data);
    customerData.push(customer);
  
  alert(`You have successfully registered !`);

  })
  .catch(error => {
    alert(`An error occurred while saving the note: ${error}`);
  });

}
 /*
   Post successful submission to server, 
   the function should display the text `You have successfully registered !` on the page
   */

// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    setPasswordConfirmValidity,
    submitCustomerDetail
}



