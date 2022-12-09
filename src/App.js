import styles from "./App.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContectForm from "./component/ContectForm";
import ContectList from "./component/ContectList";
function App() {
  return (
    <div className={styles.App}>
      <h1>연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContectForm />
          </Col>
          <Col>
            <ContectList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
