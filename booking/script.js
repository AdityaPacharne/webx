const API = 'http://localhost:3000';

function loadDoctors() {
  fetch(`${API}/doctors`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('doctorList');
      list.innerHTML = '';  // Clear the list before adding new items
      data.forEach(d => {
        const li = document.createElement('li');
        li.textContent = `${d.name} (${d.specialty}) | ID: ${d._id}`;
        list.appendChild(li);
      });
    });
}

function loadAppointments() {
  fetch(`${API}/appointments`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("appointmentList");
      list.innerHTML = "";
      data.forEach(a => {
        const li = document.createElement("li");
        li.textContent = `Patient: ${a.patientName}, Doctor ID: ${a.doctorId}, Date: ${a.date}, ID: ${a._id}`;
        list.appendChild(li);
      });
    });
}

function bookAppointment() {
  const doctorId = document.getElementById('doctorId').value;
  const patientName = document.getElementById('patientName').value;
  const date = document.getElementById('date').value;

  fetch(`${API}/book`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ doctorId, patientName, date }),
  })
    .then(res => res.text())
    .then(alert);
}

function cancelAppointment() {
  const id = document.getElementById('appointmentId').value;

  fetch(`${API}/cancel/${id}`, { method: 'DELETE' })
    .then(res => res.text())
    .then(alert);
}
