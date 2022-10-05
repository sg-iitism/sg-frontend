import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import AboutContent from "../../content/AboutContent.json";
import { Button } from "../../common/Button";
import Carousel from 'react-bootstrap/Carousel'
import "./styles.css";

const About = () => {
  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <h3 style={{marginBottom: "4rem"}}>{AboutContent.title}</h3>
        <Row justify="space-between">
          <Col lg={24} md={24} sm={24} xs={24}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
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
