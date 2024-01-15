import { PlusCircleIcon } from "lucide-react";
import Task from "./Task";
import Calendar from './Calendar';


function App() {

  const tasks = [
    {
      id: 1,
      'name': 'Task 1',
      'deadline': '20-1-2024',
      'progress': 0.5,
      'parent_id': null
    },
    {
      id: 2,
      'name': 'Task 2',
      'deadline': '20-1-2024',
      'progress': 0.5,
      'parent_id': null
    },
    {
      id: 3,
      'name': 'Task 3',
      'deadline': '1-1-2024',
      'progress': 0.7,
      'parent_id': 1,
    },
    {
      id: 4,
      'name': 'Task 4',
      'deadline': '1-1-2024',
      'progress': 0.7,
      'parent_id': 2,
    },
    {
      id: 5,
      'name': 'Task 5',
      'deadline': '1-1-2024',
      'progress': 0.7,
      'parent_id': 3,
    },
  ]

  function calculateMargin(tasks) {
    const results = {}
    for (const task of tasks) {
      if (task.parent_id === null) {
        results[task.id.toString()] = 0
      } else {
        results[task.id.toString()] = results[task.parent_id.toString()] + 1
      }
    }
    return results
  }

  const margins = calculateMargin(tasks)


  // const generateStatus = (item) => {
  //   // if (item.parent === null) {
  //   //   return 'Standalone task'
  //   // }
  //   // const now = moment.now()
  //   const dl = moment(item.deadline, "DD-MM-YYYY")
  //   const daysDifference = dl.fromNow(true);
  //   return dl.isSameOrAfter(moment.now()) ? '⚠️ ' + daysDifference + ' left' : '🔥 Expired ' + daysDifference + ' ago'
  // }

  return (
    <>
      <div className='h-screen bg-slate-100'>
        <div className="flex justify-center pt-20">
          <div>
            <div className="grid grid-cols-[380px,0px,120px,140px,160px,25px] mb-5">
              <div className="text-xl font-bold">Today task <span className='font-normal'>({tasks.length})</span></div>
              <div></div>
              <div className="text-slate-500 font-semibold">Deadline</div>
              <div className="text-slate-500 font-semibold">Progess</div>
              <div className="text-slate-500 font-semibold">Status</div>
              <div className="flex-center">
                <PlusCircleIcon width={18} height={18} className="stroke-slate-500" />
              </div>
            </div>
            {tasks.filter(task => task.parent_id === null).map(task =>
              <Task key={task.id} task={task} tasks={tasks} margins={margins} open={false} />
            )}

          </div>
        </div>

        <div>
          <Calendar />
        </div>
      </div>
    </>
  )
}

export default App
