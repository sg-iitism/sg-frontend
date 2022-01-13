import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import "./styles.css";

const localizer = momentLocalizer(moment)

const myEventsList = [
  {
    title: "Assignment",
    start: "January 14, 2022 11:13:00",
    end: "January 14, 2022 12:13:00"
  },
  {
    title: "Excursion",
    start: "January 16, 2022 11:13:00",
    end: "January 16, 2022 12:13:00"
  },
  {
    title: "Srijan",
    start: "January 19, 2022 00:00:00",
    end: "January 22, 2022 00:00:00"
  },
]

const CalenderComponent = () => {
  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <Container>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          defaultView="month"
          views={['month', 'day', 'agenda']}
          onSelectEvent={() => console.log("Triggered")}
          style={{ height: 500 }}
        />
      </Container>
    </div>
  );
};

export default withTranslation()(CalenderComponent);
