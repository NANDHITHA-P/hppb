const createButton = document.getElementById("createButton");
const createForm = document.getElementById("createForm");

// Event listener for the create button
createButton.addEventListener("click", function() {
    // Show the form when the create button is clicked
    createForm.style.display = "block";
});

// Event listener for form submission
createForm.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Here you can handle the form submission, such as sending the data to a server
    // You can access form fields using their IDs, for example:
    const houseNumber = document.getElementById("houseNumber").value;
    const location = document.getElementById("location").value;
    const ownership = document.getElementById("ownership").value;
    const architecturalStyle = document.getElementById("architecturalStyle").value;
    const yearOfConstruction = document.getElementById("yearOfConstruction").value;
    const photo = document.getElementById("photo").files[0]; // Assuming only one file is selected
    const publicRecordFiles = document.getElementById("publicRecord").files; // Get all selected files

    // Example: Log form data to the console
    console.log("House Number:", houseNumber);
    console.log("Location:", location);
    console.log("Ownership:", ownership);
    console.log("Architectural Style:", architecturalStyle);
    console.log("Year of Construction:", yearOfConstruction);
    console.log("Photo:", photo);
    console.log("Public Record:", publicRecord);

    // After handling the form submission, you can optionally reset the form and hide it
    createForm.reset();
    createForm.style.display = "none";
});


// Event listener for previous button
const previousButton = document.getElementById("previousButton");
previousButton.addEventListener("click", function() {
    // Handle previous button click event here
});

// Event listener for next button
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", function() {
    // Handle next button click event here
});
