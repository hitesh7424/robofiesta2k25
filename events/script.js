// script.js

// Global variable to hold events data
let eventsData = {};

// Function to fetch events JSON and display events
async function loadEvents() {
  try {
    const response = await fetch('events.json');
    eventsData = await response.json();
    displayEvents("all");
  } catch (error) {
    console.error("Error loading events:", error);
  }
}

// Function to display events based on filter category
function displayEvents(filterCategory) {
  const container = document.getElementById('events-container');
  container.innerHTML = ''; // Clear container

  // Iterate over eventsData keys
  Object.keys(eventsData).forEach(key => {
    const event = eventsData[key];

    // Filter by category if needed (case-insensitive)
    if (filterCategory !== "all") {
      if (event.category.toLowerCase() !== filterCategory.toLowerCase()) {
        return;
      }
    }

    // Create event card element
    const card = document.createElement('div');
    card.className = 'event-card';
    card.style.backgroundImage = `url(${event.image})`;

    card.innerHTML = `
      <div class="event-overlay">
        <h2 class="event-name">${event.name}</h2>
        <p class="event-short-description">${event.shortDescription}</p>
        <a href="event-details.html?event=${key}" class="view-btn">View</a>
      </div>
    `;

    container.appendChild(card);
  });
}

// Filter events when filter button is clicked
function filterEvents(category) {
  displayEvents(category);
}

// Load events on page load
document.addEventListener('DOMContentLoaded', loadEvents);
