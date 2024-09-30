const createDataTableButton = document.getElementById("createDataTableButton");

createDataTableButton.addEventListener("click", () => {
    // Retrieve the stored form data from local storage
    const formData = JSON.parse(localStorage.getItem("formData"));
    console.log(formData)
    // Create a new table element
    const table = document.createElement("table");

    // Create table header row
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");   

    headerRow.innerHTML = `
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Street</th>
        <th>City</th>
        <th>Zip</th>
        `;
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body row
    const tbody = document.createElement("tbody");
    const dataRow = document.createElement("tr");
    dataRow.innerHTML = `
        <td>${formData.fname}</td>
        <td>${formData.lname}</td>
        <td>${formData.phoneNum}</td>
        <td>${formData.email}</td>
        <td>${formData.street}</td>
        <td>${formData.city}</td>
        <td>${formData.zip}</td>
        `;
    tbody.appendChild(dataRow);
    table.appendChild(tbody);

    // Append the table to the document body
    document.body.appendChild(table);
});