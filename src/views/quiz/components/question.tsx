import useQuizStore from '@/store';

export default function Question() {
  const { quizQuestions, currentQuestion } = useQuizStore((state) => ({
    quizQuestions: state.quizQuestions,
    currentQuestion: state.currentQuestion,
  }));

  const question = quizQuestions?.[currentQuestion]?.question;

  return (
    <p className="mb-5">
      <span className="mr-2 text-2xl font-bold">Q.</span>
      {question}
    </p>
  );
}
