import { useState } from "react"
import { generateDay } from "./utils/calender"
import { useEffect } from "react"
import { ChevronLeftIcon } from "lucide-react"
import { ChevronRightIcon } from "lucide-react"
import dayjs from "dayjs";
import moment from "moment";


const Calendar = () => {
    const [thisMonth, setMonth] = useState(dayjs().get('month'))
    const [thisYear, setYear] = useState(dayjs().year())

    const [dates, setDates] = useState(generateDay(thisMonth, thisYear))
    const [selectedDate, setSelectedDate] = useState(moment())

    // useEffect(() => {
    //     if (selectedDate === undefined) {
    //         setSelectedDays(dates.filter(x => x.today)[0].date)
    //     }
    // }, [selectedDay, dates])

    useEffect(() => {
        setDates(generateDay(thisMonth, thisYear))
    }, [thisMonth, thisYear])

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    const changeMonth = (direction) => {
        if (direction === "decrease") {
            if (thisMonth === 0) {
                setMonth(11)
                setYear(oldYear => oldYear - 1)
            } else {
                setMonth(oldMonth => oldMonth - 1)
            }
        } else {
            if (thisMonth === 11) {
                setMonth(0)
                setYear(oldYear => oldYear + 1)
            } else {
                setMonth(oldMonth => oldMonth + 1)
            }
        }
    }

    return (
        <div className="bg-white w-[70%] mx-auto">
            <div className="grid grid-cols-[50px,150px,50px] place-items-center place-content-center max-w-[250px]">
                <button onClick={() => changeMonth("decrease")}>
                    <ChevronLeftIcon className="stroke-slate-400 hover:stroke-slate-700" />
                </button>
                <div className="font-bold   ">{moment().month(thisMonth).format('MMMM')}, {thisYear}</div>
                <button onClick={() => changeMonth("increase")}>
                    <ChevronRightIcon className="stroke-slate-400 hover:stroke-slate-700" />
                </button>
            </div>
            <div className="grid grid-cols-7 place-items-center place-content-center max-w-[250px]">
                {days.map((day, index) => (
                    <div key={index} className="h-8 flex items-center text-xs font-extrabold text-slate-600">
                        {day}
                    </div>
                ))}
                {dates.map((x, index) => {
                    return <button key={index}
                        disabled={!x.currentMonth}
                        // onClick={() => setSelectedDays(x.date)}
                        className={"h-8 flex items-center justify-center text-xs font-semibold w-8 rounded-full hover:bg-slate-200 "
                            + `${x.currentMonth ? "text-slate-600 " : "text-slate-400 "}`
                            + `${(x.date === selectedDate.date() && x.currentMonth) && "bg-blue-300 hover:bg-blue-500"}`
                        }
                    >
                        {x.date}
                    </button>
                })}
            </div>
        </div>
    )
}

export default Calendar