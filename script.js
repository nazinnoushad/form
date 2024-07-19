const correctPassword = 'nazal121502x'; // Correct password for viewing data

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phoneNumber').value;
    const date = document.getElementById('date').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const whatsappNumber = document.getElementById('whatsappNumber').value;

    const dataList = document.getElementById('dataList');

    const dataItem = document.createElement('div');
    dataItem.className = 'data-item';

    dataItem.innerHTML = `
        <span>${name} (${phoneNumber}) - ${email} - ${whatsappNumber} - ${date}</span>
        <button class="delete-btn" onclick="deleteData(this)">Delete</button>
    `;

    dataList.appendChild(dataItem);

    // Clear form fields
    document.getElementById('dataForm').reset();
});

document.getElementById('showDataButton').addEventListener('click', function() {
    const dataList = document.getElementById('dataList');
    const enteredPassword = prompt('Please enter the password to view the data:');

    if (enteredPassword === correctPassword) {
        if (dataList.classList.contains('hidden')) {
            dataList.classList.remove('hidden');
            this.textContent = 'Hide Data'; // Update button text
        } else {
            dataList.classList.add('hidden');
            this.textContent = 'Show Data'; // Update button text
        }
    } else {
        alert('Incorrect password. Access denied.');
    }
});

function deleteData(button) {
    const dataItem = button.parentElement;
    dataItem.remove();
}