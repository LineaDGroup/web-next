// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SG_KEY || 'SG.undefined')

type Response = {
  success: boolean;
  body?: any;
  code: number;
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {

  try {
    
    const body = JSON.parse(req.body);
    if(body['token'] === undefined || body['token'] === '' || body['token'] === null) {
      return res.status(403).json({success: false,code : 1,message : "No token provided"});
    }
    // Put your secret key here.
    var secretKey = "***REMOVED***";
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + body['token'] + "&remoteip=" + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
  
    console.log(verificationUrl);
    const response = await axios.get(verificationUrl);
  
    const responseBody = response.data;
    console.log(responseBody);
    // Success will be true or false depending upon captcha validation.
    if(responseBody.success !== undefined && !responseBody.success) {
      return res.status(403).json({success: false,code : 1,message : "Recaptcha validation failed"});
    }
  
    const msg = {
      to: 'eduardo@lineadgroup.com', // Change to your recipient
      from: 'eduardo@lineadgroup.com', // Change to your verified sender
      subject: 'Nuevo contacto',
      text: `Nuevo contacto de ${body.email}`,
      html: `<ul>${Object.keys(body).map(key => 
          `<li>${key}: ${body[key]}</li>`
        ).join('<br/>')}
        </ul>`,
    }
  
    const mailResponse = await 
    sgMail
    .send(msg)
  } catch (error) {
    console.error(JSON.stringify(error))
    return res.status(403).json({success: false,code : 2,message : "Hubo un error al enviar el formulario, intente más tarde"});
  }

  res.status(200).json({ success:true, code: 200,message: 'Gracias por contactarse' })
}
