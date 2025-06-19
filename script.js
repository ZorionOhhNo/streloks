function toggleSpoiler() {
    const spoiler = document.getElementById("spoiler-version");
    const noSpoiler = document.getElementById("no-spoiler-version");
    const button = document.querySelector(".toggle-button");

    if (spoiler.style.display === "none") {
        spoiler.style.display = "block";
        noSpoiler.style.display = "none";
        button.textContent = "Parādīt bez spoileri";
    } else {
        spoiler.style.display = "none";
        noSpoiler.style.display = "block";
        button.textContent = "Parādīt pilnu versiju";
    }
}