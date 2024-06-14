const submitBtn = document.getElementById('submit');
const updateBtn = document.getElementById('update');

// submit button to hide
const hideSubmitBtn = document.getElementById('submit');
// imgsection
const showImg = document.getElementById('imgsection');

// get data from local storage if empty then initialize empty array
let arr = JSON.parse(localStorage.getItem('data')) || [];
let currentEditIndex = null;

console.log(arr);

// Event listener to submit form data
submitBtn.addEventListener('click', () => {
  const getTitle = document.getElementById('title').value;
  const getDescription = document.getElementById('description').value;
  const getImage = document.getElementById('img');
  const imageFile = getImage.files[0];

  if (!getTitle || !getDescription || !imageFile) {
    alert('All field values are required!');
    return;
  }

  const reader = new FileReader();
  reader.onloadend = function () {
    const imageBase64 = reader.result;

    let obj = {
      title: getTitle,
      description: getDescription,
      image: imageBase64,
    };

    if (currentEditIndex !== null) {
      arr[currentEditIndex] = obj;
    } else {
      arr.push(obj);
    }
    // arr.push(obj);

    localStorage.setItem('data', JSON.stringify(arr));

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('img').value = '';

    showData();
  };
  reader.readAsDataURL(imageFile);
});

// Function to display data from the array to the table
function showData() {
  const showTable = document.getElementById('table');
  if (arr.length === 0) {
    showTable.style.display = 'none';
  } else {
    showTable.style.display = 'block';
  }
  // row.innerHTML = '';
  arr.forEach((element, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${element.title}</td>
      <td>${element.description}</td>
      <td><img src="${element.image}" alt="Image" width="70" height="70"></td>
      <td>
        <button onclick="editRow(${index})">Edit</button>
        <button onclick="deleteRow(${index})">Delete</button>
      </td>
    `;
    showTable.appendChild(row);
  });
}

// Edit functionality
function editRow(index) {
  const showUpdateForm = document.getElementById('update');
  showUpdateForm.style.display = 'block';
  //hide submit button
  hideSubmitBtn.style.display = 'none';

  const element = arr[index];
  document.getElementById('title').value = element.title;
  document.getElementById('description').value = element.description;
  showImg.style.display = 'block';
  showImg.innerHTML = `
   <img src="${element.image}" alt="" />
  `;
  currentEditIndex = index;
}

// Update functionality
updateBtn.addEventListener('click', () => {
  const getTitle = document.getElementById('title').value;
  const getDescription = document.getElementById('description').value;
  const getImage = document.getElementById('img');
  const imageFile = getImage.files[0];

  if (!getTitle || !getDescription || !imageFile) {
    alert('All field values are required!');
    return;
  }

  if (imageFile) {
    const reader = new FileReader();
    reader.onloadend = function () {
      const imageBase64 = reader.result;

      arr[currentEditIndex] = {
        title: getTitle,
        description: getDescription,
        image: imageBase64,
      };

      localStorage.setItem('data', JSON.stringify(arr));

      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
      document.getElementById('img').value = '';

      const showUpdateForm = document.getElementById('update');
      showUpdateForm.style.display = 'none';
      //show submit btn
      hideSubmitBtn.style.display = 'block';
      //hide imgsection
      showImg.style.display = 'none';
      currentEditIndex = null; // Reset the current edit index
    };
    reader.readAsDataURL(imageFile);
  } else {
    arr[currentEditIndex] = {
      title: getTitle,
      description: getDescription,
      image: arr[currentEditIndex].image, // Keep the existing image if not changed
    };

    localStorage.setItem('data', JSON.stringify(arr));

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('img').value = '';

    const showUpdateForm = document.getElementById('update');
    showUpdateForm.style.display = 'none';
    //show submit btn
    hideSubmitBtn.style.display = 'block';
    //hide imgsection
    showImg.style.display = 'none';
    currentEditIndex = null; // Reset the current edit index
  }
  location.reload();
});

// Delete functionality
function deleteRow(index) {
  arr.splice(index, 1);
  localStorage.setItem('data', JSON.stringify(arr));
  location.reload();
}

// Display data on page load
showData();
