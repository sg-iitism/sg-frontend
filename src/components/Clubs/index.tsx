import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Row, Col, Space, Spin } from "antd";
import { withTranslation } from "react-i18next";
import ClubsContent from "../../content/ClubsPage.json";
import {Helmet} from "react-helmet";
import "./styles.css";
import { BASE_URL, NO_IMAGE_URL } from "../../constants";

const ClubsComponent = () => {
    const [clubs, setClubs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const url = `${BASE_URL}/clubs`;
  
      const fetchData = async () => {
        const result = await axios(url);
  
        console.log(result);
        setClubs(result.data);
        setLoading(false);
      };
  
      fetchData();
    }, []);

    return (
        <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
        <h3 className="clubs_h3_science">Technical Clubs</h3>
        { !loading ?
        <Row justify="space-between" id="tech_clubs">
            {clubs.map((club) => {
                if(club.division === "snt"){
                    return (
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>{club.name}</title>
                            <meta name="description" content={club.tagline + "IIT(ISM) Dhanbad"} />
                            <Col lg={8} md={8} sm={12} xs={24} style={{marginBottom: "2rem"}}>
                                <a href={"/clubs/" + club.id}>
                                    <div className="fests_div">
                                        <img 
                                        src={club.logoUrl ? club.logoUrl : NO_IMAGE_URL} 
                                        className="fests_img">
                                        </img>
                                        <div style={{marginTop: "2rem"}}>
                                        <span className="fests_name">{club.name}</span>
                                        </div>
                                        <div style={{marginTop: "0.3rem"}}>
                                        <span className="fests_detail">{club.tagline}</span>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        </Helmet>
                    )
                }
            })}
        </Row> : 
            <div style={{textAlign: "center", marginBottom: "3rem"}}>
              <Space size="middle" style={{textAlign: "center", minHeight: "50vh"}}><Spin size="large" /></Space>
            </div>
         }
        <h3 className="clubs_h3">Media And Cultural Clubs</h3>
        { !loading ?
        <Row justify="space-between" id="cult_clubs">
            {clubs.map((club) => {
                if(club.division === "mnc"){
                    return (
                        <Helmet>
                            <meta charSet="utf-8" />
                            <title>{club.name}</title>
                            <meta name="description" content={club.tagline + "IIT(ISM) Dhanbad"} />
                            <Col lg={8} md={8} sm={12} xs={24} style={{marginBottom: "2rem"}}>
                                <a href={"/clubs/" + club.id}>
                                    <div className="fests_div">
                                        <img 
                                        src={club.logoUrl ? club.logoUrl : NO_IMAGE_URL} 
                                        className="fests_img">
                                        </img>
                                        <div style={{marginTop: "2rem"}}>
                                        <span className="fests_name">{club.name}</span>
                                        </div>
                                        <div style={{marginTop: "0.3rem"}}>
                                        <span className="fests_detail">{club.tagline}</span>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        </Helmet>
                    )
                }
            })}
        </Row> :
            <div style={{textAlign: "center", marginBottom: "3rem"}}>
                <Space size="middle" style={{textAlign: "center", minHeight: "50vh"}}><Spin size="large" /></Space>
            </div>
        }
        </div>
    );
};

export default withTranslation()(ClubsComponent);
