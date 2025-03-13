document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const activityKey = urlParams.get("activity");
    const participants = urlParams.get("participants");
    const dateTime = urlParams.get("date-time");

    if (activitiesData[activityKey]) {
        const activity = activitiesData[activityKey];

        document.getElementById("activity-title").textContent = activity.title;
        document.getElementById("activity-date").textContent = dateTime;
        document.getElementById("activity-participants").textContent = participants;

        // Calculate total cost based on number of participants
        let basePrice = parseFloat(activity.price.replace(/\D/g, "")); // Extract numbers from price
        let totalPrice = basePrice * (participants ? parseInt(participants) : 1);
        document.getElementById("activity-price").textContent = `$${totalPrice}`;

        // Store data in hidden fields for confirmation.html
        document.getElementById("activity").value = activityKey;
        document.getElementById("participants").value = participants;
        document.getElementById("date-time").value = dateTime;
        document.getElementById("total-price").value = totalPrice;
    } else {
        document.getElementById("activity-title").textContent = "Activity Not Found";
        document.getElementById("activity-price").textContent = "N/A";
    }
});