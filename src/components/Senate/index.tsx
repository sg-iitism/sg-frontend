import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import SenateContent from "../../content/SenateContent.json";
import { Button } from "../../common/Button";
import { Card } from 'antd';
import "./styles.css";

const { Meta } = Card;

const Senate = () => {
  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <h3 style={{marginBottom: "4rem"}}>{SenateContent.title}</h3>
        <Row justify="space-between">
          {SenateContent.team.map((person) => (
            <Col lg={6} md={12} sm={24} xs={24}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={person.image} />}
                >
                    <Meta title={person.position} description="www.instagram.com" />
                </Card>
            </Col>
          ))}
        </Row>
    </div>
  );
};

export default withTranslation()(Senate);
