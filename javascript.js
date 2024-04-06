const form = document.getElementById('crud-form');
const tableBody = document.getElementById('table-body');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${email}</td>
    <td>${address}</td>
    <td>${phone}</td>
    <td>
      <button onclick="editRow(this)">Editar</button>
      <button onclick="deleteRow(this)">Eliminar</button>
    </td>
  `;
  tableBody.appendChild(newRow);

  form.reset();
});

function deleteRow(button) {
  const row = button.closest('tr');
  row.parentNode.removeChild(row);
}

function editRow(button) {
  const row = button.closest('tr');
  const cells = row.querySelectorAll('td');

  const name = cells[0].textContent;
  const age = cells[1].textContent;
  const email = cells[2].textContent;
  const address = cells[3].textContent;
  const phone = cells[4].textContent;

  document.getElementById('name').value = name;
  document.getElementById('age').value = age;
  document.getElementById('email').value = email;
  document.getElementById('address').value = address;
  document.getElementById('phone').value = phone;

  deleteRow(button);
}
