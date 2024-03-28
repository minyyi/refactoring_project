import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

const Calendar = ({ handleDate }: any) => {
  const [startDate, setStartDate] = useState(null);
  console.log(startDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['MonthCalendar']}>
        <DateCalendar
          value={startDate}
          onChange={(newValue) => {
            console.log(newValue);
            setStartDate(newValue);
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default Calendar;
