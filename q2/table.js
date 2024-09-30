const createDataTableButton = document.getElementById("createDataTableButton");

createDataTableButton.addEventListener("click", () => {
  // Retrieve the stored form data from local storage
  const formData = JSON.parse(localStorage.getItem("formData"));
  console.log(formData);

  // Create a new table element
  const table = document.createElement("table");
  table.classList.add("table"); // Add Bootstrap class for styling (optional)

  // Create table header row
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  headerRow.innerHTML = `
    <th>First Name</th>
    <th>Last Name</th>
    <th>Phone Number</th>
    <th>Email</th>
    <th>Address</th>
    <th>Education</th>
    <th>Work Experience</th>
    <th>Availability</th>
    <th>Skills & Certifications</th>
    <th>References</th>
    <th>Additional Information</th>
    <th>Consent</th>
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
    <td>
      ${formData.street}<br>
      ${formData.city}, ${formData.zip}
    </td>
    <td>
      ${formData.schoolName} - ${formData.major} - ${formData.graduationYear}<br>
    </td>
    <td>
      ${formData.companyName} - ${formData.jobTitle} - ${formData.startDate} to ${formData.endDate}<br>
      ${formData.jobResponsibilities}
    </td>
    <td>
      Start Date: ${formData.start_date}<br>
      Willingness to Relocate: ${formData.willingness_to_relocate}<br>
      Preferred Work Schedule: ${formData.preferred_work_schedule}
    </td>
    <td>
      ${formData.skills}<br>
      ${formData.certifications}
    </td>
    <td>
      ${formData.reference_name} - ${formData.reference_contact_information}<br>
      ${formData.relationship_to_applicant}
    </td>
    <td>
      ${formData.why_work_for_this_company}
    </td>
    <td>
      <input type="checkbox" disabled checked="${formData.terms_and_conditions}"> Terms and Conditions<br>
      <input type="checkbox" disabled checked="${formData.privacy_policy}"> Privacy Policy
    </td>
  `;
  tbody.appendChild(dataRow);
  table.appendChild(tbody);

  // Append the table to the document body
  document.body.appendChild(table);
});