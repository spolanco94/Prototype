document.addEventListener("DOMContentLoaded", function () {
    const loadMoreButton = document.getElementById("load-more");
    const hiddenActivities = document.querySelectorAll(".activity.hidden");
    let activitiesPerClick = 3;

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
});