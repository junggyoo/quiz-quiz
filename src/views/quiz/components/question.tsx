interface QuestionProps {
  question: string;
}

export default function Question({ question }: QuestionProps) {
  return (
    <p className="mb-10">
      <span className="mr-5 text-2xl font-bold">Q.</span>
      {question}
    </p>
  );
}
