// File: cookieUtils.js
export const hasAdminCookie = () => {
    const cookies = document.cookie.split(';');
    return cookies.some(cookie => cookie.trim().startsWith('adminCookie='));
};

export default hasAdminCookie;
