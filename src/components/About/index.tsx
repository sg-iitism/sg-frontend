import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import AboutContent from "../../content/AboutContent.json";
import { Button } from "../../common/Button";
import "./styles.css";

const About = () => {
  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <h3 style={{marginBottom: "4rem"}}>{AboutContent.title}</h3>
        <Row justify="space-between">
          <Col lg={24} md={24} sm={24} xs={24}>
            <div className="about_img_div">
              <img className="about_img" src="./img/icons/ism_photo.jpg" alt="ISM"/>
            </div>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col lg={24} md={24} sm={24} xs={24}>
            <p>{AboutContent.text}</p>
            <Button>
              <a href={AboutContent.button.link} style={{color: "white"}}>{(AboutContent.button.title)}</a>
            </Button>
          </Col>
        </Row>
    </div>
  );
};

export default withTranslation()(About);
