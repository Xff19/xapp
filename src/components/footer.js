import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { TabBar } from "antd-mobile";
// import {
//   Route,
//   Switch,
//   useNavigate ,
//   useLocation,
//   MemoryRouter as Router,
// } from "react-router-dom";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import Home from "../pages/home.js";
import Todo from "../pages/todo.js";
import Message from "../pages/message.js";
import Me from "../pages/me.js";
import styles from "../styles/footer.scss";

const Bottom = function () {
  const history = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value) => {
    history(value);
  };

  const tabs = [
    {
      key: "/",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/todo",
      title: "待办",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/message",
      title: "消息",
      icon: <MessageOutline />,
    },
    {
      key: "/me",
      title: "我的",
      icon: <UserOutline />,
    },
  ];

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default function Footer() {
  return (
    <Router initialEntries={["/"]}>
      <div className={styles.app}>
        <div className={styles.bottom}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/message" element={<Message />} />
            <Route path="/me" element={<Me />} />
          </Routes>
          <Bottom />{" "}
        </div>
      </div>
    </Router>
  );
}
