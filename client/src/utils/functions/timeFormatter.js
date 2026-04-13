const isSameDay = (firstDate, secondDate) => {
    return (
        firstDate.getFullYear() === secondDate.getFullYear() &&
        firstDate.getMonth() === secondDate.getMonth() &&
        firstDate.getDate() === secondDate.getDate()
    );
};

const formatAsDayMonthYear = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

function timeFormatter(value) {
    if (!value) {
        return "";
    }

    const messageDate = value instanceof Date ? value : new Date(value);

    if (Number.isNaN(messageDate.getTime())) {
        return "";
    }

    const now = new Date();

    if (isSameDay(messageDate, now)) {
        return messageDate
            .toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            })
            .replace(" ", "");
    }

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    if (isSameDay(messageDate, yesterday)) {
        return "yesterday";
    }

    return formatAsDayMonthYear(messageDate);
}

export default timeFormatter;