// ----- Existing Scripts (Custom Cursor, Loader, Navbar, Particles) -----
 
// Custom Cursor
// const cursor = document.querySelector('.custom-cursor');
// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.clientX + 'px';
//   cursor.style.top = e.clientY + 'px';
// });
// document.addEventListener('mousedown', () => {
//   cursor.classList.add('active');
// });
// document.addEventListener('mouseup', () => {
//   cursor.classList.remove('active');
// });

// Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  // Wait 2 seconds before starting fade-out
  setTimeout(() => {
    // Fade out and move the loader upward
    loader.style.opacity = "0";
    loader.style.transform = "translate(-50%, -150%)"; // moves it upward from center
    loader.style.background = "none"
    // After the transition ends, hide the loader completely
    setTimeout(() => {
      loader.style.display = "none";
    }, 500); // Transition duration (0.5s)
  }, 1500);
});







// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 1000 }
    },
    color: {
      value: ['#c0c0c0', '#a9a9a9', '#808080'] // Metallic shades
    },
    shape: {
      type: 'circle' // Square shape to mimic drone bodies
    },
    opacity: {
      value: 0.9,
      random: false
    },
    size: {
      value: 6,
      random: true,
      anim: { enable: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#a9a9a9',
      opacity: 0.4,
      width: 1.8
    },
    move: {
      enable: true,
      speed: 3, // Moderate speed to simulate drone flight
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});








// ----- Fancy Neon Countdown Timer -----
// Get countdown element references
const cdDays = document.getElementById("cd-days");
const cdHours = document.getElementById("cd-hours");
const cdMinutes = document.getElementById("cd-minutes");
const cdSeconds = document.getElementById("cd-seconds");

// Set event date to March 21, 2025, 00:00:00
const countdownDate = new Date("March 21, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  
  // If the countdown is finished, show a message
  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "<span>Event Started!</span>";
    clearInterval(countdownInterval);
    return;
  }
  
  // Calculate time components
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Update DOM with padded values
  cdDays.textContent = days < 10 ? "0" + days : days;
  cdHours.textContent = hours < 10 ? "0" + hours : hours;
  cdMinutes.textContent = minutes < 10 ? "0" + minutes : minutes;
  cdSeconds.textContent = seconds < 10 ? "0" + seconds : seconds;
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


// Animate About Cards on Scroll
document.addEventListener("DOMContentLoaded", function() {
  renderEvents();
  const aboutCards = document.querySelector('.about-cards');
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  if (aboutCards) {
    observer.observe(aboutCards);
  }
});


// JSON Data for Events (use the provided JSON object)
const eventData = {
  "general_information": {
    "event_title": "RoboFiesta 2K25",
    "organized_by": "Karpaga Vinayaga College of Engineering and Technology, Department of Robotics and Automation",
    "event_dates": "28.03.2025 – 29.03.2025",
    "catalogue_release_date": "February 14, 2025"
  },
  "events": [
    {
      "name": "PathPilot Challenge (Line Following Robot)",
      "description": "Design and build a robot to follow a dynamic track featuring curves, sharp turns, and minor obstacles.",
      "requirements": [
        "Use robust optical (IR) sensors for line detection.",
        "Adhere to size and power limitations (per Technoxian FLF guidelines).",
        "Bring spare batteries and basic repair tools."
      ],
      "rules": [
        "Follow all specifications and penalty clauses as detailed in the Technoxian FLF Rulebook.",
        "No mid-run modifications allowed."
      ],
      "pricing": "Rs. 150 per team",
      "event_coordinators": [
        "GOKULRAJ K",
        "RAJESH K",
        "ASHVATH K",
        "GURU AKASH C",
        "SANTHIYA V",
        "PRAKASH M"
      ],
      "faculty_coordinator": "Mr.S.THARMALINGAM",
      "image": "line-following-robot.jpg",
      "category": "technical",
      id: 3,
    title: "Line Following Robot",
    category: "technical",
    date: "30-03-2025",
    time: "10:00 AM - 4:00 PM",
    eventType: "Offline",
    location: "Robotics Arena",
    description: "An autonomous robot navigates a track using sensors to follow a black line with precision.",
    fullDescription: "Build an autonomous robot that follows a black line precisely using IR sensors and AI-based navigation techniques.",
    trending: true,
    image: "line-following-robot.jpg",
    isBookmarked: false,
    link: "event-details.html?id=1",
    registerLink: "https://forms.gle/9fENE8tCXaUry3pP7",
    price: 400,
    prizePool: 15000,
    eventParticipationType: "Group"
    },
    {
      "name": "Sumo Titans (Sumo Bot)",
      "description": "Compete in a head-to-head arena battle where robots push opponents out of the ring. Emphasis is on strength, balance, and strategic maneuvering.",
      "requirements": [
        "Robots must meet preset size and weight limits and include safe, reinforced exteriors.",
        "Use durable materials with non-damaging impact features."
      ],
      "rules": [
        "Adhere to safety and competition rules as per the Technoxian Sumo guidelines.",
        "No external aids or unsanctioned modifications during matches."
      ],
      "pricing": "Rs. 200 per team",
      "event_coordinators": [
        "PRASANTH S",
        "MOHAN E",
        "REYASHINI K M",
        "PRAVEENKUMAR J",
        "DHANABALAN T",
        "SRIDHAR S"
      ],
      "faculty_coordinator": "Ms.M.VENNILA",
      "image": "sumo-expo.webp",
      "category": "technical",
      id: 9,
    title: "Sumo Bot",
    category: "technical",
    date: "30-03-2025",
    time: "10:00 AM - 4:00 PM",
    eventType: "Offline",
    location: "Battle Zone",
    description: "Two robots face off in a sumo ring, attempting to push each other out using strategic maneuvers.",
    fullDescription: "Compete with your sumo bot to push your opponent out of the ring using intelligent design and tactics.",
    trending: true,
    image: "sumo-expo.webp",
    isBookmarked: false,
    link: "event-details.html?id=2",
    registerLink: "https://forms.gle/9fENE8tCXaUry3pP7",
    price: 400,
    prizePool: 15000,
    eventParticipationType: "Group"
    },
    {
      "name": "Circuit Labyrinth (Robo Maze)",
      "description": "Guide your robot through a challenging maze with obstacles and checkpoints. Precision navigation, sensor integration, and quick problem-solving are key.",
      "requirements": [
        "Build an agile, compact robot with sensors to detect boundaries and obstacles.",
        "Carry backup power and essential tools."
      ],
      "rules": [
        "Follow the maze navigation protocols as specified in the Technoxian Maze Challenge handbook."
      ],
      "pricing": "Rs. 150 per team",
      "event_coordinators": [
        "VIJAYAKUMAR.V",
        "ADHEESHWAR M",
        "JERON S",
        "SHAHENI S",
        "PERUMAL M",
        "WILSON J"
      ],
      "faculty_coordinator": "Mr.J.SRINIVAS",
      "image": "robo-maze.webp",
      "category": "technical",
      id: 6,
      title: "Robo Maze",
      category: "technical",
      date: "30-03-2025",
      time: "10:00 AM - 4:00 PM",
      eventType: "Offline",
      location: "Tech Lab",
      description: "A robotic challenge where bots autonomously navigate a complex maze to find the fastest exit route.",
      fullDescription: "Program your robot to autonomously navigate a complex maze using AI and pathfinding algorithms.",
      trending: false,
      image: "robo-maze.webp",
      isBookmarked: false,
      link: "event-details.html?id=3",
      registerLink: "https://forms.gle/9fENE8tCXaUry3pP7",
      price: 450,
      prizePool: 10000,
      eventParticipationType: "Group"
    },
    {
      "name": "Cyber Soccer Clash (Robo Soccer)",
      "description": "Engage in a high-energy, team-based soccer match where robots compete by displaying agility, strategic programming, and cooperative gameplay.",
      "requirements": [
        "Robots should be optimized for swift movement and effective ball control.",
        "Teams may need to bring standardized balls or remote-control setups."
      ],
      "rules": [
        "Follow the Technoxian Robo Soccer guidelines regarding field dimensions, scoring, and safety."
      ],
      "pricing": "Rs. 250 per team",
      "event_coordinators": [
        "AKASH R",
        "PREMKUMAR J",
        "JANANI K",
        "HARINI K",
        "VEDHAGIRI S",
        "PRATHAP A"
      ],
      "faculty_coordinator": "Ms.M.VENNILA",
      "image": "robo-soccer.webp",
      "category": "technical",
      id: 8,
      title: "Robo Soccer",
      category: "technical",
      date: "30-03-2025",
      time: "11:00 AM - 5:00 PM",
      eventType: "Offline",
      location: "Sports Arena",
      description: "Autonomous robots compete in a thrilling game of soccer, showcasing teamwork and AI-driven strategies.",
      fullDescription: "Build and program a team of robots to play soccer using AI strategies and autonomous movement.",
      trending: true,
      image: "robo-soccer.webp",
      isBookmarked: false,
      link: "event-details.html?id=4",
      registerLink: "https://forms.gle/9fENE8tCXaUry3pP7",
      price: 600,
      prizePool: 25000,
      eventParticipationType: "Group"
    },
    {
      "name": "Velocity Vanguard (Robo Race)",
      "description": "Race through an obstacle-rich track in a fast-paced competition that rewards precision engineering and rapid decision-making.",
      "requirements": [
        "Robots must meet strict size and weight specifications.",
        "Ensure a reliable power source and bring spare parts for minor repairs."
      ],
      "rules": [
        "Adhere to all race procedures and safety protocols as detailed in the Technoxian Robo Race Rulebook."
      ],
      "pricing": "Rs. 300 per team",
      "event_coordinators": [
        "MUTHUSELVAM D",
        "SHARVIN V",
        "MUGESH P",
        "KISHORE .V",
        "MANIGANDAN E",
        "PRAVEEN B"
      ],
      "faculty_coordinator": "Ms.S.PRIYADHARSHINI",
      "image": "robo-race.webp",
      "category": "technical",
      id: 7,
      title: "Robo Race",
      category: "technical",
      date: "30-03-2025",
      time: "10:00 AM - 3:00 PM",
      eventType: "Offline",
      location: "Race Track",
      description: "High-speed autonomous robots compete on a winding track, testing speed, control, and AI navigation.",
      fullDescription: "Design and build high-speed robots that can autonomously race and complete a challenging track.",
      trending: false,
      image: "robo-race.webp",
      isBookmarked: false,
      link: "event-details.html?id=5",
      registerLink: "https://forms.gle/9fENE8tCXaUry3pP7",
      price: 500,
      prizePool: 18000,
      eventParticipationType: "Group"
    },
    {
      "name": "Ideathon (Paper Presentation)",
      "description": "Present innovative ideas and research in robotics and automation through a structured paper presentation (using slides or posters).",
      "requirements": [
        "Prepare a clear, well-organized presentation.",
        "Stick to strict time limits and be ready for a Q&A session."
      ],
      "rules": [
        "Follow the presentation criteria and evaluation metrics as per the Technoxian Paper Presentation guidelines."
      ],
      "pricing": "Rs. 50 per individual",
      "event_coordinators": [
        "SHANKARA NARAYANAN S",
        "MONISHA K",
        "RAMYA R",
        "HENSON SAMRAT G C",
        "GOWTHAM A",
        "JIBIN B MATHEW"
      ],
      "faculty_coordinator": "Ms.CH.PRIYANKA",
      "image": "paper-presentation.jpg",
      "category": "technical",
      id: 5,
      title: "Paper Presentation",
      category: "technical",
      date: "30-03-2025",
      time: "11:00 AM - 4:00 PM",
      eventType: "Offline",
      location: "Conference Hall",
      description: "Participants showcase their research and innovative ideas in front of industry experts and judges.",
      fullDescription: "Submit your research papers and present your innovative ideas to an esteemed panel of judges and professionals.",
      trending: false,
      image: "paper-presentation.jpg",
      isBookmarked: false,
      link: "event-details.html?id=6",
      registerLink: "https://forms.gle/9fENE8tCXaUry3pP7",
      price: 250,
      prizePool: 8000,
      eventParticipationType: "Individual"

    },
    {
      "name": "ROSolution Workshop (Workshop 1 - ROS)",
      "description": "A hands-on workshop introducing the Robot Operating System (ROS) for programming and controlling robots.",
      "requirements": [
        "Bring a laptop with ROS pre-installed.",
        "Basic programming knowledge is recommended."
      ],
      "rules": [
        "Ensure punctuality, active participation, and adherence to lab safety guidelines."
      ],
      "pricing": "Rs. 200 per participant",
      "event_coordinators": [
        "KARTHICK P & MADHAN E",
        "SHEGUVARAN I",
        "MOKESH S",
        "RAMACHANDIRAN M",
        "PERUMAL M",
        "ARUL SELVAM A"
      ],
      "faculty_coordinator": "Mr.S.THARMALINGAM",
      "image": "workshop-ros.jpg",
      "category": "workshop",
      id: 10,
      title: "Workshop 1 - ROS",
      category: "workshop",
      date: "30-03-2025",
      time: "9:30 AM - 1:30 PM",
      eventType: "Workshop",
      location: "Lab 1",
      description: "A hands-on workshop on Robot Operating System (ROS), covering autonomous robotics development.",
      fullDescription: "Learn about ROS and how to develop autonomous robots using one of the most powerful frameworks available today.",
      trending: true,
      image: "workshop-ros.jpg",
      isBookmarked: false,
      link: "event-details.html?id=7",
      registerLink: "https://forms.gle/9fENE8tCXaUry3pP7",
      price: 300,
      prizePool: 0,
      eventParticipationType: "Individual"

    },
    {
      "name": "LogicCraft Workshop (Workshop 2 - PLC)",
      "description": "Learn about Programmable Logic Controllers (PLC) and their practical applications in automation through hands-on experiments.",
      "requirements": [
        "Basic knowledge of electrical circuits is beneficial.",
        "Bring a laptop and necessary note-taking materials."
      ],
      "rules": [
        "Follow all provided workshop protocols and lab safety instructions."
      ],
      "pricing": "Rs. 200 per participant",
      "event_coordinators": [
        "MADHAN E",
        "RANJITH S",
        "VARSHAA R V",
        "PRANAV ANANDKUMAR",
        "MONIKA M",
        "SACHIN S"
      ],
      "faculty_coordinator": "Ms.CH.PRIYANKA",
      "image": "workshop-plc.jpg",
      "category": "workshop",
      id: 11,
      title: "Workshop 2 - PLC",
      category: "workshop",
      date: "30-03-2025",
      time: "10:00 AM - 2:00 PM",
      eventType: "Workshop",
      location: "Lab 2",
      description: "Learn industrial automation with Programmable Logic Controllers (PLCs) through real-world applications.",
      fullDescription: "Get hands-on experience with PLCs and learn industrial automation techniques used in modern manufacturing.",
      trending: false,
      image: "workshop-plc.jpg",
      isBookmarked: false,
      link: "event-details.html?id=8",
      registerLink: "https://forms.gle/9fENE8tCXaUry3pP7",
      price: 350,
      prizePool: 0,
      eventParticipationType: "Individual"
    },
    {
      "name": "TechTonic HackFest (Hack Fest)",
      "description": "An intensive hackathon where teams collaborate to rapidly prototype innovative robotics solutions.",
      "requirements": [
        "Teams of 3–5 members are recommended.",
        "Each participant should bring a laptop, charger, and any required hardware components.",
        "A working prototype or conceptual framework is expected."
      ],
      "rules": [
        "Follow the Technoxian Hack Fest guidelines regarding judging criteria, submission deadlines, and intellectual property."
      ],
      "pricing": "Rs. 150 per team",
      "event_coordinators": [
        "JOHN PETER D & GURU AKASH C",
        "MOHAN E & SHARVIN V",
        "KABILAN S",
        "KIRUTHIKA S",
        "PRABHA SHREE C",
        "ARUL SELVAM A",
        "JAIPRAKASH P",
        "JAYASRI S",
        "SANTHAKUMAR E",
        "YOGASANTHIYA R",
        "RAHUL R",
        "RAMALINGAM J"
      ],
      "faculty_coordinator": "Ms.CH.PRIYANKA",
      "image": "hack-fest.jpg",
      "category": "technical",
      id: 2,
      title: "Hack Fest",
      category: "technical",
      date: "30-03-2025",
      time: "9:00 AM - 3:00 PM",
      eventType: "Offline",
      location: "Innovation Hub",
      description: "A 24-hour coding marathon where developers solve real-world tech challenges and build innovative solutions.",
      fullDescription: "Join a 24-hour hackathon to showcase your programming skills, solve real-world challenges, and win exciting prizes.",
      trending: true,
      image: "hack-fest.jpg",
      isBookmarked: false,
      link: "event-details.html?id=9",
      registerLink: "https://forms.gle/9fENE8tCXaUry3pP7",
      price: 500,
      prizePool: 20000,
      eventParticipationType: "Group"
    },
    {
      "name": "InnoVision Expo (Project Expo)",
      "description": "Showcase your cutting-edge projects in robotics and automation with interactive displays, live demos, and engaging presentations.",
      "requirements": [
        "Ensure your project is fully set up for demonstration (posters, live demos, etc.).",
        "Advance registration is required."
      ],
      "rules": [
        "Evaluation will be based on innovation, presentation clarity, and practical impact per Technoxian guidelines."
      ],
      "pricing": "Rs. 100 per project/team",
      "event_coordinators": [
        "VIGNESH K",
        "POTHIGAIVASAN. V",
        "DIVYA A",
        "ARAVINTH",
        "RANJAN S",
        "RAGAVENDHIRAN M",
        "AZEEMA.M",
        "VISHVA A"
      ],
      "faculty_coordinator": "Mr.S.THARMALINGAM",
      "image": "project-expo.jpg",
      "category": "technical",
      id: 4,
      title: "Project Expo",
      category: "technical",
      date: "30-03-2025",
      time: "10:00 AM - 6:00 PM",
      eventType: "Offline",
      location: "Exhibition Hall",
      description: "A showcase of groundbreaking projects in robotics, AI, and engineering by students and professionals.",
      fullDescription: "Present your innovative projects to experts, industry leaders, and a vast audience in this grand project exhibition.",
      trending: true,
      image: "project-expo.jpg",
      isBookmarked: false,
      link: "event-details.html?id=10",
      registerLink: "https://forms.gle/9fENE8tCXaUry3pP7",
      price: 300,
      prizePool: 12000,
      eventParticipationType: "Group"
    },
    {
      "name": "AeroVista Expo (Drone Expo)",
      "description": "Exhibit your drone technology with a focus on design, control, and practical application in unmanned aerial systems.",
      "requirements": [
        "Bring your drone, corresponding controller, and recommended safety equipment (e.g., propeller guards).",
        "Prepare a dedicated demonstration setup."
      ],
      "rules": [
        "Strictly adhere to drone specifications, safety protocols, and exhibition guidelines."
      ],
      "pricing": "Rs. 250 per team",
      "event_coordinators": [
        "JOHN PETER & RANJITH S",
        "HITESH KUMAR GAURAV",
        "BHARATH V",
        "KEERTHIHARAN S",
        "MOHANA VEL S",
        "HARISHWARAN"
      ],
      "faculty_coordinator": "Ms.S.PRIYADHARSHINI",
      "image": "drone-expo.webp",
      "category": "technical",
      id: 1,
      title: "Drone Expo",
      category: "technical",
      date: "30-03-2025",
      time: "10:00 AM - 5:00 PM",          // Added event time
      eventType: "Offline",               // Added event type
      location: "Outdoor Arena",
      description: "A thrilling showcase of cutting-edge drone technology, featuring live demonstrations and aerial stunts.",
      fullDescription: "Experience live demonstrations of the latest drone technology, aerial stunts, and innovations in UAV systems.",
      trending: false,
      image: "drone-expo.webp",
      isBookmarked: false,
      link: "event-details.html?id=11",
      registerLink: "https://forms.gle/9fENE8tCXaUry3pP7",
      price: 200,
      prizePool: 5000,
      eventParticipationType: "Individual",
      coordinatorName: "1"

    }
  ]
};

// Render Event Cards with Filter Functionality
function renderEvents(filter = "all") {
  const eventsGrid = document.getElementById("events-grid");
  eventsGrid.innerHTML = ""; // Clear the grid before rendering

  eventData.events.forEach((event) => {
    // Check if the event should be rendered based on the filter
    if (filter === "all" || event.category.toLowerCase() === filter) {
      const card = document.createElement("div");
      card.className = "event-card floating";
      card.innerHTML = `
        <img src="images/events/${event.image}" alt="${event.name}" onerror="this.onerror=null;this.src='https://placehold.in/300x200@2x.png/dark';">
        <h3>${event.name}</h3>
        <p>${event.description}</p>
        <p><strong>Faculty Coordinator:</strong> ${event.faculty_coordinator}</p>
        <div class="learn-more-text">Click to know more</div>
      `;

      // Add click event to open the modal with event details
      card.addEventListener("click", () => {
        openEventModal(event);
      });

      eventsGrid.appendChild(card);
    }
  });
}


// Function to open the event modal with detailed information
function openEventModal(eventData) {
  // Disable background scrolling
  document.body.style.overflow = "hidden";

  // Create the modal container
  const modal = document.createElement("div");
  modal.classList.add("event-modal");

  // Build modal content using eventData
  modal.innerHTML = `
    <div class="modal-background" style="background-image: url('images/events/${eventData.image}');"></div>
    <div class="modal-foreground">
      <span class="modal-close">&times;</span>
      <div class="modal-image-container">
        <img class="modal-image" src="images/events/${eventData.image}" alt="${eventData.name}" onerror="this.onerror=null; this.src='https://placehold.in/300x200@2x.png/dark';">
      </div>
      <h1 class="modal-title">${eventData.name}</h1>
      <div class="modal-register">
        <a class="register-button" href="${eventData.registerLink}" target="_blank">Register | ₹${eventData.price}</a>
        <div class="price"><strong>Prize Pool:</strong> ₹${eventData.prizePool}</div>
      </div>
      <div class="modal-details-container">
        <div class="modal-details-grid">
          <div class="detail-item"><strong>Participation:</strong> <br />${eventData.participationType}</div>
          <div class="detail-item"><strong>Date:</strong> <br />${eventData.date}</div>
          <div class="detail-item"><strong>Event Type:</strong> <br />${eventData.eventType}</div>
          <div class="detail-item"><strong>Time:</strong> <br />${eventData.time}</div>
        </div>
        <p class="modal-description"><strong>Description:</strong><br>${eventData.fullDescription}</p>
        <p class="modal-description"><strong>Faculty Coordinator:</strong><br>${eventData.facultyCoordinator}</p>
        <p class="modal-description"><strong>Student Coordinators:</strong><br>${eventData.studentCoordinators}</p>
      </div>
    </div>
  `;

  // Append the modal to the document body
  document.body.appendChild(modal);

  // Function to close the modal and restore scrolling
  function closeModal() {
    document.body.removeChild(modal);
    document.body.style.overflow = "auto";
  }

  // Close modal when clicking the close button
  modal.querySelector('.modal-close').addEventListener('click', closeModal);

  // Close modal when clicking outside the modal foreground
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}



// Initialize events and set up filter button listeners when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  // Render all events by default
  renderEvents();
  
  // Get all filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  
  filterButtons.forEach((button) => {
    button.addEventListener("click", function() {
      // Get the selected category from the button's data attribute
      const selectedCategory = this.getAttribute("data-category"); // Use "data-category"
      
      // Optional: Highlight the active button
      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
      
      // Re-render events based on the selected category
      renderEvents(selectedCategory);
    });
  });
});

const filters = [
  { name: "All", value: "all" },
  { name: "Technical", value: "technical" },
  { name: "Workshop", value: "workshop" },
  { name: "Non Technical", value: "nontechnical" },
];

const filterContainer = document.querySelector(".filter-tabs");

// Generate filter buttons dynamically
filters.forEach((filter, index) => {
  const button = document.createElement("button");
  button.classList.add("filter-btn");
  if (index === 0) button.classList.add("active"); // Make 'All' active by default
  button.setAttribute("data-filter", filter.value);
  button.setAttribute("data-translate-value", `${index * 100}%`);
  button.textContent = filter.name;

  const listItem = document.createElement("li");
  listItem.appendChild(button);
  // filterContainer.appendChild(listItem);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      menuToggle.classList.toggle("active");
      // Debug: log click event
      console.log("Hamburger clicked");
    });
  } else {
    console.error("Menu toggle or nav links not found");
  }
});

// =================================================== MODAL POP UP FUNCTION ==================================================
function openEventModal(eventData) {
  // Disable background scrolling
  document.body.style.overflow = "hidden";
  
  // Create the modal container
  const modal = document.createElement("div");
  modal.classList.add("event-modal");
  
  // Build modal content using eventData from JSON
  modal.innerHTML = `
    <div class="modal-background" style="background-image: url('images/events/${eventData.image}');"></div>
    <div class="modal-foreground">
      <span class="modal-close">&times;</span>
      <div class="modal-image-container">
        <img class="modal-image" src="images/events/${eventData.image}" alt="${eventData.title}" onerror="this.onerror=null; this.src='images/placeholder.jpg';">
      </div>
      <h1 class="modal-title">${eventData.title}</h1>
      <div class="modal-register">
        <a class="register-button" href="${eventData.registerLink}" target="_blank">Register | ₹${eventData.price}</a>
        <div class="price"><strong>Prize Pool:</strong> ₹${eventData.prizePool}</div>
      </div>
      <div class="modal-details-container">
        <div class="modal-details-grid">
          <div class="detail-item"><strong>Participation:</strong> <br />${eventData.eventParticipationType}</div>
          <div class="detail-item"><strong>Date:</strong> <br />${eventData.date}</div>
          <div class="detail-item"><strong>Event Type:</strong> <br />${eventData.eventType}</div>
          <div class="detail-item"><strong>Time:</strong> <br />${eventData.time}</div>
        </div>
        <p class="modal-description"><strong>Description:</strong><br>${eventData.fullDescription}</p>
      </div>
    </div>
  `;
  
  // Append the modal to the document body
  document.body.appendChild(modal);
  
  // Function to close the modal and restore scrolling
  function closeModal() {
    document.body.removeChild(modal);
    document.body.style.overflow = "auto";
  }
  
  // Close modal when clicking the close button
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  
  // Close modal when clicking outside the modal foreground
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}