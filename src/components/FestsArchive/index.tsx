import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row, Col, Space, Spin, Card } from "antd";
import { withTranslation } from "react-i18next";
import Slider from "react-slick";
import Container from "../../common/Container";
import Construction from "../Construction";
import ShowMoreText from "react-show-more-text";
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
import draftToHtml from 'draftjs-to-html';
import { Helmet } from "react-helmet";
import { ContentBlockProps } from "./types";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import { BASE_URL, NO_IMAGE_URL } from "../../constants";

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
    const [curr, setCurr] = useState<any>({});
    const [event, setEvent] = useState<any[]>([]);
    const [fest, setFest] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);
  
    const path=window.location.pathname;
    const new_path = path.substr(7);
    const ind = new_path.indexOf("/");
    const fest_path = new_path.substr(0, ind);
  
    useEffect(() => {
      const curr_url = `${BASE_URL}${path}?latest=true`;
      const event_url = `${BASE_URL}${path}/events`;
      const fest_url = `${BASE_URL}/fests/${fest_path}`;
  
      const fetchData = async () => {
        try {
          const event_data = await axios(event_url);
          setEvent(event_data.data);
        } catch(err) {
          setErr(true);
          setLoading(false);
        }

        try {
          const curr_data = await axios(curr_url);
          setCurr(curr_data.data);
        } catch(err) {
          setErr(true);
          setLoading(false);
        }

        try {
          const fest_data = await axios(fest_url);
          setFest(fest_data.data);
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
      aboutHtml = draftToHtml(JSON.parse(curr.about));
    } catch {
      aboutHtml = curr.about || '';
    }

    let partiHtml: any;
    try {
      partiHtml = draftToHtml(JSON.parse(curr.participants));
    } catch {
      partiHtml = curr.participants || '';
    }

    return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{(loading ? "Fest" : fest.name + " | " + (curr?curr.year:"IIT(ISM) Dhanbad"))}</title>
          <meta name="description" content={fest.subtitle} />
          <meta property="og:title" content={fest.name + " | " + curr.year + " | IIT(ISM) Dhanbad"} />
          <meta property="og:description" content="The annual fest of IIT(ISM) Dhanbad" />
          <meta name="keywords" content="Student Gymkhana IIT(ISM) Dhanbad Festivals" />
      </Helmet>
      {err ? <Construction /> : null}
        {!loading && !err ? <div>
        <Row justify="space-between" id="about_fest">
            <Col lg={12} md={12} sm={24} xs={24}>
                <div className="fests_div">
                    <img 
                      src={fest.logoUrl ? fest.logoUrl : NO_IMAGE_URL} 
                      alt="srijan" className="fests_img" 
                    />
                </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
                <span>
                  <h3 className="fest_name">
                    {fest.name ? fest.name : "Festival"} | <span className="span">{curr.year}</span>
                  </h3>
                  {curr.tagline ? <div><span style={{fontSize: "20px", fontWeight: "bold"}}>{curr.tagline}</span><br /><br /></div> : null}
                </span>
                <ShowMoreText
                  lines={8}
                  more="Show more"
                  less="Show less"
                  className="content-css"
                  anchorClass="my-anchor-css-class"
                  expanded={false}
                  truncatedEndingComponent={"... "}
                >
                  <div className="text_color" dangerouslySetInnerHTML={{__html: aboutHtml}}/>
                </ShowMoreText>
                <br />
                <ShowMoreText
                  lines={8}
                  more="Show more"
                  less="Show less"
                  className="content-css"
                  anchorClass="my-anchor-css-class"
                  expanded={false}
                  truncatedEndingComponent={"... "}
                >
                  <div className="text_color" dangerouslySetInnerHTML={{__html: partiHtml}}/>
                </ShowMoreText>
                <div style={{marginTop: "2rem"}}>
                    <div style={{textAlign: "left"}}>
                       {curr.website ? <a href={curr.website} target="_blank" rel="noopener">
                          <GlobalOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {curr.facebook ? <a href={curr.facebook} target="_blank" rel="noopener">
                          <FacebookFilled style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {curr.instagram ? <a href={curr.instagram} target="_blank" rel="noopener">
                          <InstagramOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {curr.linkedin ? <a href={curr.linkedin} target="_blank" rel="noopener">
                          <LinkedinFilled style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {curr.github ? <a href={curr.github} target="_blank" rel="noopener">
                          <GithubOutlined style={{ fontSize: '25px', color: '#18216d', marginRight: "10px" }} />
                        </a> : null}
                        {curr.androidApp ? <a href={curr.androidApp} target="_blank" rel="noopener">
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
                                            src={item.imageUrl ? item.imageUrl : NO_IMAGE_URL} 
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
                                          src={item.imageUrl ? item.imageUrl : NO_IMAGE_URL} 
                                          height="250px" width="auto" 
                                    />}
                          >
                              <Meta title={item.name}></Meta>
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
                          <img src={person.imageUrl || NO_IMAGE_URL} className="senate_img" />
                          <div className="senate_desc">
                            <p className="senate_name">{person.name.toUpperCase()}</p>
                            <p className="senate_position">{person.position}</p>
                            <div className="senate_icons">
                              {person.linkedin ? <a href={person.linkedin} target="_blank" rel="noopener">
                                <LinkedinFilled className="person_icon" />
                              </a> : null}
                              {person.mail ? <a href={"mailto:" + person.mail}>
                                <MailOutlined className="person_icon" />
                              </a> : null}
                              {person.phone ? <a href={"tel:" + person.phone}>
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
      </div> : null}

      {loading ?
        <div style={{textAlign: "center", minHeight: "50vh", alignItems: "center"}}>
          <Space size="middle" style={{textAlign: "center", marginTop: "15%"}}><Spin size="large" /></Space>
        </div>
       : null}
       
    </div>
    );
};

export default withTranslation()(FestsArchive);
