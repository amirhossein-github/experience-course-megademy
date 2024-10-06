import * as ls from "./ls-manager.js";

// Ensure that the content of the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Show all data
    show()

    // Add event listener for the form submission
    document.getElementById('inputForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent default form submission

        // Get values from input fields
        const name = document.getElementById('name').value;
        const number = document.getElementById('number').value;
        const score = document.getElementById('score').value;

        // Check if any fields are empty
        if (!name || !number || !score) {
            alert("Please fill out all fields.");
            return;
        }

        // Generate a unique ID based on the current time
        const id = Date.now();

        // LS: add new data to local-storage
        ls.add({
            name: name,
            number: number,
            score: score,
            id: id
        })

        // Show all data in html content
        show()
    });
});

function show(){
    // 1) LS: get add data from local-storage '[,,,]'
    const data = ls.get()

    // -) Validation: if there is no data to show
    if (data.length <= 0){
        document.querySelector('#output tbody').innerHTML = ''
    }

    // 2)
    for (let i = 0; i < data.length; i++) {
        // Create a new row for the table
        const newRow = document.createElement('tr');

        // Add cells with the input values
        newRow.innerHTML = `
            <td>${data[i].name}</td>
            <td>${data[i].number}</td>
            <td>${data[i].score}</td>
            <td>${data[i].id}</td>
        `;

        // Append the new row to the table body
        const outputTableBody = document.querySelector('#output tbody');
        outputTableBody.appendChild(newRow);  // Add the new row to the table
    }

    // Clear the form after submission
    document.getElementById('inputForm').reset();
}