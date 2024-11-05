export const setCookie = (name, value, days) => {
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + days);
    value = escape(value) + ((days == null) ? "" : "; expires=" + expiration.toUTCString());
    document.cookie = `${name}=${value}`;
}

export const getCookie = (name) => {
    let x;
    let y;
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        x = cookies[i].substr(0, cookies[i].indexOf("="));
        y = cookies[i].substr(cookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x === name) {
            return unescape(y);
        }
    }
}

export const setLocaleCookies = (locale) => {
    if (document) {
        document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`
    }
}