import { Card, CardBody, CardHeader, Code } from '@nextui-org/react';

import { QuizHistory } from '@/types';

interface ReviewNoteProps {
  quizHistory: QuizHistory[];
}

export default function ReviewNote({ quizHistory }: ReviewNoteProps) {
  return (
    <div className="flex flex-col space-y-2 mb-5 ">
      {quizHistory.map((quiz, index) => {
        const { question, userAnswer, correctAnswer, isCorrect } =
          quiz;
        const numbering = index + 1;

        return (
          <Card shadow="sm" radius="sm" key={index}>
            <CardHeader>
              <p className="text-gray-600 text-base">
                {isCorrect ? '✅' : '❌'}{' '}
                <span className="mr-1 text-lg font-semibold">
                  {numbering}.Q
                </span>
                {question}
              </p>
            </CardHeader>
            <CardBody>
              <Code className="mb-1">
                <span className="text-xs text-gray-600">
                  내가 선택한 답:
                  <span
                    className="ml-1 text-sm"
                    data-testid={`user-answer-${index}`}
                  >
                    {userAnswer}
                  </span>
                </span>
              </Code>
              <Code color="danger">
                <span className="text-xs text-gray-600">
                  정답:
                  <span
                    className="ml-1 text-sm"
                    data-testid={`correct-answer-${index}`}
                  >
                    {correctAnswer}
                  </span>
                </span>
              </Code>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
