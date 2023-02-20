export const resetEmail = (username: string, url: string) => {
  return `<!DOCTYPE html>
  <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" style="color-scheme: light dark;">
  <head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <style>
      td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
    </style>
    <![endif]-->
    <style>.space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0 !important;
    margin-right: calc(8px * var(--tw-space-x-reverse)) !important;
    margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse))) !important;
  }
  .space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0 !important;
    margin-right: calc(16px * var(--tw-space-x-reverse)) !important;
    margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse))) !important;
  }
  .border-0 {
    border: 0;
  }
  :root {
    color-scheme: light dark;
  }
  .hover-fill-green-500:hover {
    fill: #22c55e !important;
  }</style></head>
  <body style="-webkit-font-smoothing: antialiased; word-break: break-word; margin: 0; width: 100%; padding: 0">
    <div role="article" aria-roledescription="email" aria-label lang="en">    <table style="width: 100%; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y); background-color: #eeeeee; text-align: center; vertical-align: middle" valign="middle" cellpadding="0" cellspacing="0" role="presentation">
        <tbody style="display: table-row-group">
          <tr>
            <td style="max-width: 600px; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y); padding-left: 112px; padding-right: 112px; padding-top: 24px">
              <table style="height: 128px; width: 100%; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y); background-color: #fff" cellpadding="0" cellspacing="0" role="presentation">
                <tbody style="vertical-align: middle" valign="middle">
                  <tr>
                    <td style="padding-top: 16px">
                      <p style="font-size: 20px; font-weight: 600">Lazy-Student</p>
                      <p style="font-weight: 300">Reset your Password</p>                    <div style="margin-left: 96px; margin-right: 96px; text-align: left">
                        <hr style="border: 0; height: 1px; border-width: 0px; background-color: #eeeeee">
                        <div>
                          <p>Hi ${username},</p>
                          <p>
                            To set up a new password to your LS account, click
                            "Reset Your Password" below, or use this link:
                          </p>                        <a href="${url}" style="padding-top: 16px; padding-bottom: 16px; font-weight: 600; color: #22c55e">${url}</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 16px; padding-bottom: 16px"> <a href="${url}" style="text-decoration: none; display: inline-block; border-radius: 6px; background-color: #22c55e; padding: 16px; font-size: 16px; color: #fff">Reset Your Password</a>
                    </td>
                  </tr>                <tr style="text-align: left">
                    <td>
                      <div style="margin-left: 96px; margin-right: 96px; padding-bottom: 16px">
                        <p>Thanks,</p>
                        <p>The Lazy-Student Team.</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>        <tr style="height: 48px; background-color: #eeeeee; text-align: center; font-weight: 600">
            <td class="space-x-4" style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 16px; padding-top: 16px">
              <div class="space-x-2" style="display: flex; justify-content: center">
                <a href>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hover-fill-green-500">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="http://facebook.com/lazystudentco" style="--tw-space-x-reverse: 0; margin-right: calc(8px * var(--tw-space-x-reverse)); margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hover-fill-green-500">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>            <p style="margin:auto;font-weight: 100; --tw-space-x-reverse: 0; margin-right: calc(16px * var(--tw-space-x-reverse)); margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)))">
                The link will expire in 24 hours. If nothing happens after
                clicking, copy, and paste the link in your browser.
              </p>
              <br style="--tw-space-x-reverse: 0; margin-right: calc(16px * var(--tw-space-x-reverse)); margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)));">
            </td>
          </tr>        <tr>
            <td style="padding-left: 128px; padding-right: 128px; color: #999999">
              <span>
                This email was intended for ${username}, because you signed up for
                Lazy-Student | The links in this email will always direct to
                <a href="https://lazy-student.com" style="font-weight: 400; color: #22c55e">https://lazy-student.com</a>
                <br>
                © LS International Ltd. 2023
              </span>
            </td>
          </tr>
        </tbody>
      </table>  </div>
  </body>
  </html>
  
    `;
};

export const welcomeEmail = (username: string, url: string) => {
  return `<!DOCTYPE html>
  <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" style="color-scheme: light dark;">
  <head>
    <meta charset="utf-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">
    <!--[if mso]>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <style>
      td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
    </style>
    <![endif]-->
    <style>.space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0 !important;
    margin-right: calc(8px * var(--tw-space-x-reverse)) !important;
    margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse))) !important;
  }
  .space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0 !important;
    margin-right: calc(16px * var(--tw-space-x-reverse)) !important;
    margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse))) !important;
  }
  .border-0 {
    border: 0;
  }
  :root {
    color-scheme: light dark;
  }
  .hover-fill-green-500:hover {
    fill: #22c55e !important;
  }</style></head>
  <body style="-webkit-font-smoothing: antialiased; word-break: break-word; margin: 0; width: 100%; padding: 0">
    <div role="article" aria-roledescription="email" aria-label lang="en">    <table style="width: 100%; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y); background-color: #eeeeee; text-align: center; vertical-align: middle" valign="middle" cellpadding="0" cellspacing="0" role="presentation">
        <tbody style="display: table-row-group">
          <tr>
            <td style="max-width: 600px; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y); padding-left: 112px; padding-right: 112px; padding-top: 24px">
              <table style="height: 128px; width: 100%; --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y); background-color: #fff" cellpadding="0" cellspacing="0" role="presentation">
                <tbody style="vertical-align: middle" valign="middle">
                  <tr>
                    <td style="padding-top: 16px">
                      <p style="font-size: 20px; font-weight: 600">Lazy-Student</p>
                      <p style="font-weight: 300">Verify Your Account</p>
                      <div style="margin-left: 96px; margin-right: 96px; text-align: left">
                        <hr style="border: 0; height: 1px; border-width: 0px; background-color: #dad9d9">
                        <div>
                          <p>Dear ${username},</p>
                          <p>
                            Welcome to Lazy-Student! We are excited to have
                            you as a member of our community. To ensure that your
                            account is secure and to access all the features of
                            our website, we need to verify your account.
                          </p>
                          <a href="${url}" style="font-weight: 600; color: #22c55e">${url}</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 16px; padding-bottom: 16px">
                      <a href="${url}" style="text-decoration: none; display: inline-block; border-radius: 6px; background-color: #22c55e; padding: 16px; font-size: 16px; color: #fff">Verify Your Account</a>
                    </td>
                  </tr>                <tr style="text-align: left">
                    <td>
                      <div style="margin-left: 96px; margin-right: 96px; padding-bottom: 16px">
                        <p>Thanks,</p>
                        <p>The Lazy-Student Team.</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>        <tr style="height: 48px; background-color: #eeeeee; text-align: center; font-weight: 600">
            <td class="space-x-4" style="display: flex; flex-direction: column; justify-content: center; padding-bottom: 16px; padding-top: 16px">
              <div class="space-x-2" style="display: flex; justify-content: center">
                <a href>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hover-fill-green-500">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="http://facebook.com/lazystudentco" style="--tw-space-x-reverse: 0; margin-right: calc(8px * var(--tw-space-x-reverse)); margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="hover-fill-green-500">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>            <br style="--tw-space-x-reverse: 0; margin-right: calc(16px * var(--tw-space-x-reverse)); margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)));">
            </td>
          </tr>        <tr>
            <td style="padding-left: 128px; padding-right: 128px; color: #999999">
              <span>
                This email was intended for ${username}, because you signed up for
                Lazy-Student | The links in this email will always direct to
                <a href="https://lazy-student.com" style="font-weight: 400; color: #22c55e">https://lazy-student.com</a>
                <br>
                © LS International Ltd. 2023
              </span>
            </td>
          </tr>
        </tbody>
      </table>  </div>
  </body>
  </html>
  
    `;
};
