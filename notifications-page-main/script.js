const read = document.querySelector(".read-or-unread");
let unread = document.querySelectorAll(".unread");
let notification = document.querySelectorAll(".notification");
let totalNotifications = document.querySelector(".total-notifications");
console.log(totalNotifications);
read.addEventListener("click", () => {
    // Loop through each unread element and set background color to transparent
    unread.forEach(element => {
        element.style.backgroundColor = "transparent";
    });
    notification.forEach(element => {
        element.style.display = "none";
    });
    totalNotifications.innerHTML = "0";
});
