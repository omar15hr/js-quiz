import { Button } from "@mui/material";
import { useQuestionsStore } from "../store/questions";

const LIMIT_QUESTIONS = 10;

export function Start() {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={{ marginTop: 2, textAlign: "center" }}
    >
      ¡Empezar!
    </Button>
  );
}
