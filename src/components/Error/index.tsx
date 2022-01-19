import { lazy } from "react";
import { Row, Col } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";

const Container = lazy(() => import("../../common/Container"));

const Error = () => {
  return (
    <Container>
      <Row justify="space-between" align="middle" style={{textAlign: "center"}}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <SvgIcon src="error.svg" width="70%" height="auto" />
            <br />
            <div style={{marginTop: "4rem"}}>
                <p>Oops! An Error Occured!</p>
                <a href="/">
                    <Button
                        key={1}
                        fixedWidth={true}
                    >
                        Home
                    </Button>
                </a>
            </div>
          </Col>
      </Row>
    </Container>
  );
};

export default Error;
