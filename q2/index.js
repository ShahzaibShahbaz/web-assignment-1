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
      
        resumeUpload: document.getElementById("resumeUpload").files[0],
        coverLetter: document.getElementById("coverLetter").value,
        schoolName: document.getElementById("schoolName").value,
        major: document.getElementById("major").value,
        graduationYear: document.getElementById("graduationYear").value,
        companyName: document.getElementById("companyName").value,
        jobTitle: document.getElementById("jobTitle").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        jobResponsibilities: document.getElementById("jobResponsibilities").value,
        skills: document.getElementById("skills").value,
        certifications: document.getElementById("certifications").value,
        start_date: document.getElementById("start_date").value,
        willingness_to_relocate: document.getElementById("willingness_to_relocate").value,
        preferred_work_schedule: document.getElementById("preferred_work_schedule").value,
        reference_name: document.getElementById("reference_name").value,
        reference_contact_information: document.getElementById("reference_contact_information").value,
        relationship_to_applicant: document.getElementById("relationship_to_applicant").value,
        why_work_for_this_company: document.getElementById("why_work_for_this_company").value,
        terms_and_conditions: document.getElementById("terms_and_conditions").checked,
        privacy_policy: document.getElementById("privacy_policy").checked
      };
        

    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = 'table.html'
    
});

createTableButton.addEventListener("click", () => {
    window.location.href = "table.html";
});
