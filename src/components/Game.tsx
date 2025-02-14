import { Card,Typography } from "@mui/material"
import { useQuestionsStore } from "../store/questions";
import { type Question as QuestionType } from "../interfaces/types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Question = ({info}: {info: QuestionType}) => {
  return (
    <Card variant="outlined" sx={{ textAlign: "left", bgcolor: '#222', p: 2,  }}>
      <Typography variant="h5" >
        {info.question}
      </Typography>

      <SyntaxHighlighter language="javascript" style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>
    </Card>
  )
}

export function Game () {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion); 

  const questionInfo = questions[currentQuestion];

  return (
    <div>
      <Question info={questionInfo} />
    </div>
  )
}