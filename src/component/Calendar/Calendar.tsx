import { FC } from 'react'
import { useCalendar } from './useCalendar'
import dayjs from 'dayjs'

export const Calendar: FC = () => {
  const {
    selectedMonth,
    selectedDate,
    calendarData,
    handlePrevMonth,
    handleNextMonth,
    handleSelectDate,
  } = useCalendar()

  return (
    <div className="w-100">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="cursor-pointer font-bold">
          ＜
        </button>
        <span className="text-center font-bold text-lg">
          {selectedMonth.format('YYYY.M')}
        </span>
        <button onClick={handleNextMonth} className="cursor-pointer font-bold">
          ＞
        </button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="grid grid-cols-7">
            {['日', '月', '火', '水', '木', '金', '土'].map((day, index) => (
              <th key={index} className=" p-2">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarData.map((calendar, index) => (
            <tr key={index} className="grid grid-cols-7">
              {calendar.map((date, index) => (
                <td key={index} className="">
                  <button
                    onClick={() => handleSelectDate(date)}
                    className="text-center w-full cursor-pointer p-2"
                    style={{
                      backgroundColor: date.isSame(selectedDate, 'day')
                        ? '#C0C9EE'
                        : 'transparent',
                      fontWeight: date.isSame(selectedDate, 'day')
                        ? 'bold'
                        : 'normal',
                    }}
                  >
                    {date.date()}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-center mt-8 text-xl font-bold">
        選択された日
        <br />
        {dayjs(selectedDate).format('YYYY/M/D')}
      </p>
    </div>
  )
}
