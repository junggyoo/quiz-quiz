import { Card, CardBody, CardHeader } from '@nextui-org/react';

import Text from '@/components/text';

import { QuizHistory } from '@/types';

interface ReviewNoteProps {
  quizHistory: QuizHistory[];
}

export default function ReviewNote({ quizHistory }: ReviewNoteProps) {
  return (
    <div className="flex flex-col space-y-2 mb-5">
      <Card shadow="sm" radius="sm">
        <CardHeader>
          <Text color="slate-400">
            1.Q In the television show Breaking Bad, what is the
            street name of Walter and Jesse&#039;s notorious product??
          </Text>
        </CardHeader>
        <CardBody>
          <Text size="xs">
            내가 선택한 답:
            <Text size="sm">Blue Sky</Text>
          </Text>
          <Text size="xs">
            정답: <Text size="sm">Blue Sky</Text>
          </Text>
        </CardBody>
      </Card>
      <Card isBlurred>
        <CardHeader>
          <Text>2.Q What does the Prt Sc button do?</Text>
        </CardHeader>
        <CardBody>
          <Text size="xs">
            내가 선택한 답:
            <Text size="sm">Closes all windows</Text>
          </Text>
          <Text size="xs">
            정답: <Text size="sm">Blue Sky</Text>
          </Text>
        </CardBody>
      </Card>
      <Card className="h-full">
        <CardHeader>
          <Text>
            3.Q Which element has the highest melting point?
          </Text>
        </CardHeader>
        <CardBody>
          <Text size="xs">
            내가 선택한 답:
            <Text size="sm">Tungsten</Text>
          </Text>
          <Text size="xs">
            정답: <Text size="sm">Carbon</Text>
          </Text>
        </CardBody>
      </Card>
      <Card className="h-full">
        <CardHeader>
          <Text>
            4.Q Who directed the 2015 movie &quot;The Revenant&quot;?
          </Text>
        </CardHeader>
        <CardBody>
          <Text size="xs">
            내가 선택한 답:
            <Text size="sm">Alejandro G.</Text>
          </Text>
          <Text size="xs">
            정답: <Text size="sm"> Alejandro G.</Text>
          </Text>
        </CardBody>
      </Card>
      <Card className="h-full">
        <CardHeader>
          <Text>
            5.Q What war is Call Of Duty: Black Ops based on?
          </Text>
        </CardHeader>
        <CardBody>
          <Text size="xs">
            내가 선택한 답:
            <Text size="sm">WW3</Text>
          </Text>
          <Text size="xs">
            정답: <Text size="sm">Cold War</Text>
          </Text>
        </CardBody>
      </Card>
      <Card className="h-full">
        <CardHeader>
          <Text>
            5.Q What war is Call Of Duty: Black Ops based on?
          </Text>
        </CardHeader>
        <CardBody>
          <Text size="xs">
            내가 선택한 답:
            <Text size="sm">WW3</Text>
          </Text>
          <Text size="xs">
            정답: <Text size="sm">Cold War</Text>
          </Text>
        </CardBody>
      </Card>
      <Card className="h-full">
        <CardHeader>
          <Text>
            5.Q What war is Call Of Duty: Black Ops based on?
          </Text>
        </CardHeader>
        <CardBody>
          <Text size="xs">
            내가 선택한 답:
            <Text size="sm">WW3</Text>
          </Text>
          <Text size="xs">
            정답: <Text size="sm">Cold War</Text>
          </Text>
        </CardBody>
      </Card>
      <Card className="h-full">
        <CardHeader>
          <Text>
            5.Q What war is Call Of Duty: Black Ops based on?
          </Text>
        </CardHeader>
        <CardBody>
          <Text size="xs">
            내가 선택한 답:
            <Text size="sm">WW3</Text>
          </Text>
          <Text size="xs">
            정답: <Text size="sm">Cold War</Text>
          </Text>
        </CardBody>
      </Card>
    </div>
  );
}
