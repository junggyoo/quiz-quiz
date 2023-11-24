interface QuestionProps {
  question: string;
  numbering: number;
}

export default function Question({
  question,
  numbering,
}: QuestionProps) {
  return (
    <p className="mb-5">
      <span className="mr-2 text-2xl font-bold">{numbering}.Q</span>
      {question}
    </p>
  );
}
