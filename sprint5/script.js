let user=[];

function addUser(event){
    event.preventDefault();
    let emailData=document.getElementById('email').value;
    let pswdData=document.getElementById('password').value;
    createCard(emailData,pswdData);
    const userObj={
        "email":emailData,
        "password":pswdData
    }
    user.push(userObj);
    console.log(user);
    alert("data added succesfully")

}

function createCard(emailData,pswdData){

    const mainContent=document.getElementById('mainContent')
    let content=`<div id="mainCard">
    <div id="emailDiv">${emailData}</div>
    <div id="passDiv">${pswdData}</div>
    
    </div>`;

    mainContent.innerHTML += content;
}