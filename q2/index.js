const personalInfoForm = document.getElementById('personalinfo');
const createTableButton = document.getElementById("createTable");

personalInfoForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    // const fnameInput = document.getElementById('fname').value;
    // const lnameInput = document.getElementById('lname').value;
    // const phoneNum = document.getElementById('phoneNum').value;
    // const email = document.getElementById('email').value;
    // const street = document.getElementById('street').value;
    // const city = document.getElementById('city').value;
    // const zip = document.getElementById('zip').value;
        const formData = {
            fname: document.getElementById("fname").value,
            lname: document.getElementById("lname").value,
            phoneNum: document.getElementById("phoneNum").value,   
        
            email: document.getElementById("email").value,
            street: document.getElementById("street").value,
            city: document.getElementById("city").value,   
        
            zip: document.getElementById("zip").value,   
        };
        

    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = 'table.html'
    
});

createTableButton.addEventListener("click", () => {
    window.location.href = "table.html";
});
