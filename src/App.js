import React, { useState } from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkCalendar, {CALENDAR_SELECTION_TYPE} from 'bpk-component-calendar';
import BpkInput, { INPUT_TYPES } from 'bpk-component-input';
import format from 'date-fns/format';

const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  {
    name: 'Monday',
    nameAbbr: 'Mon',
    index: 1,
    isWeekend: false,
  },
  {
    name: 'Tuesday',
    nameAbbr: 'Tue',
    index: 2,
    isWeekend: false,
  },
  {
    name: 'Wednesday',
    nameAbbr: 'Wed',
    index: 3,
    isWeekend: false,
  },
  {
    name: 'Thursday',
    nameAbbr: 'Thu',
    index: 4,
    isWeekend: false,
  },
  {
    name: 'Friday',
    nameAbbr: 'Fri',
    index: 5,
    isWeekend: false,
  },
  {
    name: 'Saturday',
    nameAbbr: 'Sat',
    index: 6,
    isWeekend: true,
  }
];

// import {Calendar} from './Calendar';
import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => {
  const [selectionConfiguration, setSelection] = useState({
    type: CALENDAR_SELECTION_TYPE.single,
    date: null,
    }
  );
  const handleDateSelect = (date) => {
    setSelection({
        type: CALENDAR_SELECTION_TYPE.single,
        date: date,
      });
  }

  return(
  <div className={c('App')}>
    <header className={c('App__header')}>
      <div className={c('App__header-inner')}>
        <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Flight Schedule</BpkText>
      </div>
    </header>
    <main className={c('App__main')}>
      <BpkText tagName="p" className={c('App__text')}>
        Hello <BpkCode>USER</BpkCode>, pick a date.
      </BpkText>

      <div>
        <BpkInput
          id='dateInput'
          type={INPUT_TYPES.text}
          name='date'
          onChange={() => {}}
          value={(selectionConfiguration.date || '').toString()}
          placeholder='Departure date'
        />
        <BpkText tagName="p" className={c('App__text')}>
        </BpkText>
        <BpkCalendar
         className={c("Calendar")}
          id='calendar'
          onDateSelect={handleDateSelect}
          formatMonth={formatMonth}
          formatDateFull={formatDateFull}
          daysOfWeek={daysOfWeek}
          weekStartsOn={1}
          changeMonthLabel="Change month"
          nextMonthLabel="Next month"
          previousMonthLabel="Previous month"
          selectionConfiguration={selectionConfiguration}
        />
      </div>
      
      <BpkButton onClick={() => alert(selectionConfiguration.date.toString())}>Continue</BpkButton>
    </main>
  </div>
);}

export default App;