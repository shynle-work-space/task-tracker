import { useState, useEffect } from "react"
import { ChevronRightIcon } from 'lucide-react';
import { ChevronDownIcon } from "lucide-react";
import moment from 'moment';
import { CheckCircle2Icon } from "lucide-react";
import { MoreVerticalIcon } from "lucide-react";
import { PlusCircleIcon } from "lucide-react";

const Task = ({ task, tasks, margins }) => {
    const [isExpand, selectExpand] = useState(false)

    return (
        <>
            <div
                key={task.id}
                style={{ marginLeft: margins[task.id.toString()]*2 + "em" }}
                className="grid grid-cols-[30px,auto,120px,140px,160px,25px] bg-white mb-5 h-[40px] rounded-lg"
            >
                {/* Expand btn */}
                <div
                    onClick={() => selectExpand(!isExpand)}
                    className="flex-center"
                >
                    {isExpand ? <ChevronDownIcon className="stroke-slate-500" /> : <ChevronRightIcon className="stroke-slate-500" />}
                </div>
                {/* task name */}
                <div className=" font-bold flex items-center">{task.name}</div>
                {/* deadline */}
                <div className=" flex items-center">{task.deadline}</div>
                {/* progress bar */}
                <div className=" flex items-center gap-2 pr-4">
                    <progress className="progress progress-accent" value={task.progress * 100} max="100">
                    </progress>
                    <span className="text-xs">{task.progress * 100}%</span>
                </div>
                {/* status bar */}
                <div className="flex items-center overflow-hidden">asjhsakjfhj</div>
                {/* expand menu */}
                <div className="dropdown dropdown-bottom dropdown-end flex-center hover:bg-slate-100">
                    <div tabIndex={0} role="button">
                        <MoreVerticalIcon width={15} height={15} />
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            {isExpand && tasks.filter(subTask => subTask.parent_id === task.id).map(subTask => (
                <Task key={subTask.id} task={subTask} tasks={tasks} margins={margins} />
            ))}
        </>
    )
}

export default Task
