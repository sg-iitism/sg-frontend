import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Spin, Space } from 'antd';
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import {
  CalendarOutlined,
  GlobalOutlined
} from '@ant-design/icons';

import "./styles.css"

const localizer = momentLocalizer(moment)

const myEventsList = [
  {
    title: "Assignment",
    start: moment("January 14, 2022 11:13:00").toDate(),
    end: moment("January 14, 2022 12:13:00").toDate()
  },
  {
    title: "Excursion",
    start: moment("January 16, 2022 11:13:00").toDate(),
    end: moment("January 16, 2022 12:13:00").toDate()
  },
  {
    title: "Srijan",
    start: moment("January 19, 2022 00:00:00").toDate(),
    end: moment("January 22, 2022 00:00:00").toDate()
  },
]

const CalenderComponent = () => {
  const [modalData, setModalData] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://sg-iitism-api.herokuapp.com/v1/events";

    const fetchData = async () => {
      const data = await axios(url);
      var tmp=data.data;
      tmp.map((item) => {
        item.start=moment(item.start).toDate();
        item.end=moment(item.end).toDate();
        item.title=item.name;
      })
      
      setEvents(data.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <Container>
        {!loading ? <Calendar
          selectable
          popup
          localizer={localizer}
          events={events}
          defaultView="month"
          views={['month', 'week', 'day', 'agenda']}
          onSelectEvent={(event) => setModalData(event)}
          style={{ height: 500 }}
        /> : 
           <div style={{textAlign: "center", marginBottom: "3rem"}}>
            <Space size="middle" style={{textAlign: "center"}}><Spin size="large" /></Space>
          </div>
        }
      </Container>
      {modalData ? 
        <Modal title={modalData.title}
          visible={modalData ? true : false} 
          onOk={() => setModalData(null)} 
          onCancel={() => setModalData(null)}
          >
            <div style={{textAlign: "center"}}>
              {modalData.imageUrl ? 
                <img src={modalData.imageUrl} width="300px" height="auto" /> : null
              }
              <br />
              {modalData.clubOrganizers ? 
                <span className='span'>
                  Organised by 
                  {modalData.clubOrganizers.map((club) => (<span> {club} </span>))}
                </span> : null
              }
              <br />
              {modalData.website ? 
                <div>
                  <span className='span'>
                   <GlobalOutlined className="icon" /> 
                   <a href={modalData.website}>{modalData.website}</a>
                  </span>
                </div>
                 : null
              }
              <br />
              <span className='span'>
                <CalendarOutlined className="icon" />
                {moment(modalData.start).format('MM/DD/YYYY HH:mm:ss')} - {moment(modalData.end).format('MM/DD/YYYY HH:mm:ss')}
              </span>
            </div>
        </Modal> : 
        null
      }
    </div>
  );
};

export default withTranslation()(CalenderComponent);