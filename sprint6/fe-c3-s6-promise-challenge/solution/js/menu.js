//const { default: axios } = require("axios");

const menu_url="http://localhost:3000/menu";


let menuItems = [];


// Write code to fetch the complete menu data using Axios API when the web page is loaded 
// Note: As per test requirement, Order API should be running on port 3000
function fetchMenuItemsFromServer() {
  // the data fetched from server should be stored in the `menuItems` array.
    // the values of `menuItems` array should be displayed on the menu.html page
    let getPromisedata = axios.get(menu_url);
 
    getPromisedata.then((response)=>{
        //console.log(response.data);
        menuItems.push(response.data);
        //console.log(menuItems);
        return menuItems;
    })
    .then((menuItems) =>{
        //console.log(menuItems[0]);
       return findItemsByCategory();

    })
    .catch(()=>{
        console.log("Failure!!");
    })
    

}
fetchMenuItemsFromServer();
//Write code to filter the menu items from list by category
const category = document.getElementById('category');
category.addEventListener('change', function (event) {
    //findItemsByCategory(category.value);

    findItemsByCategory(event.target.value);  //event.target property returns the HTML element that triggered an event,in this case category.

});

function findItemsByCategory(category) {
    // the filtered menu items should be displayed on the menu.html page.
    const menuList = document.getElementById("table-content");
    menuList.innerHTML = '';
    if (category === "Starters") {
        //  axios.get(menu_url)
        //         .then((response)=>{
                    // console.log(response.data);
                    // menuItems.push(response.data);
                    // console.log(menuItems);
        return menuItems[0].filter((post) => post.category === category).forEach((post)=>{
            menuList.innerHTML += `<td class="col-lg-8" id="item">${post.itemName}</td>                                                 
                                    <td class="col-lg-4" id="price">${post.price}</td>`
            })
                // })
    } 
    else if(category === "Desserts") {
        //  axios.get(menu_url)
        // .then((response)=>{
            // menuItems.push(response.data);
        return menuItems[0].filter((post) => post.category === category).forEach((post)=>{
            menuList.innerHTML += `<td class="col-lg-8" id="item">${post.itemName}</td>                                                 
                                    <td class="col-lg-4" id="price">${post.price}</td>`
            })
        // })
    }
    else if(category === "Beverages"){
        return menuItems[0].filter((post) => post.category === category).forEach((post)=>{
            menuList.innerHTML += `<td class="col-lg-8" id="item">${post.itemName}</td>                                                 
                                    <td class="col-lg-4" id="price">${post.price}</td>`
            })
      
    }
    else if(category === "Main Course"){
        return menuItems[0].filter((post) => post.category === category).forEach((post)=>{
            menuList.innerHTML += `<td class="col-lg-8" id="item">${post.itemName}</td>                                                 
                                    <td class="col-lg-4" id="price">${post.price}</td>`
            })
    }
    else{
        return menuItems[0].forEach((post)=>{
            menuList.innerHTML += `<td class="col-lg-8" id="item">${post.itemName}</td>                                                 
                                    <td class="col-lg-4" id="price">${post.price}</td>`
            })
        
    }
}
// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    fetchMenuItemsFromServer
}
