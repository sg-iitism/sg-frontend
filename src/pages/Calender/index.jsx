import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Spin, Space } from 'antd';
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import Construction from '../../components/Construction';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import {
  CalendarOutlined,
  GlobalOutlined
} from '@ant-design/icons';

import "./styles.css"

const localizer = momentLocalizer(moment);

const CalenderComponent = () => {
  const [modalData, setModalData] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const url = "https://sg-iitism-api.herokuapp.com/v1/events";

    const fetchData = async () => {
      try {
        const data = await axios(url);
        var tmp=data.data;
        tmp.map((item) => {
          item.start=moment(item.start).toDate();
          item.end=moment(item.end).toDate();
          item.title=item.name;
        });
        setEvents(data.data);
      } catch(err) {
        setErr(true);
        setLoading(false);
      }
  
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      {err ? <Construction /> : null}
      <Container>
        {!loading && !err ? <Calendar
          selectable
          popup
          localizer={localizer}
          events={events}
          defaultView="month"
          views={['month', 'week', 'day', 'agenda']}
          onSelectEvent={(event) => setModalData(event)}
          style={{ height: 500 }}
        /> : null}

        {loading ?
          <div style={{textAlign: "center", marginBottom: "3rem", minHeight: "50vh"}}>
          <Space size="middle" style={{textAlign: "center", marginTop: "10%"}}><Spin size="large" /></Space>
          </div> : null
        }

      </Container>
      {modalData ? 
        <Modal title={modalData.title}
            visible={modalData ? true : false} 
            onOk={() => setModalData(null)} 
            okText="Close"
            cancelButtonProps={{ style: { display: 'none' } }}
        >
            <div style={{textAlign: "center"}}>
              {modalData.imageUrl ? 
                <img src={modalData.imageUrl} width="300px" height="auto" /> : null
              }
              <br /><br />
              {modalData.clubOrganizers.length>0 ? 
                <span className='span'>
                  Organised by 
                  {modalData.clubOrganizers.map((club) => (<span> {club}, </span>))}
                </span> : null
              }
              <br /><br />
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
                {moment(modalData.start).format('MM/DD/YYYY')} - {moment(modalData.end).format('MM/DD/YYYY')}
              </span>
            </div>
        </Modal> : 
        null
      }
    </div>
  );
};

export default withTranslation()(CalenderComponent);