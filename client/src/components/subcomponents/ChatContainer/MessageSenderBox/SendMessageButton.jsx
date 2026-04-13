import assets from "../../../../assets/assets";

const SendMessageButton = ({ disabled }) => {
    return (
        <button
            type="submit"
            aria-label="Send message"
            className="cursor-pointer opacity-95 transition hover:scale-105 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            disabled={disabled}
        >
            <img src={assets.send_button} alt="" className="h-10 w-10" />
        </button>
    );
};

export default SendMessageButton;
