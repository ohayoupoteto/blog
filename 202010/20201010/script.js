const button = document.querySelector(".push_button");
button.addEventListener("click", () => {
    permission = Notification.permission;
    if (permission == "default") {
        Notification.requestPermission();
    }
    else if (permission == "granted") {
        new Notification("やっはろー");
    }
    else if (permission == "denied") {
        alert("許可してクレメンス...");
    }
});