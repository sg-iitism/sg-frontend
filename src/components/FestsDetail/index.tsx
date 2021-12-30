import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { Card } from 'antd';
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
    gallery
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
        <div>
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
                                <Meta title={item.position} description="www.instagram.com" />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
        <div>
            <h3>Gallery</h3>
            <div>
                <Row justify="space-between">
                    {gallery.map((item: any) => (
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <Card
                                hoverable
                                style={{ width: 400 }}
                                cover={<img alt="example" src={item.image} />}
                            >
                                <Meta title={item.position} description="www.instagram.com" />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    </div>
  );
};

export default withTranslation()(FestsDetail);
