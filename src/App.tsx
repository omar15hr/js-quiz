import { Container, Stack, Typography } from "@mui/material";
import "./App.css";
import { JavaScriptSvg } from "./components/Icons";
import { Start } from "./components/Start";
import { useQuestionsStore } from "./store/questions";

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

        <Start />
      </Container>
    </main>
  );
}

export default App;
