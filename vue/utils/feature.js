function isMobile(feature) {
    return ["android", "ios"].includes(feature.metadata.platform.name.toLowerCase());
}

function isDesktop(feature) {
    return ["windows", "osx", "linux", "ubuntu"].includes(feature.metadata.platform.name.toLowerCase());
}

export function statusIcon(feature) {
    if (feature.isFailed) return "exclamation-circle failed-color";
    if (feature.isSkipped) return "arrow-circle-right skipped-color";
    if (feature.isAmbiguous) return "flash ambiguous-color";
    return "check-circle passed-color";
}

export function status(feature) {
    if (feature.isFailed) return "Failed";
    if (feature.isSkipped) return "Skipped";
    if (feature.isAmbiguous) return "Ambiguous";
    return "Passed";
}

export function deviceIcon(feature) {
    if (isMobile(feature)) return "mobile";
    if (isDesktop(feature)) return "desktop";
    return "question-circle not-defined-color";
}

export function deviceType(feature) {
    if (isMobile(feature)) return "Mobile / Tablet";
    if (isDesktop(feature)) return "Desktop";
    return "Not known";
}

export function platformName(feature) {
    if (
        feature.metadata.platform.name.toLowerCase() === "ios" ||
        feature.metadata.platform.name.toLowerCase() === "osx"
    ) return "apple";
    if (feature.metadata.platform.name.toLowerCase() === "android") return "android";
    if (feature.metadata.platform.name.toLowerCase() === "windows") return "windows";
    if (feature.metadata.platform.name.toLowerCase() === "windows") return "windows";
    if (
        feature.metadata.platform.name.toLowerCase() === "ubuntu" ||
        feature.metadata.platform.name.toLowerCase() === "linux"
    ) return "linux";
    return "question-circle not-defined-color";
}

export function app(feature) {
    if (feature.metadata.app) return `${feature.metadata.app.name}<br/>${feature.metadata.app.version}`
}

export function browserIcon(feature) {
    const browserName = feature.metadata.browser.name.toLowerCase();
    if (["firefox", "safari", "chrome"].includes(browserName))
        return browserName;
    if (["edge", "microsoftedge"].includes(browserName))
        return "edge";
    if (["internet explorer"].includes(browserName))
        return "internet explorer";
    return "question-circle not-defined-color";
}
