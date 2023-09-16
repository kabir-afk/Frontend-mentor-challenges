const features = document.querySelector("#Features");
const featuresDropDown = document.querySelector(".nav-item--features");
const company = document.querySelector("#Company");
const companyDropDown = document.querySelector(".nav-item--company");
const arrow1 = document.querySelector("#icon-arrow-down-1");
const arrow2 = document.querySelector("#icon-arrow-down-2");
const arrow3 = document.querySelector("#icon-arrow-down-3");
const arrow4 = document.querySelector("#icon-arrow-down-4");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const crossIcon = document.querySelector(".icon-close-menu");
const sidebarContainer = document.querySelector(".nav_sidebar-container");
const sidebarMenuFeatures = document.querySelector("#sidebarMenuFeatures");
const sidebarFeaturesDropDown = document.querySelector(".sidebarFeatures-dropDown");
const sidebarMenuCompany = document.querySelector("#sidebarMenuCompany");
const sidebarCompanyDropDown = document.querySelector(".sidebarCompany-dropDown");

features.addEventListener("click", () => {
  featuresDropDown.classList.toggle("open-features");
  arrow1.style.transform = featuresDropDown.classList.contains("open-features")
    ? "rotate(180deg)"
    : "rotate(0deg)";
});
company.addEventListener("click", () => {
  companyDropDown.classList.toggle("open-company-details");
  arrow2.style.transform = companyDropDown.classList.contains(
    "open-company-details"
  )
    ? "rotate(180deg)"
    : "rotate(0deg)";
});
// HAMBURGER ICON TOGGLE MENU OPEN AND CLOSE
window.addEventListener('resize', function() {
  const viewportWidth = window.innerWidth;
  if (viewportWidth <= 768) {
    hamburgerIcon.style.display = 'block';
  } else {
    hamburgerIcon.style.display = 'none';
  }
});

hamburgerIcon.addEventListener("click", () => {
  sidebarContainer.classList.add("open-sidebar-container");
  hamburgerIcon.style.display = "none";
  crossIcon.style.display = "block";
});
crossIcon.addEventListener("click", () => {
  sidebarContainer.classList.remove("open-sidebar-container");
  hamburgerIcon.style.display = "block";
  crossIcon.style.display = "none";
});
//SIDEBAR EVENTS
sidebarMenuFeatures.addEventListener("click", () => {
  sidebarFeaturesDropDown.classList.toggle("open_Features-dropDown-menu");
  arrow3.style.transform = sidebarFeaturesDropDown.classList.contains(
    "open_Features-dropDown-menu"
  )
    ? "rotate(180deg)"
    : "rotate(0deg)";
});
sidebarMenuCompany.addEventListener("click", () => {
  sidebarCompanyDropDown.classList.toggle("open_Company-dropDown-menu");
  arrow4.style.transform = sidebarCompanyDropDown.classList.contains(
    "open_Company-dropDown-menu"
  )
    ? "rotate(180deg)"
    : "rotate(0deg)";
});
