// Activities Details
const activitiesData = {
    snorkeling: {
        title: "Snorkeling in Yellow Leaf Bay",
        image: "img/subtle-cinematics-O5Fr1BZ-aR4-unsplash.jpg",
        description: "Explore Taniti’s vibrant marine life with a guided snorkeling tour.",
        duration: "2 hours",
        price: "$150 per person",
        location: "Yellow Leaf Bay, Taniti"
    },
    rainforest: {
        title: "Rainforest Zip-Lining",
        image: "img/kyle-cleveland-VDPFEyIrAn0-unsplash.jpg",
        description: "Experience an adrenaline rush as you zip-line through the lush rainforest canopy.",
        duration: "3 hours",
        price: "$75 per person",
        location: "Taniti Rainforest"
    },
    fishing: {
        title: "Chartered Fishing Tour",
        image: "../img/greysen-johnson-cZVzzFadTMc-unsplash.jpg",
        description: "Join expert fishermen for an unforgettable deep-sea fishing experience.",
        duration: "5 hours",
        price: "$100 per group",
        location: "Taniti Marina"
    },
    volcano: {
        title: "Volcano Hiking Tour",
        image: "img/toby-elliott-Nqdx6-LW4VE-unsplash.jpg",
        description: "Take a guided trek up Taniti’s active volcano and witness breathtaking views.",
        duration: "6 hours",
        price: "$200 per person",
        location: "Volcano National Park"
    },
    helicopter: {
        title: "Helicopter Island Tour",
        image: "img/spencer-watson-LMq1gYdygxo-unsplash.jpg",
        description: "Soar above Taniti and experience breathtaking aerial views of the island.",
        duration: "1 hour",
        price: "$75 per person",
        location: "Taniti Heliport"
    },
    pub: {
        title: "Local Pubs & Microbrewery",
        image: "img/dovlet-hojayev-rfOFRwKHtJM-unsplash.jpg",
        description: "Relax and enjoy locally brewed craft beers at Taniti’s renowned microbrewery.",
        duration: "Flexible",
        price: "Varies",
        location: "Downtown Taniti"
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const activityKey = urlParams.get("activity");

    if (activitiesData[activityKey]) {
        const activity = activitiesData[activityKey];

        document.getElementById("activity-title").textContent = activity.title;
        document.getElementById("activity-image").src = activity.image;
        document.getElementById("activity-description").textContent = activity.description;
        document.getElementById("activity-duration").textContent = activity.duration;
        document.getElementById("activity-price").textContent = activity.price;
        document.getElementById("activity-location").textContent = activity.location;
    } else {
        document.getElementById("activity-title").textContent = "Activity Not Found";
        document.getElementById("activity-description").textContent = "Sorry, the selected activity does not exist.";
        document.getElementById("activity-info").innerHTML = "<li>No details available.</li>";
    }
});