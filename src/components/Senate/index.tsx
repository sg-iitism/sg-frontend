import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import SenateContent from "../../content/SenateContent.json";
import { Button } from "../../common/Button";
import { Card } from 'antd';
import { Collapse } from 'antd';
import {
  LinkedinFilled,
  MailFilled,
  PhoneFilled
} from '@ant-design/icons';
import "./styles.css";

const { Meta } = Card;
const { Panel } = Collapse;

const Senate = () => {
  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <h3 style={{marginBottom: "4rem"}}>{SenateContent.title}</h3>
        <Row justify="space-between" style={{marginBottom: "4rem"}}>
          {SenateContent.team.map((person) => (
            <Col lg={6} md={12} sm={24} xs={24} style={{marginBottom: "2rem"}}>
              <div className="senate">
                <img src={person.image} className="senate_img" />
                <div className="senate_desc">
                  <p className="senate_name">{person.name.toUpperCase()}</p>
                  <p className="senate_position">{person.position}</p>
                  <div className="senate_icons">
                    <a href={person.linkedin}>
                      <LinkedinFilled className="person_icon" />
                    </a>
                    <a href={person.mail}>
                      <MailFilled className="person_icon" />
                    </a>
                    <a href={person.phone}>
                      <PhoneFilled className="person_icon" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Collapse defaultActiveKey={[]} onChange={() => {}}>
          <Panel header="PREVIOUS MEMBERS" key="1">
            <p>2018-19</p>
            <p>2019-20</p>
            <p>2020-21</p>
          </Panel>
        </Collapse>
    </div>
  );
};

export default withTranslation()(Senate);
