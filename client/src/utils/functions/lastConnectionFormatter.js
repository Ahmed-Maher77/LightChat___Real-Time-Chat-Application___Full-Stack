import timeFormatter from "./timeFormatter";

function lastConnectionFormatter(value) {
    const formatted = timeFormatter(value);

    if (!formatted) {
        return "last seen recently";
    }

    if (formatted === "yesterday") {
        return "last seen yesterday";
    }

    // If the result includes AM/PM it is a time (same day), otherwise it is a date.
    if (formatted.includes("AM") || formatted.includes("PM")) {
        return `last seen at ${formatted}`;
    }

    return `last seen ${formatted}`;
}

export default lastConnectionFormatter;
