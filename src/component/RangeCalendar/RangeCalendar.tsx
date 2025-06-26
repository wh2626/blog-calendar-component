import { FC } from 'react'
import { useRangeCalendar } from './useRangeCalendar'
import dayjs from 'dayjs'

export const RangeCalendar: FC = () => {
  const {
    selectedMonth,
    selectedDates,
    calendarData,
    handlePrevMonth,
    handleNextMonth,
    handleSelectDate,
  } = useRangeCalendar()

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
      <table className="w-full">
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
                <CalendarCell
                  key={index}
                  date={date}
                  handleSelectDate={handleSelectDate}
                  selectedDates={selectedDates}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDates.length > 0 && (
        <p className="text-center mt-8 text-xl font-bold">
          選択された日
          <br />
          {selectedDates[0] && (
            <>{dayjs(selectedDates[0]).format('YYYY/M/D')} - </>
          )}
          {selectedDates[1] && (
            <>{dayjs(selectedDates[1]).format('YYYY/M/D')}</>
          )}
        </p>
      )}
    </div>
  )
}

const CalendarCell: FC<{
  date: dayjs.Dayjs
  handleSelectDate: (date: dayjs.Dayjs) => void
  selectedDates: dayjs.Dayjs[]
}> = ({ date, handleSelectDate, selectedDates }) => {
  const isSelected = selectedDates.some((d) => d.isSame(date, 'day'))

  const isInRange =
    selectedDates.length === 2 &&
    !isSelected &&
    date.isAfter(selectedDates[0], 'day') &&
    date.isBefore(selectedDates[1], 'day')

  const { bgColor, fontWeight } = isSelected
    ? { bgColor: '#3eae6b', fontWeight: 'bold' }
    : isInRange
    ? { bgColor: '#abdfc0', fontWeight: 'bold' }
    : {
        bgColor: 'transparent',
        fontWeight: 'normal',
      }

  return (
    <td>
      <button
        onClick={() => handleSelectDate(date)}
        className="text-center w-full cursor-pointer p-2"
        style={{
          backgroundColor: bgColor,
          fontWeight: fontWeight,
          color: '#333',
        }}
      >
        {date.date()}
      </button>
    </td>
  )
}
