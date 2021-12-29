import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import "./styles.css";

const Fests = () => {
  return (
    <div style={{marginTop: "4rem", marginBottom: "4rem"}}>
      <h3 style={{marginBottom: "4rem"}}>Fests and Events</h3>
      <div>
        <Row justify="space-between">
          <Col lg={6} md={6} sm={12} xs={12}>
            <div style={{textAlign: "center"}}>
              <img src="./img/icons/srijan_logo.jpg" width="200px" height="auto" style={{borderRadius: "50%"}}></img>
              <div><span style={{fontSize: "20px", marginTop: "2rem", fontWeight: "bold"}}>Srijan</span></div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div style={{textAlign: "center"}}>
              <img src="./img/icons/concetto_logo.jpg" width="200px" height="auto" style={{borderRadius: "50%"}}></img>
              <div><span style={{fontSize: "20px", marginTop: "2rem", fontWeight: "bold"}}>Concetto</span></div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div style={{textAlign: "center"}}>
              <img src="./img/icons/parakram_logo.png" width="200px" height="auto" style={{borderRadius: "50%"}}></img>
              <div><span style={{fontSize: "20px", marginTop: "2rem", fontWeight: "bold"}}>Parakram</span></div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withTranslation()(Fests);
