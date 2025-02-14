import { Container, Stack, Typography } from "@mui/material";
import "./App.css";
import { JavaScriptSvg } from "./components/Icons";
import { Start } from "./components/Start";
import { useQuestionsStore } from "./store/questions";
import { Game } from "./components/Game";


function App() {

  const questions = useQuestionsStore((state) => state.questions);
  console.log(questions); 
  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          justifyContent={"center"}
        >
          <JavaScriptSvg />
          <Typography variant="h3" component="h1" gutterBottom>
            JavaScript Quizz
          </Typography>
        </Stack>

        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}

        
      </Container>
    </main>
  );
}

export default App;
