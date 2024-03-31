  document.getElementById('userInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    displayResults(); 
  });

  function displayResults() {
    const formData = new FormData(document.getElementById('userInfoForm'));
    const fullName = formData.get('firstName') + ' ' + formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const dob = formData.get('dob');
    const gender = formData.get('gender');
    const address = formData.get('address');

    const newCard = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${fullName}</h5>
          <p class="card-text"><strong>Email:</strong> ${email}</p>
          <p class="card-text"><strong>Phone:</strong> ${phone}</p>
          <p class="card-text"><strong>Date of Birth:</strong> ${dob}</p>
          <p class="card-text"><strong>Gender:</strong> ${gender}</p>
          <p class="card-text"><strong>Address:</strong> ${address}</p>
        </div>
      </div>
    `;

    const cardContainer = document.getElementById('cardContainer');

    const oldCards = cardContainer.innerHTML;

    cardContainer.innerHTML = newCard + oldCards;
    
    clearForm();
  }

  function clearForm() {
    document.getElementById('userInfoForm').reset();
  }

  function addNewUser() {
    clearForm();
  }