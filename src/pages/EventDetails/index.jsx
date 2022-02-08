import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Spin, Space } from 'antd';
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import {
  CalendarOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import moment from 'moment';
import draftToHtml from 'draftjs-to-html';
import "./styles.css";
import { NO_IMAGE_URL, BASE_URL } from '../../constants';

const EventDetails = () => {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);

  const path = window.location.pathname;

  useEffect(() => {
    const url = `${BASE_URL}${path}`;

    const fetchData = async () => {
      const data = await axios(url);

      console.log(data);
      setEvent(data.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  let detailsHtml;
  try {
    detailsHtml = draftToHtml(JSON.parse(event.details));
  } catch {
    detailsHtml = event.details || '';
  }  

  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <Container>
        {!loading ? 
           <div style={{textAlign: "center"}}>
             <h3>{event.name}</h3>
             <img 
               src={event.imageUrl ? event.imageUrl : NO_IMAGE_URL}
               width="350px"
               height="auto"
            />
            <br /><br />
            {event.details ? <div className="club_para" dangerouslySetInnerHTML={{__html: detailsHtml}}/> : null}
            <br />
            {event.start && event.end ? <p>
                <CalendarOutlined className="icon" />
                <span className='span'>
                    {moment(event.start).format('MM/DD/YYYY') + " - " + moment(event.end).format('MM/DD/YYYY')}
                </span>
            </p> : null}
            {event.clubOrganizers.length > 0 ?
               <div>
               {event.clubOrganizers.map((org) => 
                  <span className="event_org">{org}</span>)}
               </div>
             : null}
            <br />
            {event.website ? <p>
                <GlobalOutlined className="icon" />
                <span className='span'>
                    <a href={event.website} target="_blank" rel="noopener">{event.website}</a>
                </span>
            </p> : null}
           </div> :

           <div style={{textAlign: "center", marginBottom: "3rem", minHeight: "50vh"}}>
            <Space size="middle" style={{textAlign: "center", marginTop: "15%"}}><Spin size="large" /></Space>
          </div>
        }
      </Container>
    </div>
  );
};

export default withTranslation()(EventDetails);