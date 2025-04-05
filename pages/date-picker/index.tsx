// DATE PICKER=========================================================================================================================================================================
import React, { useState } from "react";
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker"
import type { Value } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"


const DatePickerComponent = () => {

    const [value, setValue] = useState<Value>(new Date());



    return (
        <div className="flex flex-col space-y-2 items-center justify-center h-screen font-extrabold tracking-tighter text-3xl">
            <h1 className='bg-zinc-900/50 border-4 border-red-900 backdrop-blur-3xl p-4 text-white font-semibold tracking-tighter rounded-xl'>Date Picker</h1>
            <DatePicker value={value} onChange={setValue} calendar={persian} locale={persian_fa} />
        </div>
    )
}

export default DatePickerComponent