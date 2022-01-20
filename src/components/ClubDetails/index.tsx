import { Row, Col, Layout, Menu, Breadcrumb } from "antd";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { withTranslation } from "react-i18next";
import Slider from "react-slick";
import { Button } from "../../common/Button";
import { Card, Spin, Space, Modal } from 'antd';
import {
    FacebookFilled,
    LinkedinFilled,
    GlobalOutlined,
    GithubOutlined,
    MailOutlined,
    InstagramFilled,
    PhoneFilled,
} from '@ant-design/icons';
import { ContentBlockProps } from "./types";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

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
  const [loading, setLoading] = useState(true);

  const path=window.location.pathname;

  useEffect(() => {
    const club_url = `https://sg-iitism-api.herokuapp.com/v1${path}`;
    const events_url = `https://sg-iitism-api.herokuapp.com/v1${path}/events`;
    const achieve_url = `https://sg-iitism-api.herokuapp.com/v1${path}/achievements`;

    const fetchData = async () => {
      const club_data = await axios(club_url);
      const events_data = await axios(events_url);
      const achieve_data = await axios(achieve_url);
      
      setClub(club_data.data);
      SetPersons(club_data.data.contacts);
      setEvent(events_data.data);
      setAchieve(achieve_data.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      { !loading ?
      <div>
        <Row justify="space-between" id="about_club">
            <Col lg={12} md={12} sm={24} xs={24}>
                <div className="fests_div">
                    <img src={club.logoUrl ? club.logoUrl : "https://via.placeholder.com/250x250" } alt="club" className="fests_img" />
                </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
                <h3 className="fest_name">{club.name ? club.name : "Club"}</h3>
                <p className="club_para">{club.about ? club.about : description}</p>
                <div style={{marginTop: "2rem"}}>
                    <div style={{textAlign: "left"}}>
                        {club.website ? <a href={club.website}>
                          <GlobalOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {club.facebook ? <a href={club.facebook}>
                          <FacebookFilled style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {club.instagram ? <a href={club.instagram}>
                          <InstagramFilled style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {club.linkedin ? <a href={club.linkedin}>
                          <LinkedinFilled style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {club.github ? <a href={club.github}>
                          <GithubOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {club.mail ? <a href={"mailto:" + club.mail}>
                          <MailOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                    </div>
                </div>
            </Col>
        </Row>
        {event.length>0 ? <div style={{marginTop: "4rem"}} id="club_events">
            <h3>Events</h3>
            <div style={{textAlign: "center"}}>
                {event.length>=3 ? <Slider {...settings1}>
                    {event.map((item: any) => (
                        <div style={{textAlign: "center"}}>
                          <div>
                            <Card
                                hoverable
                                style={{margin: "auto", textAlign: "center", maxWidth: "250px"}}
                                cover={<img alt="example" src={item.imageUrl ? item.imageUrl : "https://via.placeholder.com/350x150"} height="250px" width="auto" />}
                            >
                                <Meta title={item.name}></Meta>
                            </Card>
                            <a href={"/events/" + item.id}>
                              <Button>Know More</Button>
                            </a>
                          </div>
                        </div>
                    ))}
                </Slider> : 
                <div>
                  <Row>
                    {event.map((item: any) => (
                      <div style={{textAlign: "center"}}>
                        <Col lg={8} md={12} sm={24} xs={24}>
                          <Card
                              hoverable
                              style={{margin: "auto", textAlign: "center", maxWidth: "250px"}}
                              cover={<img alt="example" 
                                          src={item.imageUrl ? item.imageUrl : "https://via.placeholder.com/350x150"} 
                                          height="250px" width="auto" 
                                    />}
                          >
                              <Meta title={item.name}></Meta>
                          </Card>
                          <a href={"/events/" + item.id}>
                            <Button>Know More</Button>
                          </a>
                        </Col>
                      </div>
                    ))}
                  </Row>
                </div> }
            </div>
        </div> : null}
        {achieve.length>0 ? <div style={{marginTop: "6rem"}} id="club_achievements">
            <h3>Achievements</h3>
            <div>
                {achieve.length>=3 ? <Slider {...settings2}>
                    {achieve.map((item: any) => (
                        <div onClick={() => setModalData(item)}>
                            <Card
                                hoverable
                                style={{marginLeft: "2rem", marginRight: "2rem", textAlign: "center"}}
                                cover={<img alt="example" 
                                            src={item.imageUrl ? item.imageUrl : "https://via.placeholder.com/350x150"} 
                                            height="250px" width="auto" 
                                      />}
                            >
                                <Meta title={item.title}></Meta>
                                <div className="achieve_desc">
                                  <span>
                                    {item.details.substr(0, 40) + "..."}
                                    <a className="more_anchor" onClick={() => setModalData(item)}>More</a>
                                  </span>
                                </div>
                            </Card>
                        </div>
                    ))}
                </Slider> : 
                  <Row>
                    {achieve.map((item: any) => (
                      <div style={{textAlign: "center"}}>
                        <Col lg={8} md={12} sm={24} xs={24}>
                          <div onClick={() => setModalData(item)}>
                              <Card
                                  hoverable
                                  style={{marginLeft: "2rem", marginRight: "2rem", textAlign: "center"}}
                                  cover={<img alt="example" 
                                              src={item.imageUrl ? item.imageUrl : "https://via.placeholder.com/350x150"} 
                                              height="250px" width="auto" 
                                        />}
                              >
                                  <Meta title={item.title}></Meta>
                                  <div className="achieve_desc">
                                    <span>
                                      {item.details.substr(0, 40) + "..."}
                                      <a className="more_anchor" onClick={() => setModalData(item)}>More</a>
                                    </span>
                                  </div>
                              </Card>
                          </div>
                        </Col>
                      </div>
                    ))}
                  </Row>}
            </div>
        </div> : null}
        <div style={{marginTop: "6rem"}} id="club_coordis">
            <h3>Coordinators</h3>
            <div>
                <Row justify="space-between">
                    {persons.map((person) => (
                      <Col lg={6} md={12} sm={24} xs={24} style={{marginBottom: "2rem"}}>
                        <div className="senate">
                          <img src={person.imageUrl} className="senate_img" />
                          <div className="senate_desc">
                            <p className="senate_name">{person.name.toUpperCase()}</p>
                            <p className="senate_position">{person.position}</p>
                            <div className="senate_icons">
                              {person.linkedin ? <a href={person.linkedin}>
                                <LinkedinFilled className="person_icon" />
                              </a> : null}
                              {person.mail ? <a href={"mailto:" + person.mail}>
                                <MailOutlined className="person_icon" />
                              </a> : null}
                              {person.phone ? <a href={"tel:" + person.phone}>
                                <PhoneFilled className="person_icon" />
                              </a> : null}
                              {person.facebook ? <a href={person.facebook}>
                                <FacebookFilled className="person_icon" />
                              </a> : null}
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
            </div>
        </div>
      </div> : 
          <div style={{textAlign: "center"}}>
            <Space size="middle" style={{textAlign: "center"}}><Spin size="large" /></Space>
          </div>
      }
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
              {modalData.details ? 
                <span className='span'>
                  {modalData.details}
                </span> : null
              }
            </div>
        </Modal> : 
        null
      }
    </div>
  );
};

export default withTranslation()(ClubDetails);
