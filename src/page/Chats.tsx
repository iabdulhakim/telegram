import { Grid, List, Paper } from "@mui/material";
import ChatItem from "../components/ChatItem";
import ChatItem2 from "../components/ChatItem2";
import ChatItem3 from "../components/ChatItem3";
import ChatRoom from "./ChatRoom";
function Chats() {
  return (
    <Grid container>
      <Grid
        xs={12}
        sm={4}
        sx={{ width: "100%", height: "100%", px: "24px", py: "10px" }}
      >
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ChatItem2 />
          <ChatItem3 />
          <ChatItem />
          <ChatItem2 />
          <ChatItem />
        </List>
      </Grid>
      <Grid sx={{ height: "100vh", display: { xs: "none", sm:"block" } }} sm={8} >
        <Paper sx={{ height: "100vh" }}>
          <ChatRoom />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Chats;
