import React from "react";

export default function ContactPanel() {
    return (
        <div className="contactPanel" id="bounty">
            <form
                action="mailto:rugseekers@gmail.com"
                method="POST"
                encType="multipart/form-data"
                name="EmailForm"
            >
                Name:
                <br />
                <input type="text" size={19} name="Contact-Name" />
                <br />
                <br />
                Email:
                <br />
                <input type="email" name="Contact-Email" />
                <br />
                <br />
                Message:
                <br />
                <textarea name="Contact-Message" rows={6} cols={20}></textarea>
                <br />
                <br />
                <button type="submit" value="Submit">
                    Send
                </button>
            </form>
        </div>
    );
}
