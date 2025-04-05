// DATE PICKER=========================================================================================================================================================================
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker"
import type { Value } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"

const DatePickerComponent = () => {

    const [value, setValue] = useState<Value>(new Date());



    return (
        <div className="flex flex-col space-y-2 items-center justify-center h-screen font-extrabold tracking-tighter text-3xl">
            <h1 className='bg-zinc-900/50 border-4 border-red-900 backdrop-blur-3xl p-4 text-white font-semibold tracking-tighter rounded-xl'>Date Picker</h1>
            <div dir="rtl">
                <DatePicker value={value} onChange={setValue} calendar={persian} locale={persian_fa} className="bg-dark" />
            </div>
        </div>
    )
}

export default DatePickerComponent