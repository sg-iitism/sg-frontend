import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Spin, Space } from 'antd';
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import Construction from '../../components/Construction';
import draftToHtml from 'draftjs-to-html';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import {
  CalendarOutlined,
  GlobalOutlined
} from '@ant-design/icons';

import "./styles.css"
import { BASE_URL, NO_IMAGE_URL } from '../../constants';

const localizer = momentLocalizer(moment);

const CalenderComponent = () => {
  const [modalData, setModalData] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [modalDetailsHtml, setModalDetailsHtml] = useState('');

  useEffect(() => {
    const url = `${BASE_URL}/events`;

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (modalData) {
          const url = `${BASE_URL}/events/${modalData.id}`;
          const { data } = await axios(url);
          let detailsHtml;
          if (modalData) {
            try {
              detailsHtml = draftToHtml(JSON.parse(data.details));
            } catch {
              detailsHtml = data.details || '';
            }
          }
          setModalDetailsHtml(detailsHtml);          
      }
      } catch(err) {
        console.log(err);
      }
    };

    fetchData();
  }, [modalData]);

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
            onOk={() => {setModalData(null); setModalDetailsHtml('');}} 
            onCancel={() => {setModalData(null); setModalDetailsHtml('');}}
            okText="Close"
            cancelButtonProps={{ style: { display: 'none' } }}
        >
            <div style={{textAlign: "center"}}>
              {modalData.imageUrl ? 
                <img src={modalData.imageUrl || NO_IMAGE_URL} width="300px" height="auto" /> : null
              }
              <br /><br/>
              <span className='span'>
                <CalendarOutlined className="icon" />
                {`${moment(modalData.start).format('LLL')} - ${moment(modalData.end).format('LLL')}`}
              </span>              
              {modalData.clubOrganizers.length>0 ? 
              <><br /><br />
                <span className='span'>
                  Organised by 
                  {modalData.clubOrganizers.map((club) => (<span> {club}, </span>))}
                </span> </>: null
              }
              {modalData.website ? 
                <><br /><br /><div>
                  <span className='span'> 
                   <a href={modalData.website} target="_blank" rel="noopener"><GlobalOutlined className="icon" /></a>
                  </span>
                </div></>
                 : null
              }
              {modalDetailsHtml ? 
                <><br/><div dangerouslySetInnerHTML={{__html: modalDetailsHtml }}/></>
                 : null
              }
            </div>
        </Modal> : 
        null
      }
    </div>
  );
};

export default withTranslation()(CalenderComponent);