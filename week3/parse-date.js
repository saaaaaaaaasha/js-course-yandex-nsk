function parseDate(dateStr) {
    // 2019-12-12 14:45
    const result = dateStr.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/);

    if (!result) {
        throw new Error('Invalid date');
    }

    const [, year, month, day, hour, minutes] = result;

    return {
        year,
        month,
        day,
        hour,
        minutes
    };
}

module.exports = parseDate;
