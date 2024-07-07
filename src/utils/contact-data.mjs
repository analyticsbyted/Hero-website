// Define your API endpoint here
export const API_ENDPOINT = "YOUR_API_ENDPOINT";

// Function to handle the form submission
export const saveContactData = (inputData) => {
    // Send AJAX POST request to save contact data
    return $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data: JSON.stringify(inputData),
        contentType: "application/json; charset=utf-8",
    });
};

// Attach event listener to the save button
export const attachSaveButtonListener = () => {
    document.getElementById("save-contact").addEventListener("click", () => {
        const inputData = {
            "id": $("#id").val(),
            "name": $("#name").val(),
            "email": $("#email").val(),
            "subject": $("#subject").val(),
            "phone": $("#phone").val(),
            "message": $("#message").val()
        };
        saveContactData(inputData)
            .done((response) => {
                document.getElementById("saved").innerHTML = "Contact Data Saved";
            })
            .fail((error) => {
                alert("Error saving contact data.");
                console.log(error);
            });
    });
};
