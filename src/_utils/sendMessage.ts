import emailjs from "@emailjs/browser";

async function sendMessage(name: string, email: string, message: string, subject: string) {

    const res = await emailjs.send("service_2b80q3w", "template_5h3nmgp", {
        title: subject,
        name,
        message,
        email,


    }, "1t0zXqmzKmVb4m-ng");

    return res;
}

export default sendMessage;