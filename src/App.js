import logo from "./logo.svg";
import "./App.css";
import { MultiStepProgressBar } from "./components/MultiStepProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { MultiStepForm } from "./components/MultiStepForm";
import { questions } from "./Questions";
import { MdDone } from "react-icons/md";

function App() {
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;
  // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
  const [pagesAnswers, setPagesAnswers] = useState({});

  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextButton = () => {
    if (index - 3) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      // clear the form on submit
      setPagesAnswers({});
      setSubmitted(true);
    }
  };

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answersObj });
  };

  return (
    <div className="App">
      <Container className="maincenter h-100 w-50">
        <Row className="m-5">
          <Col className="align-self-center">
            <MultiStepProgressBar step={index} />
          </Col>
        </Row>
        <Row>
          {submitted ? (
            <Card className="border-0">
              <Card.Body>
                <div className="donesucess">
                  <MdDone />
                </div>
                <h1>Congratulation, Eren!</h1>
                <p>You have completed onboarding,you can start using Eden!</p>
              </Card.Body>
              <Card.Footer className="bg-white border-0">
                <Button>Launch Eden</Button>
              </Card.Footer>
            </Card>
          ) : (
            <Card className="border-0">
              <Card.Body className="d-flex justify-content-center">
                <MultiStepForm
                  list={questions}
                  step={index}
                  onPageUpdate={onPageAnswerUpdate}
                  pagesAnswers={pagesAnswers}
                />
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center bg-white border-0">
                {/* <Button onClick={prevButton} disabled={index == 1}>
                  Previous
                </Button> */}
                <Button className="btn" onClick={nextButton}>
                  Create Workspace
                </Button>
              </Card.Footer>
            </Card>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
