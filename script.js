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

// Initialize Particle.js (existing configuration)
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: '#8B5CF6' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#8B5CF6',
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' }
    }
  }
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
  setupScrollReveal();
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
      "image": "line-following-robot.jpg"
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
      "image": "sumo-expo.webp"
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
      "image": "robo-maze.webp"
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
      "image": "robo-soccer.webp"
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
      "image": "robo-race.webp"
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
      "image": "paper-presentation.jpg"
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
      "image": "workshop-ros.jpg"
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
      "image": "workshop-plc.jpg"
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
      "image": "hack-fest.jpg"
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
      "image": "project-expo.jpg"
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
      "image": "drone-expo.webp"
    }
  ]
};

// Render Event Cards
function renderEvents() {
  const eventsGrid = document.getElementById("events-grid");
  eventData.events.forEach((event) => {
    const card = document.createElement("div");
    card.className = "event-card floating";
    card.innerHTML = `
      <img src="images/events/${event.image}" alt="${event.name}" onerror="this.onerror=null;this.src='https://placehold.in/300x200@2x.png/dark';">
      <h3>${event.name}</h3>
      <p>${event.description}</p>
      <p><strong>Faculty Coordinator:</strong> ${event.faculty_coordinator}</p>
      <div class="learn-more-text">Click to know more</div>
    `;
    
    // When clicked, navigate to a separate event details page (full details will be displayed there)
    card.addEventListener("click", () => {
      window.location.href = "event-details.html?event=" + encodeURIComponent(event.name);
    });
    
    eventsGrid.appendChild(card);
  });
}