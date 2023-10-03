function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

function closeDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display = "none";
}

document.getElementById("toggle-button").addEventListener("click", toggleDropdown);