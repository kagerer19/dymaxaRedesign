// src/utils/textUtils.js
function truncateText(text, maxLength) {
    const words = text.split(' ');
    const truncated = words.slice(0, maxLength).join(' ');
    return truncated + (words.length > maxLength ? '....' : '');
}

export default truncateText;
