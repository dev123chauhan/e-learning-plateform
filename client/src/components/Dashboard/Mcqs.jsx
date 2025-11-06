import  { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { OptionItem, OptionsList, QuestionContainer, QuestionText, QuizContainer, QuizTitle, SubmitButton } from '../../styles/mcqStyles';
import { mcqQuestionLists } from '../../lib/mcqQuestionLists';
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
      {mcqQuestionLists.map((q, qIndex) => (
        <QuestionContainer key={qIndex}>
          <QuestionText>{q.question}</QuestionText>
          <OptionsList>
            {q.options.map((option, oIndex) => (
              <OptionItem
                key={oIndex}
                $isSelected={userAnswers[qIndex] === oIndex}
                $isCorrect={q.correctAnswer === oIndex}
                $showResults={showResults}
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