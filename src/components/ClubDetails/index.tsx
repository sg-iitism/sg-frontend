import { Row, Col, Layout, Menu, Breadcrumb } from "antd";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { withTranslation } from "react-i18next";
import Slider from "react-slick";
import { Button } from "../../common/Button";
import { Card, Spin, Space, Modal } from 'antd';
import Construction from "../Construction";
import {
    FacebookFilled,
    LinkedinFilled,
    GlobalOutlined,
    GithubOutlined,
    YoutubeOutlined,
    MailOutlined,
    InstagramFilled,
    PhoneFilled,
} from '@ant-design/icons';
import moment from "moment";
import { ContentBlockProps } from "./types";
import draftToHtml from 'draftjs-to-html';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import { BASE_URL, NO_IMAGE_URL } from "../../constants";

const { Meta } = Card;
const { Sider, Content } = Layout;
const { SubMenu } = Menu;

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

const ClubDetails = ({
    title,
    description,
    logo,
    t,
    id,
    links,
    events,
    coordis,
    achievements
  }: ContentBlockProps) =>
 {
  
  const [club, setClub] = useState<any>({});
  const [event, setEvent] = useState<any[]>([]);
  const [achieve, setAchieve] = useState<any[]>([]);
  const [persons, SetPersons] = useState<any[]>([]);
  const [modalData, setModalData] = useState<any>(null);
  const [modalDataDetailsHtml, setModalDataDetailsHtml] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [overloading, setOverloading] = useState(true);
  const [eventloading, setEventloading] = useState(false);
  const [achieveloading, setAchieveloading] = useState(false);

  const path=window.location.pathname;

  useEffect(() => {
    const club_url = `${BASE_URL}${path}`;
    const events_url = `${BASE_URL}${path}/events`;
    const achieve_url = `${BASE_URL}${path}/achievements`;

    const fetchData = async () => {
      try {
        const club_data = await axios(club_url);
        setClub(club_data.data);
        SetPersons(club_data.data.contacts);
        setOverloading(false);
        setEventloading(true);
        setAchieveloading(true);
      } catch(err) {
        setErr(true);
        setLoading(false);
      }

      try {
        const events_data = await axios(events_url);
        setEvent(events_data.data);
        setEventloading(false);
      } catch(err) {
        setErr(true);
        setLoading(false);
      }

      try {
        const achieve_data = await axios(achieve_url);
        setAchieve(achieve_data.data);
        setAchieveloading(false);
      } catch(err) {
        setErr(true);
        setLoading(false);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  let aboutHtml: any;
  try {
    aboutHtml = draftToHtml(JSON.parse(club.about));
  } catch {
    aboutHtml = club.about || '';
  }  

  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      {err ? <Construction /> : null}
      
      <div>
      { !overloading && !err ?
        <Row justify="space-between" id="about_club">
            <Col lg={12} md={12} sm={24} xs={24}>
                <div className="fests_div">
                    <img src={club.logoUrl ? club.logoUrl : NO_IMAGE_URL } alt="club" className="fests_img" />
                </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
                <h3 className="fest_name">{club.name ? club.name : "Club"}</h3>
                <div className="club_para" dangerouslySetInnerHTML={{__html: aboutHtml}}/>
                <div style={{marginTop: "2rem"}}>
                    <div style={{textAlign: "left"}}>
                        {club.website ? <a href={club.website} target="_blank" rel="noopener">
                          <GlobalOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {club.facebook ? <a href={club.facebook} target="_blank" rel="noopener">
                          <FacebookFilled style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {club.instagram ? <a href={club.instagram} target="_blank" rel="noopener">
                          <InstagramFilled style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {club.youtube ? <a href={club.youtube} target="_blank" rel="noopener">
                          <YoutubeOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}                        
                        {club.linkedin ? <a href={club.linkedin} target="_blank" rel="noopener">
                          <LinkedinFilled style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {club.github ? <a href={club.github} target="_blank" rel="noopener">
                          <GithubOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {club.mail ? <a href={"mailto:" + club.mail}>
                          <MailOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                    </div>
                </div>
            </Col>
        </Row>
        : 
        <div style={{textAlign: "center", minHeight: "50vh", alignItems: "center"}}>
          <Space size="middle" style={{textAlign: "center", marginTop: "15%"}}><Spin size="large" /></Space>
        </div> }

        {eventloading && !overloading ? 
          <div style={{textAlign: "center", minHeight: "50vh", alignItems: "center", marginTop: "100%"}}>
            <Space size="middle" style={{textAlign: "center", marginTop: "1000px"}}><Spin size="large" /></Space>
          </div> : null
        }

        {event.length>0 ? <div style={{marginTop: "4rem"}} id="club_events">
            <h3>Events</h3>
            <div>
                {event.length>=3 ? <Slider {...settings1}>
                    {event.map((item: any) => (
                        <div style={{textAlign: "center"}}>
                          <div style={{textAlign: "center"}}>
                            <Card
                                hoverable
                                style={{margin: "auto", textAlign: "center", maxWidth: "250px"}}
                                cover={<img alt="example" src={item.imageUrl ? item.imageUrl : NO_IMAGE_URL} height="250px" width="auto" />}
                            >
                                <Meta 
                                  title={item.name}
                                  description={moment(item.start).format('MM/DD/YYYY') +
                                    " to " + moment(item.start).format('MM/DD/YYYY')}
                                ></Meta>
                            </Card>
                            <div style={{marginTop: "1rem"}}>
                              {item.clubOrganizers.map((org: any) => 
                                <span className="event_org">{org}</span>)}
                              {item.festOrganizer && item.clubOrganizers.length<3 ? 
                                <span className="event_org">{item.festOrganizer}</span> : null}
                            </div>
                            <a href={"/events/" + item.id}>
                              <Button>Know More</Button>
                            </a>
                          </div>
                        </div>
                    ))}
                </Slider> :
                  <Row justify="space-between">
                    {event.map((item: any) => (
                        <Col lg={8} md={12} sm={24} xs={24} style={{marginBottom: "2rem"}}>
                          <div className="events_div">
                            <Card
                                hoverable
                                style={{margin: "auto", textAlign: "center", maxWidth: "250px"}}
                                cover={<img alt="example" 
                                            src={item.imageUrl ? item.imageUrl : NO_IMAGE_URL} 
                                            height="250px" width="auto" 
                                      />}
                            >
                                <Meta 
                                  title={item.name}
                                  description={moment(item.start).format('MM/DD/YYYY') +
                                    " to " + moment(item.start).format('MM/DD/YYYY')}
                                ></Meta>
                            </Card>
                            <div style={{marginTop: "1rem"}}>
                              {item.clubOrganizers.map((org: any) => 
                                <span className="event_org">{org}</span>)}
                            </div>
                            <a className="event_anchor" href={"/events/" + item.id}>
                              <Button>Know More</Button>
                            </a>
                          </div>
                        </Col>
                    ))}
                  </Row> }
            </div>
        </div> : null}

        {achieve.length>0 ? <div style={{marginTop: "6rem"}} id="club_achievements">
            <h3>Achievements</h3>
            <div>
                {achieve.length>=3 ? <Slider {...settings2}>
                    {achieve.map((item: any) => { 
                      let detailsHtml: any;
                      try {
                        detailsHtml = draftToHtml(JSON.parse(item.details));
                      } catch {
                        detailsHtml = item.details || '';
                      }
                      return (
                        <div style={{textAlign: "center"}} onClick={() => { setModalData(item); setModalDataDetailsHtml(detailsHtml);}}>
                            <Card
                                hoverable
                                style={{marginLeft: "2rem", marginRight: "2rem", textAlign: "center", paddingBottom: "1rem"}}
                                cover={<img alt="example" 
                                            src={item.imageUrl ? item.imageUrl : NO_IMAGE_URL} 
                                            height="250px" width="auto" 
                                      />}
                            >
                                <div>
                                  <p style={{fontWeight: "bold"}}>{item.title.substr(0, 20)}</p>
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
                    {achieve.map((item: any) => {
                      let detailsHtml: any;
                      try {
                        detailsHtml = draftToHtml(JSON.parse(item.details));
                      } catch {
                        detailsHtml = item.details || '';
                      }                      
                      return (
                      <div style={{textAlign: "center"}}>
                        <Col lg={8} md={12} sm={24} xs={24}>
                          <div onClick={() => { setModalData(item); setModalDataDetailsHtml(detailsHtml);}}>
                              <Card
                                  hoverable
                                  style={{marginLeft: "2rem", marginRight: "2rem", textAlign: "center"}}
                                  cover={<img alt="example" 
                                              src={item.imageUrl ? item.imageUrl : NO_IMAGE_URL} 
                                              height="250px" width="auto" 
                                        />}
                              >
                                  <Meta title={item.title}></Meta>
                                  <div className="achieve_desc" dangerouslySetInnerHTML={{ __html:detailsHtml}} style={{ overflow: 'hidden', maxHeight: 130 }}>
                                </div>
                                <Button onClick={() => { setModalData(item); setModalDataDetailsHtml(detailsHtml);}}>Know More</Button>
                              </Card>
                          </div>
                        </Col>
                      </div>
                    ); 
                    })}
                  </Row>}
            </div>
        </div> : null}

        {achieveloading && !overloading ? 
          <div style={{textAlign: "center", minHeight: "50vh", alignItems: "center"}}>
            <Space size="middle" style={{textAlign: "center", marginTop: "15%"}}><Spin size="large" /></Space>
          </div> : null
        }

        {!overloading && !achieveloading && !eventloading && !err ?  <div style={{marginTop: "6rem"}} id="club_coordis">
            <h3>Coordinators</h3>
            <div>
                <Row justify="space-between">
                    {persons.map((person) => (
                      <Col lg={6} md={12} sm={24} xs={24} style={{marginBottom: "2rem"}}>
                        <div className="senate">
                          <img src={person.imageUrl || NO_IMAGE_URL} className="senate_img" />
                          <div className="senate_desc">
                            <p className="senate_name">{person.name.toUpperCase()}</p>
                            <p className="senate_position">{person.position}</p>
                            <div className="senate_icons">
                              {person.linkedin ? <a href={person.linkedin} target="_blank" rel="noopener">
                                <LinkedinFilled className="person_icon" />
                              </a> : null}
                              {person.mail ? <a href={"mailto:" + person.mail} data-toggle="tooltip" data-placement="top" title={person.mail}>
                                <MailOutlined className="person_icon" />
                              </a> : null}
                              {person.phone ? <a href={"tel:" + person.phone} data-toggle="tooltip" data-placement="top" title={person.phone}>
                                <PhoneFilled className="person_icon" />
                              </a> : null}
                              {person.facebook ? <a href={person.facebook} target="_blank" rel="noopener">
                                <FacebookFilled className="person_icon" />
                              </a> : null}
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
            </div>
        </div> : null}
      </div> 

      {overloading ?
        <div style={{textAlign: "center", minHeight: "50vh", alignItems: "center"}}>
          <Space size="middle" style={{textAlign: "center", marginTop: "15%"}}><Spin size="large" /></Space>
        </div>
       : null}
      
      {modalData ? 
        <Modal title={modalData.title}
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

export default withTranslation()(ClubDetails);
