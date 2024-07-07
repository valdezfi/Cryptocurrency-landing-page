mixpanel.init('5a8da846668c085a06c8e7fdeeff13f8', { debug: false, track_pageview: false, persistence: 'localStorage' });

document.addEventListener("DOMContentLoaded", function() {
    mixpanel.track("Spanish Page Viewed", {
        "Page Name": document.title,
        "URL": window.location.href
    });
});


document.getElementById("join-telegram-btn-spanish").addEventListener("click", function() {
    mixpanel.track("Spanish Button Clicked", {
        "Button Name": "Join Telegram Button",
    });
});