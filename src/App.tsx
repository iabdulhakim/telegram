import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Chats from "./page/Chats";
import Login from "./page/Login";
import ChatRoom from "./page/ChatRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chats />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/chat-room/:id",
    element: <ChatRoom />,
  },
]);

function App() {
  return (
    <div>
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
