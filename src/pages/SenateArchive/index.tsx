import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Row, Col, Table } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import SenateContent from "../../content/SenateContent.json";
import { Button } from "../../common/Button";
import { Card } from 'antd';
import { Collapse } from 'antd';
import { Spin, Space } from 'antd';
import { Helmet } from "react-helmet";
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
const columns = [
  {
    title: "S.No",
    dataIndex: "sno",
    key: "sno",
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Branch',
    dataIndex: 'branch',
    key: 'branch',
  },
]

const SenateArchive = () => {

  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [year, setYear] = useState("");
  const [others, setOthers] = useState<any[]>([]);

  useEffect(() => {
    const senate_url = `${BASE_URL}${path}`;

    const fetchData = async () => {
      const people = await axios(senate_url);
      setMembers(people.data.members);
      people.data.otherMembers.map((mem:any, index:any) => {
        var obj = {
          name: mem.name,
          branch: mem.branch,
          sno: index+1,
        }
        others.push(obj);
      });
      setYear(people.data.id);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Senate Members | {year!="" ? year : "SG-IIT(ISM)"}</title>
            <meta name="description" content={"Senate Members IIT(ISM) Dhanbad | " + (year!="" ? year : "SG-IIT(ISM)")} />
            <meta property="og:title" content={"Senate Members | " + year + "IIT(ISM) Dhanbad"} />
            <meta property="og:description" content="The elected body of Student Gymkhana, IIT(ISM) Dhanbad" />
            <meta name="keywords" content="Student Gymkhana IIT(ISM) Dhanbad Senate" />
        </Helmet>
        <a href="/senate" className="back_anchor"><span>
          <LeftOutlined className="back_icon" />
          Current Senate
        </span></a><br /><br />
        {!loading ? <div>
        <h3 style={{marginBottom: "4rem"}}>Senate {year}</h3>
          <p className="exec_council">Executive Council</p>
          <Row justify="space-between" style={{marginBottom: "4rem", textAlign: "center"}}>
            {members.map((person) => (
              <Col lg={8} md={12} sm={24} xs={24} style={{marginBottom: "2rem"}}>
                <div className="senate">
                  <img src={person.imageUrl || NO_IMAGE_URL} className="senate_img" />
                  <div className="senate_desc">
                    <p className="senate_name">{person.name.toUpperCase()}</p>
                    <p className="senate_position">{person.position}</p>
                    <p className="senate_branch">{person.branch}</p>
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
          {others.length>0 ? <div>
            <div style={{margin: "auto", textAlign: "center"}}>
              <p className="exec_council">Members Council</p>
            </div>
            <Row>
              <div style={{textAlign: "center", margin: "auto"}}>
                <Table size="large" columns={columns} dataSource={others} />
              </div>
            </Row>
          </div>  : null}
          </div>
          : 
            <div style={{textAlign: "center", marginBottom: "3rem"}}>
              <Space size="middle" style={{textAlign: "center"}}><Spin size="large" /></Space>
            </div>}
      </div>
    </Container>
  );
};

export default withTranslation()(SenateArchive);
