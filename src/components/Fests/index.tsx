import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row, Col, Space, Spin } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import "./styles.css";

const FestsComponent = () => {
  const [fests, setFests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const path=window.location.pathname;

  useEffect(() => {
    const url = `https://sg-iitism-api.herokuapp.com/v1${path}`;

    const fetchData = async () => {
      const fests_data = await axios(url);
      
      setFests(fests_data.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <h3 style={{marginBottom: "4rem"}}>Fests</h3>
      {!loading ? <div>
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
      </div> :

      <div style={{textAlign: "center"}}>
        <Space size="middle" style={{textAlign: "center"}}><Spin size="large" /></Space>
      </div> }
    </div>
  );
};

export default withTranslation()(FestsComponent);
