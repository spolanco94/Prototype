document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("activity-title").textContent = sessionStorage.getItem("activityName") || "Unknown Activity";
    document.getElementById("activity-date").textContent = sessionStorage.getItem("activityDate") || "N/A";
    document.getElementById("activity-participants").textContent = sessionStorage.getItem("activityParticipants") || "1";
    document.getElementById("activity-price").textContent = sessionStorage.getItem("activityTotalCost") || "$0";

    const bookingRef = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("booking-reference").textContent = `#${bookingRef}`;
});