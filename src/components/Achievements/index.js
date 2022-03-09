import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Spin, Space, Card, Row, Col } from 'antd';
import { withTranslation } from "react-i18next";
import draftToHtml from 'draftjs-to-html';
import Slider from "react-slick";
import Construction from "../../components/Construction";
import { Button } from "../../common/Button";
import { Helmet } from 'react-helmet';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

import { BASE_URL, NO_IMAGE_URL } from '../../constants';

const data = ["This is one sample heading", "This is one sample heading", 
              "This is one sample heading", "This is one sample heading",
              "This is one sample heading",];

var settings1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

var settings2 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Achievements = () => {
  const [achieve, setAchieve] = useState([]);
  const [total, setTotal] = useState(null);
  const [pages, setPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [title, setTitle] = useState(null);
  const [details, setDetails] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [modalDataDetailsHtml, setModalDataDetailsHtml] = useState(null);
  const [events, setEvents] = useState([]);

  // const setData = (data) => {
  //   setTitle(data.title);
  //   let detailsHtml;
  //   if (data) {
  //     try {
  //       detailsHtml = draftToHtml(JSON.parse(data.details));
  //     } catch {
  //       detailsHtml = data.details || '';
  //     }
  //   } 
  //   setDetails(detailsHtml);
  // }

  useEffect(() => {
    const url = "https://sg-iitism-api.herokuapp.com/v1/achievements?limit=10";
    const events_url = `https://sg-iitism-api.herokuapp.com/v1//events`;

    const fetchData = async () => {
      try {
        const data = await axios(url);
        console.log(data);
        setAchieve(data.data);
        console.log(achieve);
      } catch(e) {
        setErr(true);
        setLoading(false);
      }

      try {
        const events_data = await axios(events_url);
        setEvents(events_data.data);
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
    {!loading && !err && achieve.length>0 ?
      <div style={{marginTop: "6rem"}} id="club_achievements">
        <h3>Achievements</h3>
        <div>
          {achieve.length>=3 ? <Slider {...settings2}>
          {achieve.map((item) => {
            let detailsHtml;
            try {
              detailsHtml = draftToHtml(JSON.parse(item.details));
            } catch {
              detailsHtml = item.details || '';
            }
              return (
                <div style={{textAlign: "center", maxHeight:"400px"}} 
                    onClick={() => { setModalData(item); setModalDataDetailsHtml(detailsHtml);}}>
                    <Card
                        hoverable
                        style={{marginLeft: "2rem", marginRight: "2rem", textAlign: "center", paddingBottom: "1rem"}}
                        cover={<img alt="example" 
                                    src={item.imageUrl ? item.imageUrl : NO_IMAGE_URL} 
                                    height="250px" width="250px" 
                              />}
                    >
                        <div>
                          <p style={{fontWeight: "bold"}}>{item.title.substr(0, 50)}</p>
                        </div>
                        <div 
                          className="achieve_desc" 
                          dangerouslySetInnerHTML={{ __html:detailsHtml}} 
                          style={{ overflow: 'hidden', maxHeight: 130, marginBottom: "1rem" }}
                        >
                        </div> 
                        <Button 
                          onClick={() => { setModalData(item); setModalDataDetailsHtml(detailsHtml);}}
                        >
                          Know More
                        </Button>                              
                    </Card> 
                </div>
              );
             })}
          </Slider> : 
          <Row>
                    {achieve.map((item) => {
                      let detailsHtml;
                      try {
                        detailsHtml = draftToHtml(JSON.parse(item.details));
                      } catch {
                        detailsHtml = item.details || '';
                      }                      
                      return (
                        <Col lg={8} md={12} sm={24} xs={24}>
                          <div style={{textAlign: "center"}}>
                        
                          <div onClick={() => { setModalData(item); setModalDataDetailsHtml(detailsHtml);}}>
                              <Card
                                  hoverable
                                  style={{marginLeft: "2rem", marginRight: "2rem", textAlign: "center", minWidth: "250px"}}
                                  cover={<img alt="example" 
                                              src={item.imageUrl ? item.imageUrl : NO_IMAGE_URL} 
                                              height="250px" width="250px" 
                                        />}
                              >
                                  <div>
                                    <p style={{fontWeight: "bold"}}>{item.title.substr(0, 50)}</p>
                                  </div>
                                  <div className="achieve_desc" dangerouslySetInnerHTML={{ __html:detailsHtml}} style={{ overflow: 'hidden', maxHeight: 130 }}>
                                </div>
                                <Button onClick={() => { setModalData(item); setModalDataDetailsHtml(detailsHtml);}}>Know More</Button>
                              </Card>
                          </div>
                        
                      </div>
                    </Col>
                    ); 
                    })}
                  </Row>
          }
        </div>
      </div>
     : 
      <div style={{textAlign: "center", minHeight: "50vh", alignItems: "center"}}>
        <Space size="middle" style={{textAlign: "center", marginTop: "15%"}}><Spin size="large" /></Space>
      </div>
    }
    {modalData ? 
        <Modal title={<div style={{margin: "auto", paddingLeft: "20px", paddingRight: "20px"}}>{modalData.title}</div>}
          visible={modalData ? true : false} 
          onOk={() => setModalData(null)}
          onCancel={() => setModalData(null)}
          okText="Close"
          cancelButtonProps={{ style: { display: 'none' } }}
        >
          <div style={{textAlign: "center"}}>
            {modalData.imageUrl ? 
              <img src={modalData.imageUrl || NO_IMAGE_URL} width="300px" height="auto" /> : null
            }
            <br /><br />
            {modalData.details ? 
              <div dangerouslySetInnerHTML={{__html: modalDataDetailsHtml }}/> : null
            }
          </div>
        </Modal> : 
        null
      }
    </div>
  );
};

export default withTranslation()(Achievements);