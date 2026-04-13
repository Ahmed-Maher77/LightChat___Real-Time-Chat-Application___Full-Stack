import assets from "../../../assets/assets";
import { useState } from "react";

const MessageSenderBox = () => {
    const [message, setMessage] = useState("");

  return (
    <div className="absolute left-1/2 translate-[-50%] bottom-20 w-[100% - 1.25rem]">
      <fieldset>
        <input 
          type="text" 
          name="type-message" 
          id="type-message" 
          placeholder="Type a message..." 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div id="send-options">
            <button type="button" aria-label="Add Attachment">
                {/* /////////////// + icon */}
                <img src={assets.attachment_icon} alt="Add Attachment" className="h-6 w-6" />
                <div className="options-menu">
                    <button>
                        <i></i>
                        <span>Attach A Document</span>
                    </button>
                    <button>
                        <img src={assets.gallery_icon} alt="Attach An Image" />
                        <span>Attach An Image</span>
                    </button>
                    <button>
                        <i></i>
                        <span>Record A Voice Message</span>
                    </button>
                </div>
            </button>
        </div>
      </fieldset>
        <button type="submit" aria-label="Send Message" className="disabled:bg-gray-600 cursor-not-allowed" disabled={!message.trim()}>
            <img src={assets.send_icon} alt="Send Message" className="h-6 w-6" />
        </button>
    </div>
  )
}

export default MessageSenderBox
