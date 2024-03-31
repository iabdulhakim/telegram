import { Paper, Stack } from "@mui/material";


function Message2({ sender }: { sender?: string }) {
  return (
    <Stack direction={sender == "me" ? "row-reverse" : "row"}>
      <Paper
        sx={{
          px: 2,
          py: 1,
          bgcolor: sender == "me" ? "primary.main" : "",
          color: sender ? "white" : "",
        }}
      >
        Hi, bro
      </Paper>
    </Stack>
  );
}

export default Message2;