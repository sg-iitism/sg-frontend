import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import SenateContent from "../../content/SenateContent.json";
import Error from "../Error";
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
  const [yearsLoading, setYearsLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const senate_url = `https://sg-iitism-api.herokuapp.com/v1${path}`;
    const tenure_url = `https://sg-iitism-api.herokuapp.com/v1${path}/tenures`;

    const fetchData = async () => {
      try {
        const people = await axios(senate_url);
        setMembers(people.data.members);
        setLoading(false);
        setYearsLoading(true);
      } catch(err) {
        setErr(true);
        setLoading(false);
      }
      
      try {
        const tenure = await axios(tenure_url);
        setYears(tenure.data);
        setYearsLoading(false);
      } catch(err) {
        setErr(true);
        setYearsLoading(false);
      }
      
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      {err ? <Error /> : null}
      <h3 style={{marginBottom: "4rem"}}>Current Senate</h3>
        {!loading && !err ? <Row justify="space-between" style={{marginBottom: "4rem", textAlign: "center"}}>
          {members.map((person) => (
            <Col lg={8} md={12} sm={24} xs={24} style={{marginBottom: "2rem"}}>
              <div className="senate">
                <img src={person.imageUrl} className="senate_img" />
                <div className="senate_desc">
                  <p className="senate_name">{person.name.toUpperCase()}</p>
                  <p className="senate_position">{person.position}</p>
                  <div className="senate_icons">
                    {person.linkedin ? <a href={person.linkedin}>
                      <LinkedinFilled className="person_icon" />
                    </a> : null}
                    {person.mail ? <a href={"mailto:" + person.mail} data-toggle="tooltip" data-placement="top" title={person.mail}>
                      <MailFilled className="person_icon" />
                    </a> : null}
                    {person.phone ? <a href={"tel:" + person.phone} data-toggle="tooltip" data-placement="top" title={person.phone}>
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
        : null}
        {loading && !err ?  <div style={{textAlign: "center", marginBottom: "3rem"}}>
            <Space size="middle" style={{textAlign: "center", minHeight: "40vh"}}><Spin size="large" /></Space>
          </div> : null}
        {!yearsLoading && !loading && !err ? <Collapse defaultActiveKey={[]} onChange={() => {}}>
          <Panel header="PREVIOUS MEMBERS" key="1">
            {years.map((year) => (
              <a href={"/senate/"+year.id}><p>{year.id}</p></a>
            ))}
          </Panel>
        </Collapse> : null}

        {yearsLoading && !loading ? <div style={{textAlign: "center"}}>
          <Space size="middle" style={{textAlign: "center", minHeight:"40vh"}}><Spin size="large" /></Space>
        </div> : null}
    </div>
  );
};

export default withTranslation()(Senate);
