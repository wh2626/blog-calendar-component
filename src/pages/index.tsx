import { Calendar } from '@/component/Calendar/Calendar'
import { RangeCalendar } from '@/component/RangeCalendar/RangeCalendar'

export default function Home() {
  return (
    <div className="container mx-auto p-4 max-w-md">
      <section>
        <p className="text-center font-bold mb-4">
          カレンダーコンポーネント（単日）
        </p>
        <Calendar />
      </section>
      <hr className="mt-12 mb-12" />
      <section>
        <p className="text-center font-bold mb-4">
          カレンダーコンポーネント（複数日）
        </p>
        <RangeCalendar />
      </section>
    </div>
  )
}
