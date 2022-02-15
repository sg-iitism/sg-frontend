import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import SenateContent from "../../content/SenateContent.json";
import { Button } from "../../common/Button";
import { Card } from 'antd';
import { Collapse } from 'antd';
import { Spin, Space } from 'antd';
import {
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
  FacebookFilled,
  LeftOutlined
} from '@ant-design/icons';
import "./styles.css";
import { BASE_URL, NO_IMAGE_URL } from "../../constants";

const { Meta } = Card;
const { Panel } = Collapse;
const path = window.location.pathname;

const SenateArchive = () => {

  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState("");

  useEffect(() => {
    const senate_url = `${BASE_URL}${path}`;

    const fetchData = async () => {
      const people = await axios(senate_url);

      console.log(people.data);
      setMembers(people.data.members);
      setYear(people.data.id);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
        <a href="/senate" className="back_anchor"><span>
          <LeftOutlined className="back_icon" />
          Current Senate
        </span></a>
        <h3 style={{marginBottom: "4rem"}}>Senate {year}</h3>
          {!loading ? <Row justify="space-between" style={{marginBottom: "4rem", textAlign: "center"}}>
            {members.map((person) => (
              <Col lg={8} md={12} sm={24} xs={24} style={{marginBottom: "2rem"}}>
                <div className="senate">
                  <img src={person.imageUrl || NO_IMAGE_URL} className="senate_img" />
                  <div className="senate_desc">
                    <p className="senate_name">{person.name.toUpperCase()}</p>
                    <p className="senate_position">{person.position}</p>
                    <div className="senate_icons">
                      {person.linkedin ? <a href={person.linkedin} target="_blank" rel="noopener">
                        <LinkedinFilled className="person_icon" />
                      </a> : null}
                      {person.mail ? <a href={person.mail}>
                        <MailFilled className="person_icon" />
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
          : 
            <div style={{textAlign: "center", marginBottom: "3rem"}}>
              <Space size="middle" style={{textAlign: "center"}}><Spin size="large" /></Space>
            </div>}
      </div>
    </Container>
  );
};

export default withTranslation()(SenateArchive);
