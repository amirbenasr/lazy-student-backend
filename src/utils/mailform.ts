import { Profile, User } from "@prisma/client";
import * as nodemailer from "nodemailer";

export const sendVerificationEmail = (created: User | undefined) => {
  if (!created) {
    return;
  }
  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: { user: "amirbennasr@gmail.com", pass: "dhzoqffztvgxnivb" },
  });

  //   create verification url
  const verificationUrl = `http://localhost:3000/users/verify/${created.verifToken}`;

  var mailOptions = {
    // TODO: 'change from email to server config'
    from: "amirbennasr@gmail.com", // sender address
    to: created.email, // list of receivers
    subject: "Activate Your New Account", // Subject line
    html: getEmailForm(created.username!, created.email, verificationUrl),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(info);
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const getEmailForm = (name: string, email: string, url: string) => {
  const emailHtml = `<table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" height="100%" id="m_2383717971944800137bodyTable" style="border-collapse:collapse;height:100%;margin:0;padding:0;width:100%;background-color:#ffffff" width="100%">
    <tbody><tr>
    <td align="center" height="100%" id="m_2383717971944800137bodyCell" style="height:100%;margin:0;width:100%;padding:10px;border-top:0" valign="top" width="100%">
    
    
    <table border="0" cellpadding="0" cellspacing="0" class="m_2383717971944800137templateContainer" style="border-collapse:collapse;max-width:600px!important;border:0" width="100%">
    <tbody><tr>
    <td bgcolor="#FFFFFF" id="m_2383717971944800137templatePreheader" style="background-color:#ffffff;border-top:0;border-bottom:0;padding-top:9px;padding-bottom:9px" valign="top"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
    <tbody>
    <tr>
    <td valign="top">
    
    
    <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_2383717971944800137mcnTextContentContainer" style="border-collapse:collapse;max-width:390px" width="100%">
    <tbody><tr>
    <td style="width:40px" width="40">
    <img alt="icon.png" height="30" src="https://ci6.googleusercontent.com/proxy/LKHYH8-GmqbOcyvxpIWamNgX7iJx5yNX3hTtWlR92_bLFWgqPDphcCD74zR7gyQ9ZbscDfFik5x-aCcGj2I8W-UAYw8l_OAPqBYNGLJIYyLoV8fkDn9T=s0-d-e1-ft#https://d1pgqke3goo8l6.cloudfront.net/fP3jYd5OSDapZNMDdLaB_email.png" style="border:0;outline:none;text-decoration:none;max-width:100%;margin-top:20px;width:30px;height:30px;margin:0" width="30" class="CToWUd" data-bit="iit">
    </td>
    <td align="left" class="m_2383717971944800137mcnTextContent" style="word-break:break-word;color:#6f6f6f;font-family:Helvetica;font-size:14px;line-height:150%;text-align:left;padding-top:5px;padding-left:0px;padding-bottom:9px;padding-right:0px" valign="top">
                            
                                Lazy-Student
                            </td>
    </tr>
    </tbody></table>
    
    </td>
    <td style="padding-top:5px" valign="top">
    
    <table align="right" border="0" cellpadding="0" cellspacing="0" class="m_2383717971944800137mcnTextContentContainer" style="border-collapse:collapse;max-width:210px" width="100%">
    <tbody><tr>
    <td align="right" class="m_2383717971944800137mcnTextContent" style="word-break:break-word;color:#6f6f6f;font-family:Helvetica;font-size:14px;line-height:150%;text-align:right;padding-top:0;padding-left:0px;padding-bottom:9px;padding-right:0px" valign="top">
    <a href="http://email.email.insomnia.rest/c/eJyMkMFunDAQhp_G3LKyxzY2Bw6JKKqqHtK02W5zQcYeWLfYIGzg9auNuofcev3n_2b0jatLqIAWWLNSMV0xyqC41hUqNVSKiUGaqqeaQ19qIUHYwUhrbeFroAAMQDBxY07CcYEDNVIy1FgBERSD8dPJxzSH6M1pxZSLqb7mvCTCHwm0BFqzLKeE0R0-X7d0snMg0B7Y7x4PAu3eDt_O8Wf1WT39FuH5uMx_hJAE2mkeO-sU1cr1ZuDaISuVNGXPtS17hm7o9QO_3eDtlfAGgPaUGaellYPQUjppZaXVwDjXSCWBcsuhS8dGeMOougcBnd8C4c27zL01b6tFwpu727_cmrAYP0bCm-THuC3FWpvg1x5jNGklgo7vL7FzKFa06JfceVf_n0uRjq3LGJbJZLxhGUN3lp_eyuZtG4_nQ736868vLxepP1an2ZoJa4wPr98_TnZck5_jbdmOa9fDOD89nl-e9h8pl2tzGfmSvha5zquJydjs52imvwEAAP__PPq2eg" style="color:#6a5faf;font-weight:normal;text-decoration:underline" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://email.email.insomnia.rest/c/eJyMkMFunDAQhp_G3LKyxzY2Bw6JKKqqHtK02W5zQcYeWLfYIGzg9auNuofcev3n_2b0jatLqIAWWLNSMV0xyqC41hUqNVSKiUGaqqeaQ19qIUHYwUhrbeFroAAMQDBxY07CcYEDNVIy1FgBERSD8dPJxzSH6M1pxZSLqb7mvCTCHwm0BFqzLKeE0R0-X7d0snMg0B7Y7x4PAu3eDt_O8Wf1WT39FuH5uMx_hJAE2mkeO-sU1cr1ZuDaISuVNGXPtS17hm7o9QO_3eDtlfAGgPaUGaellYPQUjppZaXVwDjXSCWBcsuhS8dGeMOougcBnd8C4c27zL01b6tFwpu727_cmrAYP0bCm-THuC3FWpvg1x5jNGklgo7vL7FzKFa06JfceVf_n0uRjq3LGJbJZLxhGUN3lp_eyuZtG4_nQ736868vLxepP1an2ZoJa4wPr98_TnZck5_jbdmOa9fDOD89nl-e9h8pl2tzGfmSvha5zquJydjs52imvwEAAP__PPq2eg&amp;source=gmail&amp;ust=1676628909323000&amp;usg=AOvVaw3XjBaopsNBUQaCIrpAS6Uz">View in browser</a>
    </td>
    </tr>
    </tbody></table>
    
    
    </td>
    </tr>
    </tbody>
    </table></td>
    </tr>
    <tr>
    <td bgcolor="#FFFFFF" id="m_2383717971944800137templateBody" style="background-color:#ffffff;border-top:0;border-bottom:2px solid #eaeaea;padding-top:0;padding-bottom:9px" valign="top"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;min-width:100%" width="100%">
    <tbody>
    <tr>
    <td style="padding-top:9px" valign="top">
    
    
    <table align="left" border="0" cellpadding="0" cellspacing="0" class="m_2383717971944800137mcnTextContentContainer" style="border-collapse:collapse;max-width:100%;min-width:100%" width="100%">
    <tbody><tr>
    <td align="left" class="m_2383717971944800137mcnTextContent" style="word-break:break-word;text-align:left;padding:0px 0px 9px;color:#6f6f6f;font-family:&quot;Helvetica Neue&quot;,Helvetica,Arial,Verdana,sans-serif;font-size:16px;line-height:150%" valign="top">
    <p align="center" style="margin:20px 0;padding:0;color:#6f6f6f;font-family:Helvetica;font-size:16px;line-height:150%;text-align:center;margin-bottom:0">
    <img height="90" src="https://ci3.googleusercontent.com/proxy/n43jKcu4blz3cvZFENYILJBxc6wxNoNoyDt_6WztXH2voQkxUYx43dz1cgWk9VeASRiGorWcTyOCleU3-TiBKJUxnVIIjZJIb95TTh_YWVLvMsZLFwKODVhsUnQ=s0-d-e1-ft#https://www.gravatar.com/avatar/eb10d94c13d58702e6ae2ed253803239?size=200" style="border:0;outline:none;text-decoration:none;max-width:100%;width:90px;height:90px;border-radius:50%;margin-top:0;display:block;margin:auto" width="90" class="CToWUd" data-bit="iit">
    </p>
    <h2 align="center" style="display:block;margin:30px 0 20px 0;padding:0;color:#5f5f5f;font-family:Helvetica;font-size:22px;font-style:normal;font-weight:bold;line-height:125%;letter-spacing:normal;text-align:center;margin-top:11px">
      Hi ${name}
    </h2>
    <p align="center" style="margin:20px 0;padding:0;color:#6f6f6f;font-family:Helvetica;font-size:16px;line-height:150%;text-align:center;margin-top:0">
    </p><div style="text-align:center;margin-top:2em;margin-bottom:2em"><a align="center" bgcolor="#FFFFFF" href="${url}">Confirm Email Address</a></div>
    <br>
    <p align="left" style="margin:20px 0;padding:0;color:#6f6f6f;font-family:Helvetica;font-size:16px;line-height:150%;text-align:left">
    Please confirm that you signed up with <code><a href="mailto:amirbennasr@gmail.com" target="_blank">amirbennasr@gmail.com</a></code>. Some features of the app may be limited until you do.
    </p>
    <p align="left" style="margin:20px 0;padding:0;color:#6f6f6f;font-family:Helvetica;font-size:16px;line-height:150%;text-align:left">
      If the link above does not work, copy and paste this one into your browser:<br>
    <code style="font-size:13px"><a href="${url}" target="_blank" >https://api.insomnia.rest/<wbr><span class="il">activate</span>/e7f887926</a></code>
    </p>
    
    </tbody></table>
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody></table>
    
    
    <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;display:inline">
    <tbody><tr>
    <td style="padding-right:10px;padding-bottom:9px" valign="top">
    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%">
    <tbody><tr>
    <td align="center" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px" valign="middle">
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="">
    <tbody><tr>
    <td align="center" valign="middle" width="24">
    <a href="http://email.email.insomnia.rest/c/eJxUkE1v3CAQhn8Nvu3KDAazBx8SuT5UPVRps0pzsTAMDqoBi4_dv185Sg97fd555tWMGQRcoG1woKKn8kJbCs3HYJEjWg1WXHqKYKXVF7kwwxbOW4GycQO0ABSgo93hnDvDOrSt4pyixAuQrkWv3HZ2IUcfnDonzKXZho9S9kzYE4GJwPSQEphM1NVjKKq4GAhMue57TOWkgjlZRLMo_fcw2VSLn_O9EjYC5z0BcQCPxlVP2PjZ_QVzrEkjYeP_si-uld-VWwNhY3ZrqHuTBuVdWjAElRPp2vXzAh19k1Cj28vszLDFddamb2VvFmWZNEhFz5VYmNRioWjsIk-syfc6F_T7pgoeWkE_X_m3dzG-1_X-896_uuuf7y9vXD6OblGrDQcMp9dfj8kNU3YxHMtumOYF1vj8dH15vv3ORaTxbWV7_tGUoSQVstLHB9X2LwAA__-bsqJz" title="Visit Insomnia Website" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://email.email.insomnia.rest/c/eJxUkE1v3CAQhn8Nvu3KDAazBx8SuT5UPVRps0pzsTAMDqoBi4_dv185Sg97fd555tWMGQRcoG1woKKn8kJbCs3HYJEjWg1WXHqKYKXVF7kwwxbOW4GycQO0ABSgo93hnDvDOrSt4pyixAuQrkWv3HZ2IUcfnDonzKXZho9S9kzYE4GJwPSQEphM1NVjKKq4GAhMue57TOWkgjlZRLMo_fcw2VSLn_O9EjYC5z0BcQCPxlVP2PjZ_QVzrEkjYeP_si-uld-VWwNhY3ZrqHuTBuVdWjAElRPp2vXzAh19k1Cj28vszLDFddamb2VvFmWZNEhFz5VYmNRioWjsIk-syfc6F_T7pgoeWkE_X_m3dzG-1_X-896_uuuf7y9vXD6OblGrDQcMp9dfj8kNU3YxHMtumOYF1vj8dH15vv3ORaTxbWV7_tGUoSQVstLHB9X2LwAA__-bsqJz&amp;source=gmail&amp;ust=1676628909323000&amp;usg=AOvVaw0fXlXzryE7ifQcW40DII9N"><img height="auto" src="https://ci5.googleusercontent.com/proxy/FR4I0VM10pxcUwbQ63iIF6cAOqyzEbM1yC4ru84XQ1cT1RbvvmtJzUt4RdH1WUB452ecisGFRwh877ppJp5BhUmQhUWIABs5JUY80JFlBF08huivKdmS6R-dPg=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-link-48.png" style="border:0;height:auto;outline:none;text-decoration:none;max-width:100%;width:100%;margin-top:20px;display:block" width="100%" class="CToWUd" data-bit="iit"></a>
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody></table>
    
    
    <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;display:inline">
    <tbody><tr>
    <td style="padding-right:0;padding-bottom:9px" valign="top">
    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="100%">
    <tbody><tr>
    <td align="center" style="padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:9px" valign="middle">
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse" width="">
    <tbody><tr>
    <td align="center" valign="middle" width="24">
    <a href="mailto:support@insomnia.rest" title="Email Insomnia Support" target="_blank"><img height="auto" src="https://ci4.googleusercontent.com/proxy/CN2TGY41iQ8-JlJusCJqa9ZgFzIbwDfrZalQQwICUriegku1Wn699FFjD8P16f7TcJfMjs2079iiaNHlTMEB_ycokWszqlIE6C2ARHGgBzltagK-BZ2ZBFztsd76V5Eq0fLlG4R8=s0-d-e1-ft#https://cdn-images.mailchimp.com/icons/social-block-v2/color-forwardtofriend-48.png" style="border:0;height:auto;outline:none;text-decoration:none;max-width:100%;width:100%;margin-top:20px;display:block" width="100%" class="CToWUd" data-bit="iit"></a>
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody></table>
    
    
    </td>
    </tr>
    
    </tbody></table>
    </td>
    </tr>
    <tr><td align="center" class="m_2383717971944800137mcnTextContent" style="word-break:break-word;padding:0px 0px 9px;color:#666;font-family:&quot;Helvetica Neue&quot;,Helvetica,Arial,Verdana,sans-serif;font-size:14px;line-height:250%;text-align:center" valign="top">
    © L-S, Inc
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody></table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody></table>
    
    
    </td>
    </tr>
    </tbody></table>`;

  return emailHtml;
};
