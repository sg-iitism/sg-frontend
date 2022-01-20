import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Spin, Space } from 'antd';
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import {
  CalendarOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import "./styles.css";

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const path = window.location.pathname;

  useEffect(() => {
    const url = `https://sg-iitism-api.herokuapp.com/v1/${path}`;

    const fetchData = async () => {
      const data = await axios(url);

      console.log(data);
      setEvent(data.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <Container>
        {!loading ? 
           <div style={{textAlign: "center"}}>
             <img 
               src={event.imageUrl ? event.imageUrl : "img/icons/sg_logo.jpg"}
               width="350px"
               height="auto"
            />
            <br /><br />
            <p>{event.name}</p>
            <br /><br />
            {event.start && event.end ? <p>
                <CalendarOutlined className="icon" />
                <span className='span'>
                    {(new Date(event.start)).toLocaleString() + " - " + (new Date(event.end)).toLocaleString()}
                </span>
            </p> : null}
            {event.website ? <p>
                <GlobalOutlined className="icon" />
                <span className='span'>
                    <a href={event.website}>{event.website}</a>
                </span>
            </p> : null}
           </div> :

           <div style={{textAlign: "center", marginBottom: "3rem"}}>
            <Space size="middle" style={{textAlign: "center"}}><Spin size="large" /></Space>
          </div>
        }
      </Container>
    </div>
  );
};

export default withTranslation()(EventDetails);