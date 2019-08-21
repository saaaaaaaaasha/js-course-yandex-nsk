const parseDate = require('../parse-date');

describe('функции parseDate', () => {
    test('должна парсить дату в формат ...', () => {
        expect(parseDate('2019-12-12 14:45'))
            .toEqual({
                year: '2019',
                month: '12',
                day: '12',
                hour: '14',
                minutes: '45'
            });
    });

    test('должна выбросить исключение если передана неверная дата', () => {
        expect(parseDate.bind(null, 'ркеркеркео'))
            .toThrow('Invalid date');
    });
});
