import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import "./styles.css";

const Fests = () => {
  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <h3 style={{marginBottom: "4rem"}}>Fests and Events</h3>
      <div>
        <Row justify="space-between">
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="fests_div">
              <img src="./img/icons/srijan_logo.jpg" className="fests_img"></img>
              <div style={{marginTop: "2rem"}}>
                <span className="fests_name">Srijan</span>
              </div>
              <div style={{marginTop: "0.3rem"}}>
                <span className="fests_detail">Annual Cultural Festival</span>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="fests_div">
              <img src="./img/icons/concetto_logo.jpg" className="fests_img"></img>
              <div style={{marginTop: "2rem"}}>
                <span className="fests_name">Concetto</span>
              </div>
              <div style={{marginTop: "0.3rem"}}>
                <span className="fests_detail">Techno-Management Festival</span>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="fests_div">
              <img src="./img/icons/parakram_logo.png" className="fests_img"></img>
              <div style={{marginTop: "2rem"}}>
                <span className="fests_name">Parakram</span>
              </div>
              <div style={{marginTop: "0.3rem"}}>
                <span className="fests_detail">Annual Sports Festival</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withTranslation()(Fests);
