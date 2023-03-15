import { Row, Col, Spin } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactContainer } from "./styles";
import { Helmet } from "react-helmet";
import React from "react";

const Contact = () => {

  return (
    <ContactContainer>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Contact | SG-IIT(ISM)</title>
      <meta name="description" content="Student Gymkhana IIT(ISM) Dhanbad" />
      <meta property="og:title" content="Contact" />
      <meta property="og:url" content="https://sg-iitism.herokuapp.com/contact" />
      <meta property="og:description" content="Contact Student Gymkhana, IIT(ISM) Dhanbad" />
      <meta name="keywords" content="Student Gymkhana IIT(ISM) Dhanbad Contacts" />
    </Helmet>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={12} sm={24} xs={24} order={1}>
        <div style={{padding: "20px"}}>
          <Slide direction="left">
          <div style={{width: "100%", marginLeft: ""}}>
            <p>Login with your college email ID in icognito mode and then open this page to access the contact form</p>
          </div>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfmvEKR2S7DYuGV6DvfcUBYDm38YN5ZQA7ScXKEB11qr7cRDg/viewform?usp=sf_link" 
            title="Contact Form" width="100%" height="450px" frameborder="0" marginheight="0" marginwidth="0"><Spin/></iframe>
          </Slide>
        </div>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24} order={2}>
        <div style={{padding: "20px"}}>
          <Slide direction="right" style={{marginBottom: "2rem"}}>
             <iframe
              src="https://maps.google.com/maps?q=dean%20student%20welfare%20office%20iit%20ism&t=&z=17&ie=UTF8&iwloc=&output=embed"
              title="IIT(ISM) Address"
              width="100%"
              height="500px"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </Slide>
          </div>
        </Col>        
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
