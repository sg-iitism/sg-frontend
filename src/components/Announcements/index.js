import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Spin, Space } from 'antd';
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import draftToHtml from 'draftjs-to-html';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import { Slide } from "react-awesome-reveal";
import { Helmet } from 'react-helmet';
import Construction from "../../components/Construction";
import {
  CalendarOutlined,
  GlobalOutlined
} from '@ant-design/icons';

import "./styles.css"
import { BASE_URL, NO_IMAGE_URL } from '../../constants';

const data = ["This is one sample heading", "This is one sample heading", 
              "This is one sample heading", "This is one sample heading",
              "This is one sample heading",];

const Announcements = () => {
  const [announce, setAnnounce] = useState([]);
  const [total, setTotal] = useState(null);
  const [pages, setPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [title, setTitle] = useState(null);
  const [details, setDetails] = useState(null);

  const setData = (data) => {
    setTitle(data.title);
    let detailsHtml;
    if (data) {
      try {
        detailsHtml = draftToHtml(JSON.parse(data.details));
      } catch {
        detailsHtml = data.details || '';
      }
    } 
    setDetails(detailsHtml);
  }

  useEffect(() => {
    const url = "https://sg-iitism-api.herokuapp.com/v1/announcements";

    const fetchData = async () => {
      try {
        const data = await axios(url);
        setAnnounce(data.data.results);
        setTotal(data.data.totalResults);
        setPages(data.data.totalPages);
      } catch(err) {
        setErr(true);
        setLoading(false);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
    {err ? <Construction /> : null}

    {!loading && !err ? <Slide direction='up'><div className="announce_div">
      <div className="card_shadow">
          <div className="card_header">
          <p style={{color: "white"}}>Announcements and Documents</p>
          </div>
          <div className="card_body">
          {announce.map((data, idx) => {
              if(idx<5){
                  return (
                      <p className="announce_para" onClick={() => setData(data)}>{idx+1 + ". " + data.title}</p>
                  )
              }
          })}
          </div>
          <div className="pointer">
            <a href="/announcements" target="_blank">
                <div className="card_header">
                <p style={{color: "white", cursor: "pointer"}}>See More</p>
                </div>
            </a>
          </div>
      </div>
    </div></Slide> : 
    <div style={{textAlign: "center", minHeight: "50vh", alignItems: "center"}}>
      <Space size="middle" style={{textAlign: "center", marginTop: "8rem"}}><Spin size="large" /></Space>
    </div>}
    {title && details ? 
       <Modal 
          title={title}
          visible={title && details ? true : false} 
          onOk={() => {setTitle(null); setDetails(null);}} 
          onCancel={() => {setTitle(null); setDetails(null);}}
          okText="Close"
          cancelButtonProps={{ style: { display: 'none' } }}
       >
          <div dangerouslySetInnerHTML={{__html: details }}/>
       </Modal> : null}
    </div>
  );
};

export default withTranslation()(Announcements);