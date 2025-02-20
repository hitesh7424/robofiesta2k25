// event-details.js

// Function to get query parameter by name
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  async function loadEventDetails() {
    const eventKey = getQueryParam('event');
    if (!eventKey) {
      window.location.href = "index.html";
      return;
    }
  
    try {
      const response = await fetch('events.json');
      const eventsData = await response.json();
      const event = eventsData[eventKey.toLowerCase()];
      if (!event) {
        window.location.href = "index.html";
        return;
      }
  
      // Populate the event details
      document.getElementById('event-title').textContent = event.name;
      document.getElementById('event-description').textContent = event.description;
      document.getElementById('event-date').textContent = event.date;
      document.getElementById('event-time').textContent = event.time;
      document.getElementById('event-venue').textContent = event.venue;
      document.getElementById('event-fee').textContent = event.registrationFee;
      document.getElementById('event-prize').textContent = event.prize;
      document.getElementById('event-group').textContent = event.groupType;
      document.getElementById('event-type').textContent = event.eventType;
  
      // Populate coordinators as list items
      const facultyList = document.getElementById('faculty-coordinator');
      facultyList.innerHTML = event.facultyCoordinator.map(name => `<li>${name}</li>`).join('');
      const studentList = document.getElementById('student-coordinator');
      studentList.innerHTML = event.studentCoordinator.map(name => `<li>${name}</li>`).join('');
    } catch (error) {
      console.error("Error loading event details:", error);
      window.location.href = "index.html";
    }
  }
  
  // Function for back button
  function goBack() {
    window.location.href = "index.html";
  }
  
  document.addEventListener('DOMContentLoaded', loadEventDetails);
  