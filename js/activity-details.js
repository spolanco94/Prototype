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

        document.getElementById("book-now-btn").href = `booking.html?activity=${activityKey}`;
    } else {
        document.getElementById("activity-title").textContent = "Activity Not Found";
        document.getElementById("activity-description").textContent = "Sorry, the selected activity does not exist.";
        document.getElementById("activity-info").innerHTML = "<li>No details available.</li>";
    }
});