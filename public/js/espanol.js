mixpanel.init(window.env.MIXPANEL_ACCESS_CODE, {debug: true, track_pageview: true, persistence: 'localStorage'});

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