import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { Card } from 'antd';
import {
    FacebookFilled,
    LinkedinFilled,
    GoogleCircleFilled
} from '@ant-design/icons';
import { ContentBlockProps } from "./types";
import "./styles.css";

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
  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
        <Row justify="space-between">
            <Col lg={12} md={12} sm={24} xs={24}>
                <div className="fests_div">
                    <img src={logo} alt="srijan" className="fests_img" />
                </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
                <h3 className="fest_name">{title}</h3>
                <p>{description}</p>
            </Col>
        </Row>
        <div style={{marginTop: "4rem"}}>
            <div style={{textAlign: "center"}}>
                <iframe width="400px" height="315px" 
                        src={youtube} title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                </iframe>
                <p style={{fontSize: "25px", fontWeight: "bold"}}>Official Aftermovie</p>
            </div>
        </div>
        <div style={{marginTop: "4rem"}}>
            <h3>Events</h3>
            <div>
                <Row justify="space-between">
                    {events.map((item: any) => (
                        <Col lg={6} md={12} sm={24} xs={24}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={item.image} />}
                            >
                                <Meta title={item.text}></Meta>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
        <div style={{marginTop: "4rem"}}>
            <h3>Gallery</h3>
            <div>
                <Row justify="space-between">
                    {gallery.map((item: any) => (
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <Card
                                hoverable
                                style={{ width: 300, marginTop: "2rem" }}
                                cover={<img alt="example" src={item.image} />}
                            >
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
        <div style={{marginTop: "4rem"}}>
            <div style={{textAlign: "center"}}>
                <a href={links.facebook}>
                  <FacebookFilled style={{ fontSize: '30px', color: '#08c', marginLeft: "20px", marginRight: "20px" }} />
                </a>
                <a href={links.linkedin}>
                  <LinkedinFilled style={{ fontSize: '30px', color: '#08c', marginLeft: "20px", marginRight: "20px" }} />
                </a>
                <a href={links.website}>
                  <GoogleCircleFilled style={{ fontSize: '30px', color: '#08c', marginLeft: "20px", marginRight: "20px" }} />
                </a>
            </div>
        </div>
    </div>
  );
};

export default withTranslation()(FestsArchive);
