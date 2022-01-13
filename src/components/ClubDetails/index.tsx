import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { Card } from 'antd';
import {
    FacebookFilled,
    LinkedinFilled,
    GlobalOutlined,
    GithubOutlined
} from '@ant-design/icons';
import { ContentBlockProps } from "./types";
import "./styles.css";

const { Meta } = Card;

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
  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
        <Row justify="space-between">
            <Col lg={12} md={12} sm={24} xs={24}>
                <div className="fests_div">
                    <img src={logo} alt="club" className="fests_img" />
                </div>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
                <h3 className="fest_name">{title}</h3>
                <p>{description}</p>
                <div style={{marginTop: "2rem"}}>
                    <div style={{textAlign: "left"}}>
                        <a href={links.website}>
                          <GlobalOutlined style={{ fontSize: '30px', color: '#18216d', marginRight: "20px" }} />
                        </a>
                        <a href={links.facebook}>
                          <FacebookFilled style={{ fontSize: '30px', color: '#18216d', marginRight: "20px" }} />
                        </a>
                        <a href={links.linkedin}>
                          <LinkedinFilled style={{ fontSize: '30px', color: '#18216d', marginRight: "20px" }} />
                        </a>
                        <a href={links.github}>
                          <GithubOutlined style={{ fontSize: '30px', color: '#18216d', marginRight: "20px" }} />
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
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
            <h3>Achievements</h3>
            <div>
                <Row justify="space-between">
                    {achievements.map((item: any) => (
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <Card
                                hoverable
                                style={{ width: 300, marginTop: "2rem" }}
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
            <h3>Coordinators</h3>
            <div>
                <Row justify="space-between">
                    {coordis.map((item: any) => (
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <Card
                                hoverable
                                style={{ width: 300, marginTop: "2rem" }}
                                cover={<img alt="example" src={item.image} />}
                            >
                                <Meta title={item.text}></Meta>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    </div>
  );
};

export default withTranslation()(ClubDetails);
