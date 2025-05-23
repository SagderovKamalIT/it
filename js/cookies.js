function showCookieNotification() {
    document.getElementById('cookie-notification').style.display = 'block';
}

function hideCookieNotification() {
    document.getElementById('cookie-notification').style.display = 'none';
    setCookie('cookieAccepted', 'true', 1); 
}

if (getCookie('cookieAccepted') === 'true') {
    document.getElementById('cookie-notification').style.display = 'none';
} else {
    showCookieNotification();
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.indexOf(name + '=') === 0) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
