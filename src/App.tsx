import { Container, Stack, Typography } from "@mui/material";
import "./App.css";
import { JavaScriptSvg } from "./components/Icons";

function App() {
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
          <Typography variant="h2" component="h1" gutterBottom>
            JavaScript Quizz
          </Typography>
        </Stack>
      </Container>
    </main>
  );
}

export default App;
