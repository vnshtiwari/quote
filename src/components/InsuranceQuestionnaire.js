import { React, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { HealthInsuranceQuestion, marks } from "../constants";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function InsuranceQuestionnair({ setLoader }) {
  const navigate = useNavigate();

  let [step, setStep] = useState(0);
  let [answer, setAnswer] = useState([]);

  function handleClick(opt) {
    if (opt == "no" && step == 0) {
      setStep(step + 3);
    } else next();
  }

  let [arr, setArr] = useState({});
  let [question, setQuestion] = useState("");
  let [currAnswer, setCurrAnswer] = useState("");

  let [questionType, setQuestionType] = useState("");

  let [currQuestion, setCurrQuestion] = useState({});

  let [currIdx, setCurrIdx] = useState(0);
  let questionObj = {
    requestId: "uw_42348",
    questions: [
      {
        id: 1,
        question: "Do you smoke?",
        answerFormat: "boolean",
        hasNext: true,
        showNextOnAnswer: "true",
        next: [
          {
            id: 2,
            question: "How many cigarettes in a day do you smoke?",
            answerFormat: "number",
            hasNext: false,
          },
          {
            id: 3,
            question: "At what age did you start smoking?",
            answerFormat: "number",
            hasNext: false,
          },
        ],
      },
      {
        id: 4,
        question: "Do you drink?",
        answerFormat: "boolean",
        hasNext: true,
        showNextOnAnswer: "true",
        next: [
          {
            id: 5,
            question: "How often do you drink?",
            answerFormat: "string",
            answerOptions: ["regularly", "occasionally"],
            hasNext: true,
            showNextOnAnswer: "regularly",
            next: [
              {
                id: 6,
                question:
                  "Have you experienced any health issues because of your drinking habits?",
                answerFormat: "boolean",
                hasNext: false,
              },
            ],
          },
          {
            id: 7,
            question: "At what age did you start drinking?",
            answerFormat: "number",
            hasNext: false,
          },
        ],
      },
      {
        id: 8,
        question: "Provide your height in CMs.",
        answerFormat: "number",
        hasNext: false,
      },
      {
        id: 9,
        question: "Provide your weight in KGs.",
        answerFormat: "number",
        hasNext: false,
      },
      {
        id: 10,
        question: "Have you been diagonased with Asthma?",
        answerFormat: "boolean",
        hasNext: false,
      },
      {
        id: 11,
        question: "Have you been diagonased with high or low blood pressure?",
        answerFormat: "boolean",
        hasNext: false,
      },
      {
        id: 12,
        question: "Have you been diagonased with Cancer?",
        answerFormat: "boolean",
        hasNext: true,
        showNextOnAnswer: "true",
        next: [
          {
            id: 13,
            question:
              "Provide the type of cancer you have been diagonased with.",
            answerFormat: "string",
            hasNext: false,
          },
          {
            id: 14,
            question: "What stage of cancer were you diagnosed with?",
            answerFormat: "string",
            hasNext: false,
          },
          {
            id: 15,
            question: "Have you recovered completely from Cancer?",
            answerFormat: "boolean",
            hasNext: false,
          },
        ],
      },
      {
        id: 16,
        question: "Have you been diagnosed with Diabestes?",
        answerFormat: "boolean",
        hasNext: true,
        showNextOnAnswer: "true",
        next: [
          {
            id: 17,
            question: "Do you take insulin?",
            answerFormat: "boolean",
            hasNext: false,
          },
          {
            id: 18,
            question: "At what age were you diagnosed with Diabetes?",
            answerFormat: "number",
            hasNext: false,
          },
        ],
      },
      {
        id: 19,
        question: "Have you been hospitalised in the last 1 year?",
        answerFormat: "boolean",
        hasNext: true,
        showNextOnAnswer: "true",
        next: [
          {
            id: 20,
            question: "For which condition were you hospitalised?",
            answerFormat: "string",
            hasNext: false,
          },
        ],
      },
      {
        id: 21,
        question: "Are you under any ongoing medications?",
        answerFormat: "boolean",
        hasNext: true,
        showNextOnAnswer: "true",
        next: [
          {
            id: 22,
            question: "Mention the medications you are taking.",
            answerFormat: "string",
            hasNext: false,
          },
        ],
      },
      {
        id: 23,
        question:
          "Do you have any symptoms for which you have not been diagonosed or been treated?",
        answerFormat: "boolean",
        hasNext: false,
      },
    ],
  };

  useEffect(() => {
    // fetch(
    //   "https://sahi-underwriting-service-dnhiaxv6nq-el.a.run.app/external/underwriting/questions"
    // ) //api for the get request
    //   .then((response) => {
    //     response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });

    // let [ques, setQues] = useState({ ...questionObj });
    setArr([{ obj: questionObj.questions, index: 0 }]);
    setQuestion(questionObj.questions[0].question);
    setQuestionType(questionObj.questions[0].answerFormat);
  }, []);

  function nextQ(res) {
    let elem = arr[arr.length - 1];
    if (res == "yes" || res == "no") {
      answer.push({ id: elem.obj[elem.index].id, answer: res });
    } else answer.push({ id: elem.obj[elem.index].id, answer: currAnswer });
    setAnswer([...answer]);
    console.log(answer);

    if (elem.index >= elem.obj.length - 1) {
      arr.pop();
      if (arr.length == 0) {
        let data = {
          requestId: "uw_70880",
          customerId: 124,
          answers: [...answer],
        };

        setLoader(true);
        fetch(
          "https://sahi-backend-dnhiaxv6nq-el.a.run.app/api/v1/sahi/uw/answers",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setLoader(false);

            debugger;
            if (data.status == "Accepted") {
              navigate("../policyIssuance");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (arr.length != 0) {
        elem = arr[arr.length - 1];
        elem.index = elem.index + 1;
        // while (elem.index >= elem.obj.length - 1) {}
        setQuestion(elem.obj[elem.index].question);
        setQuestionType(elem.obj[elem.index].answerFormat);
        setCurrQuestion(elem.obj[elem.index]);
      }

      setArr([...arr]);
      return;
    }

    if (elem.obj[elem.index].hasNext && res == "yes") {
      arr.push({ obj: elem.obj[elem.index].next, index: 0 });

      setQuestion(elem.obj[elem.index].next[0].question);
      setQuestionType(elem.obj[elem.index].next[0].answerFormat);
      setCurrQuestion(elem.obj[elem.index].next[0]);

      //elem.index = elem.index + 1;

      setArr([...arr]);
    } else {
      elem.index = elem.index + 1;
      setQuestion(elem.obj[elem.index].question);
      setQuestionType(elem.obj[elem.index].answerFormat);
      setCurrQuestion(elem.obj[elem.index]);

      setArr([...arr]);
    }
    console.log(currQuestion);
    setCurrAnswer("");
  }

  function next() {
    if (step < HealthInsuranceQuestion.length - 1) {
      setStep(++step);
    } else {
      navigate("../plans");
    }
  }
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <section class="chat-container">
      <span>
        <div class="questions-container user_name">
          <div class=" cGIqAI dmGYTj hTEcPe chat-question-inner user_name  text_single ">
            <h3 class=" fFoQAK">
              Let's make sure our health offering is right for you
            </h3>
            {/* <p class="StyledElements__QuestionSubHeader-vnab5o-1 ChatQuestionWrapper__SubHeader-sc-1uvt1f0-3 kDtpEG kkAEss">
              Just answer these 3 quick&nbsp;questions
            </p> */}
            <form autocomplete="off" novalidate="" class="bcuijq">
              <div className="question-form" style={{ width: "100%" }}>
                <div style={{ "max-width": "416px" }} class="faXeTW hLEbcr">
                  <div style={{ width: "100%" }} class="cZobsb gLeraX">
                    <div class="cGIqAI gQDvru" style={{ opacity: "1" }}>
                      <div height="auto,57" class="ifOqJt kIFXiF">
                        <div timeout="400" class="flgDQF" reversed="">
                          <div class="cGIqAI gLeraX enter-done">
                            <div class="cDIwQB gQIPbk">
                              {/* {HealthInsuranceQuestion[step].question} */}
                              {question}
                            </div>
                          </div>
                        </div>
                      </div>
                      {questionType == "number" && (
                        <Slider
                          style={{ color: "red", marginTop: "20px" }}
                          aria-label="Always visible"
                          defaultValue={10}
                          getAriaValueText={valuetext}
                          valueLabelDisplay="auto"
                          step={1}
                          value={parseInt(currAnswer)}
                          key={question}
                          onChange={(event, newValue) => {
                            setCurrAnswer(newValue);
                          }}
                          marks={marks}
                        />
                      )}

                      {questionType == "string" &&
                        currQuestion.answerOptions === undefined && (
                          <TextField
                            sx={{
                              marginTop: 4,
                            }}
                            id="filled-basic"
                            fullWidth
                            variant="outlined"
                            spellCheck={false}
                            type="string"
                            value={currAnswer}
                            key={question}
                            onChange={(event) => {
                              setCurrAnswer(event.target.value);
                              console.log(currQuestion);
                            }}
                          />
                        )}

                      {questionType == "string" &&
                        currQuestion.answerOptions != undefined && (
                          <FormControl
                            sx={{
                              marginTop: 4,
                            }}
                            fullWidth
                          >
                            <InputLabel id="demo-simple-select-label">
                              Options
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={currAnswer}
                              label="Options"
                              onChange={(event) => {
                                setCurrAnswer(event.target.value);
                              }}
                            >
                              {currQuestion.answerOptions.map((elem) => {
                                return (
                                  <MenuItem key={elem} value={elem}>
                                    {elem}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        )}

                      {questionType == "boolean" && (
                        <div class="EJVGF eqJfKL">
                          <Button
                            onClick={(e) => nextQ("no")}
                            variant="outlined"
                            class="DaHEG dGJoGc"
                          >
                            No
                          </Button>
                          <Button
                            onClick={(e) => nextQ("yes")}
                            variant="outlined"
                            class="DaHEG dGJoGc"
                          >
                            Yes
                          </Button>
                        </div>
                      )}
                      {(questionType == "string" ||
                        questionType == "number") && (
                        <div class="EJVGF eqJfKL">
                          <Button
                            onClick={(e) => nextQ("next")}
                            variant="outlined"
                            class="DaHEG dGJoGc"
                          >
                            Next
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </span>
    </section>
  );
}
