// Define an object containing the towns/cities of England and their corresponding counties
const towns = {
  "London": "Greater London",
  "Manchester": "Greater Manchester",
  "Birmingham": "West Midlands",
  "Leeds": "West Yorkshire",
  "Liverpool": "Merseyside",
  "Bristol": "Bristol",
  "Sheffield": "South Yorkshire",
  "Newcastle": "Tyne and Wear",
  "Nottingham": "Nottinghamshire",
  "Leicester": "Leicestershire",
  "Brighton": "East Sussex",
  "Oxford": "Oxfordshire",
  "Cambridge": "Cambridgeshire",
  "York": "North Yorkshire",
  "Canterbury": "Kent",
  "Bath": "Somerset"
};

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 8
  });
}

// Call the initMap function when the Google Maps API is loaded
google.maps.event.addDomListener(window, 'load', initMap);

function calculatePercentage() {
  // Get the user's input
  const userInput = document.getElementById("towns").value;

  // Split the input into an array of towns/cities
  const userTowns = userInput.split(",");

  // Define variables for counting the number of towns/cities visited and the total number of towns/cities in England
  let visitedCount = 0;
  const totalCount = Object.keys(towns).length;

  // Loop through the user's towns/cities and count the ones that are in England
  for (let i = 0; i < userTowns.length; i++) {
    const town = userTowns[i].trim();
    if (towns[town]) {
      visitedCount++;
    }
  }

  // Calculate the percentage of England visited
  const percentage = Math.round((visitedCount / totalCount) * 100);

  // Display the percentage on the page
  const progressDiv = document.getElementById("progress");
  progressDiv.innerHTML = `You have visited ${percentage}% of England.`;
}

// Add event listener for the "keydown" event on the input field
const inputField = document.getElementById("towns");
inputField.addEventListener("keydown", function(event) {
  // Check if the key pressed is the "Enter" key
  if (event.key === "Enter") {
    // Prevent the default action of the "Enter" key (submitting the form)
    event.preventDefault();

    // Call the calculatePercentage() function to calculate and display the result
    calculatePercentage();
  }
});