import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row, Col, Space, Spin, Card } from "antd";
import { withTranslation } from "react-i18next";
import Slider from "react-slick";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
    FacebookFilled,
    LinkedinFilled,
    GlobalOutlined,
    InstagramOutlined,
    GithubOutlined,
    AndroidOutlined,
    MailOutlined,
    PhoneFilled
} from '@ant-design/icons';
import { ContentBlockProps } from "./types";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

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

const { Meta } = Card;

const FestsArchive = ({
    title,
    description,
    logo,
    t,
    id,
    links,
    events,
    gallery,
    name,
    youtube
  }: ContentBlockProps) =>
 {
    const [curr, setCurr] = useState<any>(null);
    const [event, setEvent] = useState<any[]>([]);
    const [fest, setFest] = useState<any>(null);
    const [loading, setLoading] = useState(true);
  
    const path=window.location.pathname;
    const new_path = path.substr(7);
    const ind = new_path.indexOf("/");
    const fest_path = new_path.substr(0, ind);
  
    useEffect(() => {
      const curr_url = `https://sg-iitism-api.herokuapp.com/v1${path}?latest=true`;
      const event_url = `https://sg-iitism-api.herokuapp.com/v1${path}/events`;
      const fest_url = `https://sg-iitism-api.herokuapp.com/v1/fests/${fest_path}`;
  
      const fetchData = async () => {
        const event_data = await axios(event_url);
        const curr_data = await axios(curr_url);
        const fest_data = await axios(fest_url);

        setEvent(event_data.data);
        setCurr(curr_data.data);
        setFest(fest_data.data);
        setLoading(false);
      };
  
      fetchData();
    }, []);

    return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
        {!loading ? <div>
        <Row justify="space-between" id="about_fest">
            <Col lg={12} md={12} sm={24} xs={24}>
                <div className="fests_div">
                    <img 
                      src={fest.logoUrl ? fest.logoUrl : "/img/icons/sg_logo.jpg"} 
                      alt="srijan" className="fests_img" 
                    />
                </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
                <span>
                  <h3 className="fest_name">
                    {curr.fest ? curr.fest : "Festival"} | <span className="span">{curr.year}</span>
                  </h3>
                  <span className="span">{curr.tagline}</span>
                </span>
                <p>{curr.about}</p>
                <span className="span">{curr.participants}</span>
                <div style={{marginTop: "2rem"}}>
                    <div style={{textAlign: "left"}}>
                       {curr.website ? <a href={curr.website}>
                          <GlobalOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {curr.facebook ? <a href={curr.facebook}>
                          <FacebookFilled style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {curr.instagram ? <a href={curr.instagram}>
                          <InstagramOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {curr.linkedin ? <a href={curr.linkedin}>
                          <LinkedinFilled style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {curr.github ? <a href={curr.github}>
                          <GithubOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {curr.androidApp ? <a href={curr.androidApp}>
                          <AndroidOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                    </div>
                </div>
            </Col>
        </Row>
        {event.length>0 ? <div style={{marginTop: "4rem"}} id="fest_events">
            <h3>Events and Shows</h3>
            <div style={{textAlign: "center"}}>
                {event.length>=3 ? <Slider {...settings1}>
                    {event.map((item: any) => (
                        <div style={{textAlign: "center"}}>
                          <div>
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
                  
              </div>
              }
            </div>
        </div> : null}
        {curr.coreTeam.length>0 ? <div style={{marginTop: "6rem"}} id="club_coordis">
            <h3>Core Team</h3>
            <div>
                <Row justify="space-between">
                    {curr.coreTeam.map((person: any) => (
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
        </div> : null}
      </div> :

        <div style={{textAlign: "center"}}>
          <Space size="middle" style={{textAlign: "center"}}><Spin size="large" /></Space>
        </div>
      }
    </div>
    );
};

export default withTranslation()(FestsArchive);
