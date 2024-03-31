import { ArrowBackSharp, Send } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Message from "../components/Message";
import Message2 from "../components/Message2";

function ChatRoom() {
  return (
    <div>
      <Paper sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <header className="flex px-4 items-center gap-6 py-3 w-full bg-slate-100">
          <IconButton color="primary" sx={{ display: { sm: "none" } }}>
            <ArrowBackSharp />
          </IconButton>
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Alex
          </Typography>
        </header>

        <Stack justifyContent={"flex-end"} spacing={2} sx={{ px: 2, flex: 1 }}>
          <p>Yesterday</p>
          <Message sender={"me"} />
          <Message2 />
          <p>Today</p>
          <Message sender={"me"} />
          <Message2 />
        </Stack>

        <Box display={"flex"} sx={{ gap: 2 }} m={2}>
          <TextField
            fullWidth
            label="Message..."
            variant="outlined"
            size="small"
          />
          <IconButton color="primary">
            <Send />
          </IconButton>
        </Box>
      </Paper>
    </div>
  );
}

export default ChatRoom;
