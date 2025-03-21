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
      document.getElementById('event-rules').textContent = event.rules;
      document.getElementById('event-group').textContent = event.groupType;

      document.getElementById('event-type').textContent = event.eventType;
      
      // Populate image if available
      if(event.image) {
        document.getElementById('event-image').src = event.image;
      }
  
      // Populate coordinators with telephone hyperlinks
      const facultyList = document.getElementById('faculty-coordinator');
      facultyList.innerHTML = event.facultyCoordinator.map(coordinator => 
        `<li>${coordinator[0]} | <a id="hellos" href="tel:+91${coordinator[1]}">${coordinator[1]}</a></li>`
      ).join('');
      const studentList = document.getElementById('student-coordinator');
      studentList.innerHTML = event.studentCoordinator.map(coordinator => 
        `<li>${coordinator[0]} | <a id="hellos" href="tel:+91${coordinator[1]}" >${coordinator[1]}</a></li>`
      ).join('');
  

  
      // Populate contact details
      if(event.contact) {
        const facultyContact = event.contact.faculty;
        const studentContact = event.contact.student;
        document.getElementById('event-faculty-contact').textContent =
          `${facultyContact.name} | Phone: <a class="contactNumber" href="tel:${facultyContact.phone}" >${facultyContact.phone}</a>`;
        document.getElementById('event-student-contact').textContent =
          `${studentContact.name} | Phone:  <a class="contactNumber" href="tel:${studentContact.phone}" >${studentContact.phone}</a>`;
      }

       // Populate rules


       var rulesContainer = document.getElementById("event-rules");
       rulesContainer.innerHTML = ""; // Clear previous list content
       
       if (event.rules.length === 0) {
         rulesContainer.textContent = "No rules specified for this event.";
       } else {
         for (var i = 0; i < event.rules.length; i++) {
           var node = document.createElement("li");
           var textnode = document.createTextNode(event.rules[i]);
           node.appendChild(textnode);
           rulesContainer.appendChild(node);
         }
       }
       
      

      // Attach event listener to registration buttons
      document.querySelectorAll('.register-btn').forEach(btn => {
        btn.addEventListener('click', function() {
         window.location.href = event.registrationLink;
      });
      });

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
