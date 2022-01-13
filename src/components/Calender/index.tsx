import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import "./styles.css";

const CalenderComponent = () => {
  return (
    <div style={{marginTop: "4rem", marginBottom: "6rem"}}>
      <h1>Yash Vardhan</h1>
    </div>
  );
};

export default withTranslation()(CalenderComponent);
