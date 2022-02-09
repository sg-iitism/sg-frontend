import { Row, Col, Spin } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactContainer } from "./styles";
import React from "react";

const Contact = () => {

  return (
    <ContactContainer>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={12} sm={24} xs={24} order={1}>
        <div style={{padding: "20px"}}>
          <Slide direction="left">
          <div style={{width: "100%", marginLeft: ""}}>
            <p>Login with your college email ID in icognito mode and then open this page to access the contact form</p>
          </div>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSec2xPGgebmqHADExKLLHHF_puweEProdVYTUBMim8GCS3dIA/viewform?embedded=true" 
            title="Contact Form" width="100%" height="450px" frameborder="0" marginheight="0" marginwidth="0"><Spin/></iframe>
          </Slide>
        </div>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24} order={2}>
        <div style={{padding: "20px"}}>
          <Slide direction="right" style={{marginBottom: "2rem"}}>
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1185838921524!2d86.43901351493429!3d23.814381884557864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fac678481%3A0x122cb1d133a89995!2sIndian%20Institute%20of%20Technology%20(Indian%20School%20of%20Mines)%2C%20Dhanbad!5e0!3m2!1sen!2sin!4v1593296068669!5m2!1sen!2sin"
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
