import { generateDay } from "./utils/calender"

const Calendar = () => {
    console.log(generateDay())
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    return (
        <div className="bg-white w-[70%] mx-auto">
            <div className="grid grid-cols-7 place-items-center place-content-center max-w-[250px]">
                {days.map((day, index) => (
                    <div key={index} className="h-8 flex items-center text-xs font-extrabold text-slate-600">
                        {day}
                    </div>
                ))}
                {generateDay().map((x, index) => {
                    return <div key={index}
                        className={"h-8 flex items-center justify-center text-xs font-semibold " 
                        + `${x.currentMonth ? "text-slate-600 " : "text-slate-400 "}`
                        + `${x.today && "bg-blue-300 w-8 rounded-full"}`
                        }
                        >
                        {x.date}
                    </div>
                })}
            </div>
        </div>
    )
}

export default Calendar