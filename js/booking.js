document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const activityKey = urlParams.get("activity");

    if (activitiesData[activityKey]) {
        const activity = activitiesData[activityKey];

        // Update the Activity Summary
        document.getElementById("activity-title").textContent = activity.title;
        document.getElementById("activity-duration").textContent = activity.duration;
        document.getElementById("activity-location").textContent = activity.location;

        // Store activity in hidden input so it gets passed to payment
        document.getElementById("activity").value = activityKey;
    } else {
        // Handle case where activity is not found
        document.getElementById("activity-title").textContent = "Activity Not Found";
    }
});