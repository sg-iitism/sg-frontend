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
  FacebookFilled
} from '@ant-design/icons';
import "./styles.css";

const { Meta } = Card;
const { Panel } = Collapse;
const path = window.location.pathname;

const Senate = () => {

  const [members, setMembers] = useState<any[]>([]);
  const [years, setYears] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const senate_url = `https://sg-iitism-api.herokuapp.com/v1${path}`;
    const tenure_url = `https://sg-iitism-api.herokuapp.com/v1${path}/tenures`;

    const fetchData = async () => {
      const people = await axios(senate_url);

      const tenure = await axios(tenure_url);

      console.log(people.data);
      console.log(tenure.data);
      setMembers(people.data.members);
      setYears(tenure.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <h3 style={{marginBottom: "4rem"}}>Current Senate Memebers</h3>
        <Row justify="space-between" style={{marginBottom: "4rem", textAlign: "center"}}>
          {!loading ? members.map((person) => (
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
                    {person.mail ? <a href={person.mail}>
                      <MailFilled className="person_icon" />
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
          )) : <Space size="middle" style={{textAlign: "center"}}><Spin size="large" /></Space>}
        </Row>
        {!loading ? <Collapse defaultActiveKey={[]} onChange={() => {}}>
          <Panel header="PREVIOUS MEMBERS" key="1">
            {years.map((year) => (
              <a href="/"><p>{year.id}</p></a>
            ))}
          </Panel>
        </Collapse> : <Space size="middle" style={{textAlign: "center"}}><Spin size="large" /></Space>}
    </div>
  );
};

export default withTranslation()(Senate);
