// JavaScript to change header background on scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// Function to toggle the dropdown content
function toggleDropdown(event) {
  event.preventDefault();
  // var parentListItem = event.target.closest('li'); // Find the closest parent <li>
  var dropdownContent = document.querySelector(".dropdown-menu-card"); // Find the associated dropdown content

  // Toggle the visibility of the dropdown content
  // if (dropdownContent.style.display === 'block') {
  //     dropdownContent.style.display = 'none';
  // } else {
  //     dropdownContent.style.display = 'block';
  // }

  if (dropdownContent.style.opacity === "0") {
    dropdownContent.style.opacity = "1";
    dropdownContent.style.height = "auto";
    dropdownContent.style.padding = "20px";
  } else {
    dropdownContent.style.opacity = "0";
    dropdownContent.style.height = "0";
    dropdownContent.style.padding = "0";
  }
}

// Attach click event listeners to all dropdown links
var dropdownLinks = document.querySelectorAll(".secondary-menu-link");
dropdownLinks.forEach(function (link) {
  console.log('link', link)
  link.addEventListener("click", toggleDropdown);
});

// Global click event listener to hide dropdowns when clicking outside
window.addEventListener("click", function (event) {
  if (!event.target.classList.contains("dropdown")) {
    var dropdownContents = document.querySelectorAll(".dropdown-menu-card");
    dropdownContents.forEach(function (content) {
    //   content.style.display = "none";
      content.style.opacity = "0";
      content.style.height = "0";
      content.style.padding = "0";
    });
  }


  
  var search = document.querySelector(".search");
  var searchInput = document.querySelector(".search-input");
  
  // if (!event.target.classList.contains("search-btn")) {
  //   var dropdownContents = document.querySelectorAll(".search");
  //   searchInput.style.display = "none";
  //   search.style.width = "0%";
  // }

  
});

var searchBtn = document.getElementById("search-btn");
var crossBtn = document.querySelector(".cross-btn");

function toggleSearch(e) {
  e.preventDefault();
  var search = document.querySelector(".search");
  var searchInput = document.querySelector(".search-input");
  var crossBtn = document.querySelector(".cross-btn");
  if (searchInput.style.display === "none") {
    searchInput.style.display = "block";
    search.style.width = "93%";
    crossBtn.style.display = 'block'

  } 
  else {
    searchInput.style.display = "none";
    search.style.width = "0%";
    crossBtn.style.display = 'none'
  }
}
searchBtn.addEventListener("click", toggleSearch);

function closeSearch(){
  var search = document.querySelector(".search");
  var searchInput = document.querySelector(".search-input");
  var crossBtn = document.querySelector(".cross-btn");

  searchInput.style.display = "none";
    search.style.width = "0%";
    crossBtn.style.display = 'none'
}

crossBtn.addEventListener("click", closeSearch);
