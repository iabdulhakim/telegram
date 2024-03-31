import { Paper, Stack } from "@mui/material";
import DoneAllIcon from '@mui/icons-material/DoneAll';


function Message({ sender }: { sender?: string }) {
  return (
    <Stack direction={sender == "me" ? "row-reverse" : "row"}>
      <Paper
        sx={{
          px: 2,
          py: 1,
          bgcolor: sender == "me" ? "success.main" : "",
          color: sender ? "white" : "",
        }}
      >
        hello
        <DoneAllIcon sx={{height:14,}}></DoneAllIcon>
      </Paper>
    </Stack>
  );
}

export default Message;
