document.addEventListener("DOMContentLoaded", function () {
    const loadMoreButton = document.getElementById("load-more");
    const hiddenActivities = document.querySelectorAll(".activity.hidden");
    let activitiesPerClick = 2;

    // Load more activities button
    if(loadMoreButton) {
        loadMoreButton.addEventListener("click", function () {
            let count = 0;

            hiddenActivities.forEach(activity => {
                if (count < activitiesPerClick && activity.classList.contains("hidden")) {
                    activity.classList.remove("hidden");
                    count++;
                }
            });

            if(document.querySelectorAll(".activity.hidden").length === 0) {
                loadMoreButton.style.display = "none";
            }
        });
    }

    // Download map button
    const downloadButton = document.getElementById("download-map");
    if (downloadButton) {
        downloadButton.addEventListener("click", function () {
            alert("Your offline map is downloading! (Photo by Andrew Stutesman on Unsplash)");
        });
    }

    // Activities Filtering
    const categoryFilter = document.getElementById("category");
    const priceFilter = document.getElementById("price-range");
    const durationFilter = document.getElementById("duration");
    const activities = document.querySelectorAll(".activity");

    // Reset filters
    categoryFilter.value = "all";
    priceFilter.value = "all";
    durationFilter.value = "all";

    function filterActivities() {
        const selectedCategory = categoryFilter.value;
        const selectedPrice = priceFilter.value;
        const selectedDuration = durationFilter.value;

        activities.forEach(activity => {
            const activityCategory = activity.getAttribute("data-category").split(",");
            const activityPrice = activity.getAttribute("data-price").split(",");
            const activityDuration = activity.getAttribute("data-duration");

            // Check if the activity matches all selected filters
            const categoryMatch = selectedCategory === "all" || activityCategory.includes(selectedCategory);
            const priceMatch = selectedPrice === "all" || activityPrice.includes(selectedPrice);
            const durationMatch = selectedDuration === "all" || activityDuration === selectedDuration;

            if (categoryMatch && priceMatch && durationMatch) {
                activity.style.display = "block";
            } else {
                activity.style.display = "none";
            }
        });
    }

    // Attach event listeners to each filter dropdown
    categoryFilter.addEventListener("change", filterActivities);
    priceFilter.addEventListener("change", filterActivities);
    durationFilter.addEventListener("change", filterActivities);

});