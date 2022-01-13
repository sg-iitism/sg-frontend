import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { Card } from 'antd';
import {
    FacebookFilled,
    LinkedinFilled,
    GlobalOutlined,
    InstagramOutlined
} from '@ant-design/icons';
import { ContentBlockProps } from "./types";
import "./styles.css";

const { Meta } = Card;

const FestsDetail = ({
    title,
    description,
    button,
    logo,
    t,
    id,
    links,
    events,
    gallery,
    years,
    name
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
                        <a href={links.instagram}>
                          <InstagramOutlined style={{ fontSize: '30px', color: '#18216d', marginRight: "20px" }} />
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
        <div style={{marginTop: "4rem"}}>
            <h3>Events and Shows</h3>
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
            <h3>Past Years Archive</h3>
            <div>
                <Row justify="space-between">
                    {years.map((item: any) => (
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="archive_div" style={{textAlign: "center"}}>
                                <a href={"/fests/" + name + "/years/" + item}><p className="archive_para">{item}</p></a>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    </div>
  );
};

export default withTranslation()(FestsDetail);
