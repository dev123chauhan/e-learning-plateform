import  { useState } from 'react';
import styled from 'styled-components';
import { CheckCircle2, XCircle } from 'lucide-react';

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: 0
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: [
      "text-color",
      "font-color",
      "color",
      "text-style"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: [
      "Number",
      "Boolean",
      "String",
      "Float"
    ],
    correctAnswer: 3
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 2
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: [
      "<css>",
      "<script>",
      "<style>",
      "<stylesheet>"
    ],
    correctAnswer: 2
  },
  {
    question: "Which is the correct CSS syntax?",
    options: [
      "body:color=black;",
      "{body;color:black;}",
      "body {color: black;}",
      "{body:color=black;}"
    ],
    correctAnswer: 2
  },
  {
    question: "How do you insert a comment in a CSS file?",
    options: [
      "// this is a comment",
      "/* this is a comment */",
      "' this is a comment",
      "// this is a comment //"
    ],
    correctAnswer: 1
  },
  {
    question: "Which property is used to change the background color?",
    options: [
      "bgcolor",
      "color",
      "background-color",
      "background"
    ],
    correctAnswer: 2
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "v carName;",
      "variable carName;",
      "var carName;",
      "let carName;"
    ],
    correctAnswer: 2
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: [
      "-",
      "*",
      "=",
      "x"
    ],
    correctAnswer: 2
  }
];

const QuizContainer = styled.div`
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

const QuizTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #49BBBD;
`;

const QuestionContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const QuestionText = styled.p`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const OptionItem = styled.div`
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  ${({ isSelected, isCorrect, showResults }) => {
    if (showResults) {
      if (isCorrect) {
        return `
          background-color: #d1fae5;
          border-color: #34d399;
        `;
      } else if (isSelected) {
        return `
          background-color: #fee2e2;
          border-color: #f87171;
        `;
      }
    } else if (isSelected) {
      return `
        background-color: #dbeafe;
        border-color: #3b82f6;
      `;
    }
    return `
      &:hover {
        background-color: #f3f4f6;
      }
    `;
  }}
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #49BBBD;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #49BBBD;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const Mcqs = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex, optionIndex) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <QuizContainer>
      <QuizTitle>Html Css & JavaScript MCQ Quiz</QuizTitle>
      {questions.map((q, qIndex) => (
        <QuestionContainer key={qIndex}>
          <QuestionText>{q.question}</QuestionText>
          <OptionsList>
            {q.options.map((option, oIndex) => (
              <OptionItem
                key={oIndex}
                isSelected={userAnswers[qIndex] === oIndex}
                isCorrect={q.correctAnswer === oIndex}
                showResults={showResults}
                onClick={() => handleAnswer(qIndex, oIndex)}
              >
                <span>{option}</span>
                {showResults && userAnswers[qIndex] === oIndex && (
                  q.correctAnswer === oIndex ? (
                    <CheckCircle2 color="#34d399" size={20} />
                  ) : (
                    <XCircle color="#f87171" size={20} />
                  )
                )}
              </OptionItem>
            ))}
          </OptionsList>
        </QuestionContainer>
      ))}
      <SubmitButton
        onClick={handleSubmit}
        disabled={showResults}
      >
        {showResults ? 'Quiz Completed' : 'Submit Answers'}
      </SubmitButton>
    </QuizContainer>
  );
};

export default Mcqs;