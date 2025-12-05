/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	PORT
	TO_EMAIL
	FROM_EMAIL
	PASS
	HOST
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    // Allow POST only
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method Not Allowed" }),
      };
    }

    // Parse JSON body
    const body = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: Number(process.env.PORT),
      secure: false,
      auth: {
        user: process.env.HOST,
        pass: process.env.PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: body.email,
      subject: body.subject,
      html: body.message,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Email sent successfully" }),
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: err.message }),
    };
  }
};
