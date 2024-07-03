mixpanel.init('5a8da846668c085a06c8e7fdeeff13f8', {debug: true, track_pageview: true, persistence: 'localStorage'});

document.addEventListener("DOMContentLoaded", function() {
    mixpanel.track("Page Viewed", {
        "Page Name": document.title,
        "URL": window.location.href
    });
});

document.getElementById("join-telegram-btn").addEventListener("click", function() {
    mixpanel.track("Button Clicked", {
        "Button Name": "Join Telegram Button",
    });
});
