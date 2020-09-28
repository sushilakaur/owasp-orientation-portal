import React, { useState, useEffect } from "react";
import { ButtonGroup } from "react-bootstrap";
import axios from "../util/axios";
import { Redirect } from "react-router-dom";

import "../Components/quiz.css";

import FunQuiz from "./FunQuiz";

const FunQuizStartPage = () => {
  const [start, setStart] = useState(false);
  const [user, setUser] = useState({});
  const submit = useState(false);
  const [questions, setQuestions] = useState([
    {
      questionStatement: "STATMENT 1",
      options: ["option 1-1", "option 1-2", "option 1-3", "option 1-4"],
    },
    {
      questionStatement: "STATMENT 2",
      options: ["option 2-1", "option 2-2", "option 2-3", "option 2-4"],
    },
    {
      questionStatement: "STATMENT 3",
      options: ["option 2-1", "option 2-2", "option 2-3", "option 2-4"],
    },
    {
      questionStatement: "STATMENT 4",
      options: ["option 2-1", "option 2-2", "option 2-3", "option 2-4"],
    },
    {
      questionStatement: "STATMENT 5",
      options: ["option 2-1", "option 2-2", "option 2-3", "option 2-4"],
    },
    {
      questionStatement: "STATMENT 6",
      options: ["option 2-1", "option 2-2", "option 2-3", "option 2-4"],
    },
  ]);
  useEffect(() => {
    // async function  getQuestions() {
    //     try{
    //         const {data} = await axios.get('')//!add route
    //         console.log(data)
    //         setQuestions(data)
    //     } catch(err){
    //         setQuestions([])
    //     }
    // }
    // getQuestions();
  }, []);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    let start = localStorage.getItem("session*&start");
    if (!start) {
      start = String.fromCharCode(0);
    }
    setStart(start.charCodeAt(0) === 1 ? true : false);
  }, []);

  function startQuiz() {
    localStorage.setItem("session*&start", String.fromCharCode(1));
    localStorage.setItem("session#hash%20t", String.fromCharCode(0));
    localStorage.setItem("session_$index%", String.fromCharCode(0 * 2 + 6));
    setStart(true);
  }
  //! check if quiz start from backend
  //! load questions from

  if (!user) {
    return <Redirect to="/" />;
  }
  if (!questions.length) return <Redirect to="/dashboard" />; //! local storage
  return (
    <>
      {start ? (
        <FunQuiz submit={submit} user={user} questions={questions} />
      ) : (
        <div className="quiz_body">
          <div className="container">
            <div className="row justify-content-center">
              <img
                src="IMAGES/owasp_logo-13.png"
                style={{ height: "60px" }}
                className="mt-3  mb-3"
              />
            </div>
            <div className="row justify-content-center mt-3 mb-4">
              <h1 className="quiz_heading">
                <span>FUN</span> QUIZ
              </h1>
            </div>
            <div className="mb-2 question">
              <div className="container">
                <div className="row justify-content-center">
                  <ButtonGroup className="m-2 ml-4 mr-4">
                    <button
                      className="btn blue_btn"
                      onClick={() => startQuiz()}
                    >
                      Start
                    </button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* </Switch> */}
    </>
  );
};

export default FunQuizStartPage;
