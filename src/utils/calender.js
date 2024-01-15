import dayjs from "dayjs";

export const generateDay = (
    month = dayjs().month(),
    year = dayjs().year()
) => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month")
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month")

    const dateArray = []

    // create prefix day
    for (let i = 0; i <= firstDateOfMonth.day(); i++) {
        dateArray.push({
            currentMonth: false,
            date: firstDateOfMonth.day(i).date()
        })
    }

    for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
        dateArray.push({
            currentMonth: true,
            date: i,
            today: firstDateOfMonth.date(i).toDate().toDateString() ===
                dayjs().toDate().toDateString(),
        })
    }

    const remaining = 42 - dateArray.length;

    for (let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++) {
        dateArray.push({
            currentMonth: false,
            date: lastDateOfMonth.date(i).date(),
        });
    }

    return dateArray
}

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];