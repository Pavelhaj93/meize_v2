export function generateTitle(val, suffix = '') {
    if (!val) return suffix;

    return `${val} | ${suffix}`;
}