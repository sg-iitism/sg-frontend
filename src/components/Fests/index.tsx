import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row, Col, Space, Spin } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import Construction from "../Construction";
import "./styles.css";

const FestsComponent = () => {
  const [fests, setFests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  const path=window.location.pathname;

  useEffect(() => {
    const url = `https://sg-iitism-api.herokuapp.com/v1${path}`;

    const fetchData = async () => {
      try {
        const fests_data = await axios(url);
        setFests(fests_data.data);
      } catch(err) {
        setErr(true);
        setLoading(false);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <h3 style={{marginBottom: "4rem"}}>Fests</h3>
      {err ? <Construction /> : null}
      {!loading && !err ? <div>
        <Row justify="space-between">
          {fests.map((fest) => (
             <Col lg={8} md={12} sm={24} xs={24} style={{marginBottom: "4rem"}}>
                <a href={"/fests/" + fest.id}>
                  <div className="fests_div">
                    <img src={fest.logoUrl ? fest.logoUrl : "/img/icons/sg_logo.jpg"} className="fests_img"></img>
                    <div style={{marginTop: "2rem"}}>
                      <span className="fests_name">{fest.name}</span>
                    </div>
                    <div style={{marginTop: "0.3rem"}}>
                      <span className="fests_detail">{fest.subtitle}</span>
                    </div>
                  </div>
                </a>
              </Col>
          ))}
        </Row>
      </div> : null}

      {loading ?
        <div style={{textAlign: "center", minHeight: "50vh", alignItems: "center"}}>
          <Space size="middle" style={{textAlign: "center", marginTop: "15%"}}><Spin size="large" /></Space>
        </div>
       : null}
    </div>
  );
};

export default withTranslation()(FestsComponent);
