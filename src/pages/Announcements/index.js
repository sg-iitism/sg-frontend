import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Spin, Space, Row, Pagination } from 'antd';
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import draftToHtml from 'draftjs-to-html';
import { Helmet } from 'react-helmet';
import "react-big-calendar/lib/css/react-big-calendar.css";
import Construction from "../../components/Construction";

import "./styles.css";

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

  const handleChange = (page) => {
    setLoading(true);
    console.log(page);
    const url = "https://sg-iitism-api.herokuapp.com/v1/announcements" + "?page=" + page;
    const fetchNotice = async () => {
      try {
        const data = await axios(url);
        setAnnounce(data.data.results);
      } catch(err) {
        setErr(true);
      }
      setLoading(false);
    };
    fetchNotice();
  }

  useEffect(() => {
    const url = "https://sg-iitism-api.herokuapp.com/v1/announcements?page=1";

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
    <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Announcements - SG IIT(ISM)</title>
      <meta name="description" content="Recent Announcements of Student Gymkhana IIT(ISM) Dhanbad" />
      <meta property="og:title" content="Anouncements of IIT(ISM) Dhanbad" />
      <meta property="og:description" content="announcements of Student Gymkhana of IIT(ISM) Dhanbad" />
      <meta name="keywords" content="Student Gymkhana IIT(ISM) Dhanbad Clubs" />
    </Helmet>
    {err ? <Construction /> : null}

    {!loading && !err ? 
    <div>
      {announce.length>0 ? <div><h3 style={{marginTop: "4rem"}}>Announcements and Documents</h3>
      <div>
          <Row>
            <div style={{textAlign: "center", margin: "auto"}}>
              <table>
                <tr>
                  <th>S.No.</th>
                  <th>Title</th>
                </tr>
                {announce.map((data, idx) => (
                  <tr>
                    <td>{idx+1}</td>
                    <td className="table_data" onClick={() => setData(data)}>{data.title}</td>
                  </tr>
                ))}
              </table>
            </div>
          </Row>
          {total > 0 ?
            <div style={{margin: "auto", textAlign: "center", marginTop: "2rem"}}>
              <Pagination 
                 defaultCurrent={1} 
                 total={total}
                 onChange={(page_num) => handleChange(page_num)}
              /> 
            </div>
          : null}
        </div></div>  : <div style={{margin: "auto", marginTop: "4rem", minHeight: "50vh"}}><h6>No More Notices!</h6></div>}
    </div> 
    : 
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
    </Container>
  );
};

export default withTranslation()(Announcements);