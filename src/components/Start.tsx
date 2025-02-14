import { Button } from "@mui/material";
import { useQuestionsStore } from "../store/questions";

export function Start () {

  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(5);
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      ¡Empezar!
    </Button>
  )
}