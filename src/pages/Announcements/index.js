import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Spin, Space } from 'antd';
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import draftToHtml from 'draftjs-to-html';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
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

    {!loading && !err ? <div className="announce_div">
        <div className="card_shadow">
            <div className="card_header">
            <p style={{color: "white"}}>Recent Announcements</p>
            </div>
            <div className="card_body">
            {announce.map((data, idx) => {
                if(idx<5){
                    return (
                        <p>{data.title}</p>
                    )
                }
            })}
            </div>
            <div className="pointer">
            <a href="/announcements" target="_blank">
                <div className="card_header">
                <p style={{color: "white"}}>See More</p>
                </div>
            </a>
            </div>
        </div>
    </div> : 
        <div style={{textAlign: "center", minHeight: "50vh", alignItems: "center"}}>
          <Space size="middle" style={{textAlign: "center", marginTop: "15%"}}><Spin size="large" /></Space>
        </div>
    }
    </div>
  );
};

export default withTranslation()(Announcements);