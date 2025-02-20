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
  
      // Populate basic event details
      document.getElementById('event-title').textContent = event.name;
      document.getElementById('event-short').textContent = event.shortDescription;
      document.getElementById('event-description').textContent = event.description;
      document.getElementById('event-date').textContent = event.date;
      document.getElementById('event-time').textContent = event.time;
      document.getElementById('event-venue').textContent = event.venue;
      document.getElementById('event-fee').textContent = event.registrationFee;
      document.getElementById('event-prize').textContent = event.prize;
      document.getElementById('event-group').textContent = event.groupType;
      document.getElementById('event-type').textContent = event.eventType;
      
      // Populate image if available
      if(event.image) {
        document.getElementById('event-image').src = event.image;
      }
  
      // Populate coordinators (existing functionality)
      const facultyList = document.getElementById('faculty-coordinator');
      facultyList.innerHTML = event.facultyCoordinator.map(name => `<li>${name}</li>`).join('');
      const studentList = document.getElementById('student-coordinator');
      studentList.innerHTML = event.studentCoordinator.map(name => `<li>${name}</li>`).join('');
  
      // Populate event rules
      const rulesList = document.getElementById('event-rules');
      if(event.rules && event.rules.length) {
        rulesList.innerHTML = event.rules.map(rule => `<li>${rule}</li>`).join('');
      } else {
        rulesList.innerHTML = "<li>No rules provided.</li>";
      }
  
      // Populate contact details
      if(event.contact) {
        const facultyContact = event.contact.faculty;
        const studentContact = event.contact.student;
        document.getElementById('event-faculty-contact').textContent =
          `${facultyContact.name} | Email: ${facultyContact.email} | Phone: ${facultyContact.phone}`;
        document.getElementById('event-student-contact').textContent =
          `${studentContact.name} | Email: ${studentContact.email} | Phone: ${studentContact.phone}`;
      }
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
