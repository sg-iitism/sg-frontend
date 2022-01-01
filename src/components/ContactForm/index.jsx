import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import { Modal } from 'antd';
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import { useEffect, useState } from "react";
import React from "react";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSuccess = () => {
    setIsSuccessVisible(false);
  };

  const handleCancelSuccess = () => {
    setIsSuccessVisible(false);
  };

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
    console.log(name);
  }

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    console.log(email);
  }

  const handleMessage = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
    console.log(message);
  }

  const handleSubmit = (e) => {
    console.log(name);
    console.log(email);
    console.log(message);
    if(name==="" || !email.includes("iitism.ac.in") || message===""){
      e.preventDefault();
      setIsModalVisible(true);
    } else {
      document.querySelector("#gform").submit();
      setIsSuccessVisible(true);
    }
  }

  return (
    <ContactContainer>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.1185838921524!2d86.43901351493429!3d23.814381884557864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fac678481%3A0x122cb1d133a89995!2sIndian%20Institute%20of%20Technology%20(Indian%20School%20of%20Mines)%2C%20Dhanbad!5e0!3m2!1sen!2sin!4v1593296068669!5m2!1sen!2sin"
              title="This is a unique title"
              width="80%"
              height="400px"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" id="gform" method="POST" className="pure-form pure-form-stacked" data-email="from_email@example.com"
                       action="https://script.google.com/macros/s/AKfycbw7-UiQSHCRXZiErHYQ1z5SLTFTci1P9rkc9rCY5uzQ0cwOe4MhHYmQjX_CkV8r/exec">
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={handleName}
                />
              </Col>
              <Col span={24}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={handleEmail}
                />
              </Col>
              <Col span={24}>
                <TextArea
                  type="message"
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleMessage}
                />
              </Col>
              <ButtonContainer>
                <Button name="submit" onClick={handleSubmit}>{("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
      <Modal title="Error" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Your response could not be recorded :(</p>
        <p>Make Sure to use your college id only</p>
        <p>Please fill all the required fields</p>
      </Modal>
      <Modal title="Success" visible={isSuccessVisible} onOk={handleSuccess} onCancel={handleCancelSuccess}>
        <p>Your response has been recorded :)</p>
      </Modal>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
