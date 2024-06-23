import "./SideBar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
export const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className="sideBar">
      <div className="top">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            onClick={() => setExtended((prev) => !prev)}
            className="menu"
            src={assets.menu_icon}
            alt="img"
          />
        </div>
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="img" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, i) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  key={i}
                  className="recent-entry"
                >
                  <img src={assets.message_icon} alt="img" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="img" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="img" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="img" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};
