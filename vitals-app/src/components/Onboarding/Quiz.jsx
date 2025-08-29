import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { mockQuizzes } from "../../api/mockApi";

const Quiz = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const industry = localStorage.getItem("industry");

  useEffect(() => {
    if (industry) setQuestions(mockQuizzes[industry]);
  }, [industry]);

  const handleChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const handleSubmit = () => {
    localStorage.setItem("quizResults", JSON.stringify(answers));
    navigate("/onboarding/next-steps");
  };

  return (
    <div className="container mt-5">
      <h2>Quiz</h2>
      {questions.map((q) => (
        <div key={q.id} className="my-3">
          <p>{q.question}</p>
          {q.options.map((opt) => (
            <div className="form-check" key={opt}>
              <input className="form-check-input" type="radio" name={`q${q.id}`} value={opt} onChange={() => handleChange(q.id, opt)} />
              <label className="form-check-label">{opt}</label>
            </div>
          ))}
        </div>
      ))}
      <button className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Quiz;
