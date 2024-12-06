

import axios from "axios";


export const sendconfiramtionEmail = async (user,details, orderId, curtime) => {

    const formatDate = (isoString) => {
        const date = new Date(isoString);
      
        // Options for the date format
        const options = { 
          month: 'short', // Get the short month (e.g., NOV)
          day: 'numeric', // Get the numeric day (e.g., 23)
          year: 'numeric' // Get the full year (e.g., 2024)
        };
      
        // Use the built-in `toLocaleDateString` method to format the date
        return date.toLocaleDateString('en-US', options).toUpperCase(); // Convert to uppercase for month
      };

    const orderid = orderId;
    const orderdate = formatDate(curtime);
   
    const price = details.price;
    const email = user.email;
    const name = details.name;
    const mob = details.phone;
    const address = `${details.flat}, ${details.street}, ${details.district}, ${details.state}, ${details.pin}`;

   const orderComfirmation = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  dir="ltr"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>New Template</title>
    <!--[if (mso 16)
      ]><style type="text/css">
        a {
          text-decoration: none;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9
      ]><noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: block !important;
      }
      .rollover span {
        font-size: 0px;
      }
      u + .body img ~ div div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors],
      #MessageViewBody a {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      @media only screen and (max-width: 600px) {
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-p-default {
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 36px !important;
          text-align: left;
        }
        h2 {
          font-size: 26px !important;
          text-align: left;
        }
        h3 {
          font-size: 20px !important;
          text-align: left;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 36px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 12px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 14px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 14px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover span,
        .es-m-txt-c .rollover span,
        .es-m-txt-l .rollover span {
          line-height: 0 !important;
          font-size: 0 !important;
          display: block;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 20px !important;
          padding: 10px 20px 10px 20px !important;
          line-height: 120% !important;
        }
        a.es-button,
        button.es-button,
        .es-button-border {
          display: inline-block !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .h-auto {
          height: auto !important;
        }
      }
      @media screen and (max-width: 384px) {
        .mail-message-content {
          width: 414px !important;
        }
      }
    </style>
  </head>
  <body class="body" style="width: 100%; height: 100%; padding: 0; margin: 0">
    <div
      dir="ltr"
      class="es-wrapper-color"
      lang="en"
      style="background-color: #fafafa"
    >
      <!--[if gte mso 9
        ]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill> </v:background
      ><![endif]-->
      <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        class="es-wrapper"
        role="none"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-header"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-header-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td align="left" style="padding: 20px; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              class="es-m-p0r"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                      font-size: 0px;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://imartifex.live"
                                      style="
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #666666;
                                        font-size: 14px;
                                      "
                                      ><img
                                       src="https://i.ibb.co/rm4XX3V/tilogo-Kittl.jpg" 
                                        alt="Logo"
                                        width="200"
                                        title="Logo"
                                        style="
                                          display: block;
                                          font-size: 12px;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                           border-radius:1rem;
                                        "
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-content"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-content-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#ffffff"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 15px;
                          padding-right: 20px;
                          padding-left: 20px;
                          background-color: #ffffff;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                      padding-top: 10px;
                                      font-size: 0px;
                                    "
                                  >
                                    <img
                                      src="https://eppiilo.stripocdn.email/content/guids/CABINET_54100624d621728c49155116bef5e07d/images/84141618400759579.png"
                                      alt=""
                                      width="100"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                      height="98"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                    "
                                  >
                                    <h1
                                      class="es-m-txt-c"
                                      style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 46px;
                                        font-style: normal;
                                        font-weight: bold;
                                        line-height: 46px;
                                        color: #333333;
                                      "
                                    >
                                      Order confirmation
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-content"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-content-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td align="left" style="padding: 20px; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <h2
                                      class="es-m-txt-c"
                                      style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 26px;
                                        font-style: normal;
                                        font-weight: bold;
                                        line-height: 31.2px;
                                        color: #333333;
                                      "
                                    >
                                      Order&nbsp;<a
                                        target="_blank"
                                        href=""
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #5c68e2;
                                          font-size: 26px;
                                        "
                                        >${orderid}</a
                                      >
                                    </h2>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    class="es-m-p0r es-m-p0l"
                                    style="
                                      margin: 0;
                                      padding-top: 5px;
                                      padding-right: 40px;
                                      padding-bottom: 5px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      ${orderdate}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    class="es-m-p0r es-m-p0l"
                                    style="
                                      margin: 0;
                                      padding-top: 5px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-bottom: 15px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      This email is to confirm&nbsp;your order.
                                      We will send you another email as soon as
                                      it Approved by the Artist.
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <span
                                      class="es-button-border"
                                      style="
                                        border-style: solid;
                                        border-color: #5c68e2;
                                        background: #5c68e2;
                                        border-width: 2px;
                                        display: inline-block;
                                        border-radius: 6px;
                                        width: auto;
                                      "
                                      ><a
                                        href="https://imartifex.live"
                                        target="_blank"
                                        class="es-button"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none !important;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 20px;
                                          padding: 10px 30px 10px 30px;
                                          display: inline-block;
                                          background: #5c68e2;
                                          border-radius: 6px;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          font-weight: normal;
                                          font-style: normal;
                                          line-height: 24px;
                                          width: auto;
                                          text-align: center;
                                          letter-spacing: 0;
                                          mso-padding-alt: 0;
                                          mso-border-alt: 10px solid #5c68e2;
                                          border-left-width: 30px;
                                          border-right-width: 30px;
                                        "
                                        >TRACK ORDER STATUS</a
                                      ></span
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 10px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              class="es-m-p0r"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  border-width: 2px 0;
                                  border-style: solid solid;
                                  border-color: #efefef #00000000;
                                "
                                role="presentation"
                              >
                                <tr>
                                  <td
                                    align="right"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 20px;
                                    "
                                  >
                                    <p
                                      class="es-m-txt-r"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Subtotal:&nbsp;<strong> ₹ ${price}</strong
                                      ><br />Shipping:
                                      <strong>Estimating...</strong
                                      ><br /><br />Total:&nbsp;<strong
                                        >Not Calculated</strong
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-bottom: 10px;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 20px;
                        "
                      >
                        <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:280px" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          align="left"
                          class="es-left"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              class="es-m-p0r es-m-p20b"
                              style="padding: 0; margin: 0; width: 280px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Customer:
                                      <strong>${email}</strong>
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Order number:&nbsp;<strong
                                        >${orderid}</strong
                                      >
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                    date:&nbsp;<strong
                                        >${orderdate}</strong
                                      >
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Payment:&nbsp;<strong
                                        >Pending</strong
                                      >
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Currency:&nbsp;<strong>INR</strong>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:0px"></td>
<td style="width:280px" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          align="right"
                          class="es-right"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              class="es-m-p0r"
                              style="padding: 0; margin: 0; width: 280px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Shipping partner:
                                      <strong>Delhivery</strong>
                                    </p>
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Shipping address:
                                    </p>
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong
                                        >${address}</strong
                                      >
                                    </p>
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Shipping contact:
                                    </p>
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong
                                        >Name: ${name}</strong
                                      > <br/>
                                      <strong
                                        >Mob.: ${mob}</strong
                                      >
                                    </p>

                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-bottom: 10px;
                          padding-top: 15px;
                          padding-right: 20px;
                          padding-left: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                      padding-top: 10px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Got a question?&nbsp;Email us at
                                      <a
                                        target="_blank"
                                        href=""
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #5c68e2;
                                          font-size: 14px;
                                        "
                                        >artifexpiyush@gmail.com</a
                                      >&nbsp;or give us a call at 6392802689.
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-footer"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-footer-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 640px;
                    "
                    role="none"
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-bottom: 20px;
                          padding-top: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 15px;
                                      padding-bottom: 15px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-table-not-adapt es-social"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://www.instagram.com/im_artifex"
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333333;
                                              font-size: 12px;
                                            "
                                            ><img
                                              title="Instagram"
                                              src="https://eppiilo.stripocdn.email/content/assets/img/social-icons/rounded-black/instagram-rounded-black.png"
                                              alt="Inst"
                                              width="32"
                                              height="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://wa.me/+916392802689?text=Hello."
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333333;
                                              font-size: 12px;
                                            "
                                            ><img
                                              title="Whatsapp"
                                              src="https://eppiilo.stripocdn.email/content/assets/img/messenger-icons/rounded-black/whatsapp-rounded-black.png"
                                              alt="Whatsapp"
                                              width="32"
                                              height="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/artifexpiyush/"
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333333;
                                              font-size: 12px;
                                            "
                                            ><img
                                              title="LinkedIn"
                                              src="https://eppiilo.stripocdn.email/content/assets/img/social-icons/rounded-black/linkedin-rounded-black.png"
                                              alt="In"
                                              width="32"
                                              height="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="piyushvishwakarma6706@gmail.com"
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333333;
                                              font-size: 12px;
                                            "
                                            ><img
                                              title="Gmail"
                                              src="https://eppiilo.stripocdn.email/content/assets/img/other-icons/rounded-black/gmail-rounded-black.png"
                                              alt="gm"
                                              width="32"
                                              height="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://www.piyushdev.me/"
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333333;
                                              font-size: 12px;
                                            "
                                            ><img
                                              title="Website"
                                              src="https://eppiilo.stripocdn.email/content/assets/img/other-icons/rounded-black/link-rounded-black.png"
                                              alt="Website"
                                              width="32"
                                              height="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 35px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 18px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 12px;
                                      "
                                    >
                                     Artifex&nbsp;© 2021 Artifex,
                                      Inc. All Rights Reserved.
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 18px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 12px;
                                      "
                                    >
                                      Knowledge Park 2, Gautam Buddha Nagar, Uttar Pradesh, India 201310
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 0; margin: 0">
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      class="es-menu"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr class="links">
                                        <td
                                          align="center"
                                          valign="top"
                                          width="33.33%"
                                          style="
                                            margin: 0;
                                            border: 0;
                                            padding-bottom: 5px;
                                            padding-top: 5px;
                                            padding-right: 5px;
                                            padding-left: 5px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href=""
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: none;
                                              font-family: arial,
                                                'helvetica neue', helvetica,
                                                sans-serif;
                                              display: block;
                                              color: #999999;
                                              font-size: 12px;
                                            "
                                            >Visit Us
                                          </a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          width="33.33%"
                                          style="
                                            margin: 0;
                                            border: 0;
                                            padding-bottom: 5px;
                                            padding-top: 5px;
                                            padding-right: 5px;
                                            padding-left: 5px;
                                            border-left: 1px solid #cccccc;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href=""
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: none;
                                              font-family: arial,
                                                'helvetica neue', helvetica,
                                                sans-serif;
                                              display: block;
                                              color: #999999;
                                              font-size: 12px;
                                            "
                                            >Privacy Policy</a
                                          >
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          width="33.33%"
                                          style="
                                            margin: 0;
                                            border: 0;
                                            padding-bottom: 5px;
                                            padding-top: 5px;
                                            padding-right: 5px;
                                            padding-left: 5px;
                                            border-left: 1px solid #cccccc;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href=""
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: none;
                                              font-family: arial,
                                                'helvetica neue', helvetica,
                                                sans-serif;
                                              display: block;
                                              color: #999999;
                                              font-size: 12px;
                                            "
                                            >Terms of Use</a
                                          >
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-content"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  align="center"
                  class="es-info-area"
                  style="padding: 0; margin: 0"
                >
                  <table
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    bgcolor="#00000000"
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                    role="none"
                  >
                    <tr>
                      <td align="left" style="padding: 20px; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    class="es-infoblock"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 18px;
                                        letter-spacing: 0;
                                        color: #cccccc;
                                        font-size: 12px;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        href=""
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #cccccc;
                                          font-size: 12px;
                                        "
                                      ></a
                                      >No longer want to receive these
                                      emails?&nbsp;<a
                                        href=""
                                        target="_blank"
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #cccccc;
                                          font-size: 12px;
                                        "
                                        >Unsubscribe</a
                                      >.<a
                                        target="_blank"
                                        href=""
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #cccccc;
                                          font-size: 12px;
                                        "
                                      ></a>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`

    const emailData = {
       
        to: email,
        subject: 'Order Confirmation',
        htmlContent: orderComfirmation
        };
    
    try {
      const response = await axios.post('https://artifex-backend.vercel.app/api/send-email', emailData);
      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
   
  };


export const sendStatusEmail = async (curEmail,details, curstatus, orderId) => {

    const formatDate = (isoString) => {
        const date = new Date(isoString);
      
        // Options for the date format
        const options = { 
          month: 'short', // Get the short month (e.g., NOV)
          day: 'numeric', // Get the numeric day (e.g., 23)
          year: 'numeric' // Get the full year (e.g., 2024)
        };
      
        // Use the built-in `toLocaleDateString` method to format the date
        return date.toLocaleDateString('en-US', options).toUpperCase(); // Convert to uppercase for month
      };

    const orderid = orderId;
    const curtime = new Date();
    const orderdate = formatDate(curtime);

    const emailmsg = {
      Approved: "We’re excited to let you know that your order has been approved by the artist! To proceed with the next steps, please complete the payment at your earliest convenience. If you have any questions, feel free to reach out.",
    PAID: "Thank you for completing the payment! We’ve received your transaction and will begin processing your order shortly. Feel free to contact us if you have any questions.",
    Sketching: "Great news! Your order is now in the sketching phase. Our artist is working on creating your custom piece. We’ll notify you once it’s ready for review.",
    Finished: "Your artwork is complete! We’re thrilled to inform you that the sketching process is finished. Please review the final piece and let us know if you have any feedback or approval for delivery.",
    Delivered: "Your order has been shipped and is on its way to you! You can track the shipment using the tracking number provided. Thank you for choosing us!",
    Rejected: "We regret to inform you that your order could not be approved by the artist. Please contact us if you need further clarification or wish to explore alternative options.",
    Done: "Thank you for confirming! Your order has been successfully completed. We hope you’re delighted with your custom piece. Feel free to reach out if you need assistance in the future.",
    Pending: "Your order is currently under review. We’ll notify you once the status is updated. Thank you for your patience!"
};

    const status = curstatus;
    const emailtitle= `Status: ${status}`;
    const emaildesc = emailmsg[status];

    
   
    const price = details.price;
    const shipping = details.shipping;
    const email = curEmail;
    const name = details.name;
    const mob = details.phone;
    const address = `${details.flat}, ${details.street}, ${details.district}, ${details.state}, ${details.pin}`;

   const orderStatus = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  dir="ltr"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>New Template</title>
    <!--[if (mso 16)
      ]><style type="text/css">
        a {
          text-decoration: none;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9
      ]><noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: block !important;
      }
      .rollover span {
        font-size: 0px;
      }
      u + .body img ~ div div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors],
      #MessageViewBody a {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      @media only screen and (max-width: 600px) {
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-p-default {
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 36px !important;
          text-align: left;
        }
        h2 {
          font-size: 26px !important;
          text-align: left;
        }
        h3 {
          font-size: 20px !important;
          text-align: left;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 36px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 12px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 14px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 14px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover span,
        .es-m-txt-c .rollover span,
        .es-m-txt-l .rollover span {
          line-height: 0 !important;
          font-size: 0 !important;
          display: block;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 20px !important;
          padding: 10px 20px 10px 20px !important;
          line-height: 120% !important;
        }
        a.es-button,
        button.es-button,
        .es-button-border {
          display: inline-block !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .h-auto {
          height: auto !important;
        }
      }
      @media screen and (max-width: 384px) {
        .mail-message-content {
          width: 414px !important;
        }
      }
    </style>
  </head>
  <body class="body" style="width: 100%; height: 100%; padding: 0; margin: 0">
    <div
      dir="ltr"
      class="es-wrapper-color"
      lang="en"
      style="background-color: #fafafa"
    >
      <!--[if gte mso 9
        ]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill> </v:background
      ><![endif]-->
      <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        class="es-wrapper"
        role="none"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #fafafa;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-header"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-header-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td align="left" style="padding: 20px; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              class="es-m-p0r"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                      font-size: 0px;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://imartifex.live"
                                      style="
                                        mso-line-height-rule: exactly;
                                        text-decoration: underline;
                                        color: #666666;
                                        font-size: 14px;
                                      "
                                      ><img
                                       src="https://i.ibb.co/rm4XX3V/tilogo-Kittl.jpg" 
                                        alt="Logo"
                                        width="200"
                                        title="Logo"
                                        style="
                                          display: block;
                                          font-size: 12px;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                           border-radius:1rem;
                                        "
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-content"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-content-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        bgcolor="#ffffff"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 15px;
                          padding-right: 20px;
                          padding-left: 20px;
                          background-color: #ffffff;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                      padding-top: 10px;
                                      font-size: 0px;
                                    "
                                  >
                                    <img
                                      src="https://eppiilo.stripocdn.email/content/guids/CABINET_54100624d621728c49155116bef5e07d/images/84141618400759579.png"
                                      alt=""
                                      width="100"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                      height="98"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                    "
                                  >
                                    <h2
                                      class="es-m-txt-c"
                                      style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 46px;
                                        font-style: normal;
                                        font-weight: bold;
                                        line-height: 46px;
                                        color: #333333;
                                      "
                                    >
                                      Order Update
                                    </h2>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-content"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    bgcolor="#ffffff"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-content-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr>
                      <td align="left" style="padding: 20px; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  > <h1
                                      class="es-m-txt-c"
                                      style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 26px;
                                        font-style: normal;
                                        font-weight: bold;
                                        line-height: 31.2px;
                                        color: #5c68e2;
                                      "
                                    >
                                    ${orderid}
                                    </h1>
                                    <h1
                                      class="es-m-txt-c"
                                      style="
                                        margin: 0;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 26px;
                                        font-style: normal;
                                        font-weight: bold;
                                        line-height: 31.2px;
                                        color: #333333;
                                      "
                                    >
                                      ${emailtitle} 
                                    </h1>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    class="es-m-p0r es-m-p0l"
                                    style="
                                      margin: 0;
                                      padding-top: 5px;
                                      padding-right: 40px;
                                      padding-bottom: 5px;
                                      padding-left: 40px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      ${orderdate}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    class="es-m-p0r es-m-p0l"
                                    style="
                                      margin: 0;
                                      padding-top: 5px;
                                      padding-right: 40px;
                                      padding-left: 40px;
                                      padding-bottom: 15px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      ${emaildesc}    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <span
                                      class="es-button-border"
                                      style="
                                        border-style: solid;
                                        border-color: #5c68e2;
                                        background: #5c68e2;
                                        border-width: 2px;
                                        display: inline-block;
                                        border-radius: 6px;
                                        width: auto;
                                      "
                                      ><a
                                        href="https://imartifex.live"
                                        target="_blank"
                                        class="es-button"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none !important;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 20px;
                                          padding: 10px 30px 10px 30px;
                                          display: inline-block;
                                          background: #5c68e2;
                                          border-radius: 6px;
                                          font-family: arial, 'helvetica neue',
                                            helvetica, sans-serif;
                                          font-weight: normal;
                                          font-style: normal;
                                          line-height: 24px;
                                          width: auto;
                                          text-align: center;
                                          letter-spacing: 0;
                                          mso-padding-alt: 0;
                                          mso-border-alt: 10px solid #5c68e2;
                                          border-left-width: 30px;
                                          border-right-width: 30px;
                                        "
                                        >TRACK ORDER STATUS</a
                                      ></span
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 10px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              class="es-m-p0r"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  border-width: 2px 0;
                                  border-style: solid solid;
                                  border-color: #efefef #00000000;
                                "
                                role="presentation"
                              >
                                <tr>
                                  <td
                                    align="right"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 20px;
                                    "
                                  >
                                    <p
                                      class="es-m-txt-r"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Subtotal:&nbsp;<strong> ₹ ${price}</strong
                                      ><br />Shipping:
                                        <strong>${shipping} </strong
                                      ><br /><br />Total:&nbsp;<strong
                                        >${price+shipping} </strong
                                      >
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-bottom: 10px;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 20px;
                        "
                      >
                        <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:280px" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          align="left"
                          class="es-left"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              class="es-m-p0r es-m-p20b"
                              style="padding: 0; margin: 0; width: 280px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Customer:
                                      <strong>${email}</strong>
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Order number:&nbsp;<strong
                                        >${orderid}</strong
                                      >
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                    date:&nbsp;<strong
                                        >${orderdate}</strong
                                      >
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Payment:&nbsp;<strong
                                        >${details.payment ?"PAID":"Pending" }</strong
                                      >
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Currency:&nbsp;<strong>INR</strong>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:0px"></td>
<td style="width:280px" valign="top"><![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          align="right"
                          class="es-right"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              class="es-m-p0r"
                              style="padding: 0; margin: 0; width: 280px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Shipping partner:
                                      <strong>Delhivery</strong>
                                    </p>
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Shipping address:
                                    </p>
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong
                                        >${address}</strong
                                      >
                                    </p>
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Shipping contact:
                                    </p>
                                    <p
                                      class="es-m-txt-l"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong
                                        >Name: ${name}</strong
                                      > <br/>
                                      <strong
                                        >Mob.: ${mob}</strong
                                      >
                                    </p>

                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-bottom: 10px;
                          padding-top: 15px;
                          padding-right: 20px;
                          padding-left: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                      padding-top: 10px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 21px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Got a question?&nbsp;Email us at
                                      <a
                                        target="_blank"
                                        href=""
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #5c68e2;
                                          font-size: 14px;
                                        "
                                        >artifexpiyush@gmail.com</a
                                      >&nbsp;or give us a call at 6392802689.
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-footer"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    class="es-footer-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 640px;
                    "
                    role="none"
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-bottom: 20px;
                          padding-top: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 15px;
                                      padding-bottom: 15px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      class="es-table-not-adapt es-social"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://www.instagram.com/im_artifex"
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333333;
                                              font-size: 12px;
                                            "
                                            ><img
                                              title="Instagram"
                                              src="https://eppiilo.stripocdn.email/content/assets/img/social-icons/rounded-black/instagram-rounded-black.png"
                                              alt="Inst"
                                              width="32"
                                              height="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://wa.me/+916392802689?text=Hello."
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333333;
                                              font-size: 12px;
                                            "
                                            ><img
                                              title="Whatsapp"
                                              src="https://eppiilo.stripocdn.email/content/assets/img/messenger-icons/rounded-black/whatsapp-rounded-black.png"
                                              alt="Whatsapp"
                                              width="32"
                                              height="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/artifexpiyush/"
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333333;
                                              font-size: 12px;
                                            "
                                            ><img
                                              title="LinkedIn"
                                              src="https://eppiilo.stripocdn.email/content/assets/img/social-icons/rounded-black/linkedin-rounded-black.png"
                                              alt="In"
                                              width="32"
                                              height="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="piyushvishwakarma6706@gmail.com"
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333333;
                                              font-size: 12px;
                                            "
                                            ><img
                                              title="Gmail"
                                              src="https://eppiilo.stripocdn.email/content/assets/img/other-icons/rounded-black/gmail-rounded-black.png"
                                              alt="gm"
                                              width="32"
                                              height="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            padding-right: 40px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href="https://www.piyushdev.me/"
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: underline;
                                              color: #333333;
                                              font-size: 12px;
                                            "
                                            ><img
                                              title="Website"
                                              src="https://eppiilo.stripocdn.email/content/assets/img/other-icons/rounded-black/link-rounded-black.png"
                                              alt="Website"
                                              width="32"
                                              height="32"
                                              style="
                                                display: block;
                                                font-size: 14px;
                                                border: 0;
                                                outline: none;
                                                text-decoration: none;
                                              "
                                          /></a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 35px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 18px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 12px;
                                      "
                                    >
                                     Artifex&nbsp;© 2021 Artifex,
                                      Inc. All Rights Reserved.
                                    </p>
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 18px;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 12px;
                                      "
                                    >
                                      Knowledge Park 2, Gautam Buddha Nagar, Uttar Pradesh, India 201310
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding: 0; margin: 0">
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      class="es-menu"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr class="links">
                                        <td
                                          align="center"
                                          valign="top"
                                          width="33.33%"
                                          style="
                                            margin: 0;
                                            border: 0;
                                            padding-bottom: 5px;
                                            padding-top: 5px;
                                            padding-right: 5px;
                                            padding-left: 5px;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href=""
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: none;
                                              font-family: arial,
                                                'helvetica neue', helvetica,
                                                sans-serif;
                                              display: block;
                                              color: #999999;
                                              font-size: 12px;
                                            "
                                            >Visit Us
                                          </a>
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          width="33.33%"
                                          style="
                                            margin: 0;
                                            border: 0;
                                            padding-bottom: 5px;
                                            padding-top: 5px;
                                            padding-right: 5px;
                                            padding-left: 5px;
                                            border-left: 1px solid #cccccc;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href=""
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: none;
                                              font-family: arial,
                                                'helvetica neue', helvetica,
                                                sans-serif;
                                              display: block;
                                              color: #999999;
                                              font-size: 12px;
                                            "
                                            >Privacy Policy</a
                                          >
                                        </td>
                                        <td
                                          align="center"
                                          valign="top"
                                          width="33.33%"
                                          style="
                                            margin: 0;
                                            border: 0;
                                            padding-bottom: 5px;
                                            padding-top: 5px;
                                            padding-right: 5px;
                                            padding-left: 5px;
                                            border-left: 1px solid #cccccc;
                                          "
                                        >
                                          <a
                                            target="_blank"
                                            href=""
                                            style="
                                              mso-line-height-rule: exactly;
                                              text-decoration: none;
                                              font-family: arial,
                                                'helvetica neue', helvetica,
                                                sans-serif;
                                              display: block;
                                              color: #999999;
                                              font-size: 12px;
                                            "
                                            >Terms of Use</a
                                          >
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-content"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td
                  align="center"
                  class="es-info-area"
                  style="padding: 0; margin: 0"
                >
                  <table
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    bgcolor="#00000000"
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 600px;
                    "
                    role="none"
                  >
                    <tr>
                      <td align="left" style="padding: 20px; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    class="es-infoblock"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 18px;
                                        letter-spacing: 0;
                                        color: #cccccc;
                                        font-size: 12px;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        href=""
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #cccccc;
                                          font-size: 12px;
                                        "
                                      ></a
                                      >No longer want to receive these
                                      emails?&nbsp;<a
                                        href=""
                                        target="_blank"
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #cccccc;
                                          font-size: 12px;
                                        "
                                        >Unsubscribe</a
                                      >.<a
                                        target="_blank"
                                        href=""
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #cccccc;
                                          font-size: 12px;
                                        "
                                      ></a>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`


    const emailData = {
       
        to: email,
        subject: 'Order Update',
        htmlContent: orderStatus
        };
    
    try {
      const response = await axios.post('https://artifex-backend.vercel.app/api/send-email', emailData);
      console.log('Email sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
   
  };

  
export const sendconfiramtionEmailtoadmin = async (user,details, orderId, curtime) => {

    const formatDate = (isoString) => {
        const date = new Date(isoString);
      
        // Options for the date format
        const options = { 
          month: 'short', // Get the short month (e.g., NOV)
          day: 'numeric', // Get the numeric day (e.g., 23)
          year: 'numeric' // Get the full year (e.g., 2024)
        };
      
        // Use the built-in `toLocaleDateString` method to format the date
        return date.toLocaleDateString('en-US', options).toUpperCase(); // Convert to uppercase for month
      };

    const orderid = orderId;
    const orderdate = formatDate(curtime);
   
    const price = details.price;
    const email = user.email;
    const name = details.name;
    const mob = details.phone;
    const address = `${details.flat}, ${details.street}, ${details.district}, ${details.state}`;
    const person = details.person;
    const size = details.size;
    const pin = details.pin;
    const orient = details.orientation;

   const orderComfirmation = `
<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>New Template 2</title>
    <!--[if (mso 16)]><style type="text/css">     a {text-decoration: none;}     </style><![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> <!--[if gte mso 9]><noscript> <xml> <o:OfficeDocumentSettings> <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml> </noscript>
<![endif]--> <!--[if !mso]><!-- -->
    <link
        href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"> <!--<![endif]-->
    <style type="text/css">
        .rollover:hover .rollover-first {
            max-height: 0px !important;
            display: none !important;
        }

        .rollover:hover .rollover-second {
            max-height: none !important;
            display: block !important;
        }

        .rollover span {
            font-size: 0;
        }

        u+.body img~div div {
            display: none;
        }

        #outlook a {
            padding: 0;
        }

        span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
            color: inherit;
            mso-style-priority: 99;
        }

        a.es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
        }

        a[x-apple-data-detectors],
        #MessageViewBody a {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
        }

        @media only screen and (min-width:214px) {
            .chek-hidden {
                position: absolute;
                visibility: hidden;
                height: 0px;
                width: 0px;
                max-height: 0px;
                overflow: hidden;
                opacity: 0;
            }

            lebel,
            label:hover {
                cursor: pointer !important;
            }

            .vn,
            .nv,
            [class*="w-level_"],
            [class*="d-level_"] {
                visibility: hidden;
                display: none;
                opacity: 0;
                transform: scale(0);
                height: 0;
                max-height: 0px;
                line-height: 0px;
                mso-hide: all;
            }

            #second-option:checked~.choose-zone .nv,
            #second-option:not(:checked)~.choose-zone .vn,
            #toLevel_white_0:checked~.choose-zone.goods .w-level_0,
            #toLevel_white_1:checked~.choose-zone.goods .w-level_1,
            #toLevel_white_2:checked~.choose-zone.goods .w-level_2,
            #toLevel_dark_0:checked~.choose-zone.goods .d-level_0,
            #toLevel_dark_1:checked~.choose-zone.goods .d-level_1,
            #toLevel_dark_2:checked~.choose-zone.goods .d-level_2,
            #toLevel_white_1:checked~#toLevel_dark_0:checked~.choose-zone.goods .w-level_3,
            #toLevel_white_2:checked~#toLevel_dark_0:checked~.choose-zone.goods .w-level_4,
            #toLevel_white_0:checked~#toLevel_dark_1:checked~.choose-zone.goods .w-level_5,
            #toLevel_white_0:checked~#toLevel_dark_2:checked~.choose-zone.goods .w-level_6,
            #toLevel_white_1:checked~#toLevel_dark_1:checked~.choose-zone.goods .w-level_7,
            #toLevel_white_1:checked~#toLevel_dark_2:checked~.choose-zone.goods .w-level_8,
            #toLevel_white_2:checked~#toLevel_dark_1:checked~.choose-zone.goods .w-level_9,
            #toLevel_white_2:checked~#toLevel_dark_2:checked~.choose-zone.goods .w-level_10 {
                visibility: visible !important;
                display: inline-block !important;
                opacity: 1 !important;
                transform: scale(1) !important;
                height: initial !important;
                max-height: initial !important;
                line-height: initial !important;
            }

            #second-option:checked~.choose-zone table.nv,
            #second-option:not(:checked)~.choose-zone table.vn,
            #toLevel_white_0:checked~.choose-zone.goods table.w-level_0,
            #toLevel_white_1:checked~.choose-zone.goods table.w-level_1,
            #toLevel_white_2:checked~.choose-zone.goods table.w-level_2,
            #toLevel_dark_0:checked~.choose-zone.goods table.d-level_0,
            #toLevel_dark_1:checked~.choose-zone.goods table.d-level_1,
            #toLevel_dark_2:checked~.choose-zone.goods table.d-level_2 {
                display: table !important;
            }

            #second-option:checked~.choose-zone table tr.nv,
            #second-option:not(:checked)~.choose-zone table tr.vn {
                display: table-row !important;
            }

            #second-option:checked+.choose-zone table tr td.nv,
            #second-option:not(:checked)+.choose-zone table tr td.vn {
                display: table-cell !important;
            }
        }

        @media only screen and (min-width:214px) {
            .chek-hidden {
                position: absolute;
                visibility: hidden;
                height: 0px;
                width: 0px;
                max-height: 0px;
                overflow: hidden;
                opacity: 0
            }

            lebel,
            label:hover {
                cursor: pointer !important
            }

            .vn,
            .nv,
            [class*="w-level_"],
            [class*="d-level_"] {
                visibility: hidden;
                display: none;
                opacity: 0;
                transform: scale(0);
                height: 0;
                max-height: 0px;
                line-height: 0px;
                mso-hide: all
            }

            #second-option:checked~.choose-zone .nv,
            #second-option:not(:checked)~.choose-zone .vn,
            #toLevel_white_0:checked~.choose-zone.goods .w-level_0,
            #toLevel_white_1:checked~.choose-zone.goods .w-level_1,
            #toLevel_white_2:checked~.choose-zone.goods .w-level_2,
            #toLevel_dark_0:checked~.choose-zone.goods .d-level_0,
            #toLevel_dark_1:checked~.choose-zone.goods .d-level_1,
            #toLevel_dark_2:checked~.choose-zone.goods .d-level_2,
            #toLevel_white_1:checked~#toLevel_dark_0:checked~.choose-zone.goods .w-level_3,
            #toLevel_white_2:checked~#toLevel_dark_0:checked~.choose-zone.goods .w-level_4,
            #toLevel_white_0:checked~#toLevel_dark_1:checked~.choose-zone.goods .w-level_5,
            #toLevel_white_0:checked~#toLevel_dark_2:checked~.choose-zone.goods .w-level_6,
            #toLevel_white_1:checked~#toLevel_dark_1:checked~.choose-zone.goods .w-level_7,
            #toLevel_white_1:checked~#toLevel_dark_2:checked~.choose-zone.goods .w-level_8,
            #toLevel_white_2:checked~#toLevel_dark_1:checked~.choose-zone.goods .w-level_9,
            #toLevel_white_2:checked~#toLevel_dark_2:checked~.choose-zone.goods .w-level_10 {
                visibility: visible !important;
                display: inline-block !important;
                opacity: 1 !important;
                transform: scale(1) !important;
                height: initial !important;
                max-height: initial !important;
                line-height: initial !important
            }

            #second-option:checked~.choose-zone table.nv,
            #second-option:not(:checked)~.choose-zone table.vn,
            #toLevel_white_0:checked~.choose-zone.goods table.w-level_0,
            #toLevel_white_1:checked~.choose-zone.goods table.w-level_1,
            #toLevel_white_2:checked~.choose-zone.goods table.w-level_2,
            #toLevel_dark_0:checked~.choose-zone.goods table.d-level_0,
            #toLevel_dark_1:checked~.choose-zone.goods table.d-level_1,
            #toLevel_dark_2:checked~.choose-zone.goods table.d-level_2 {
                display: table !important
            }

            #second-option:checked~.choose-zone table tr.nv,
            #second-option:not(:checked)~.choose-zone table tr.vn {
                display: table-row !important
            }

            #second-option:checked+.choose-zone table tr td.nv,
            #second-option:not(:checked)+.choose-zone table tr td.vn {
                display: table-cell !important
            }
        }

        @media only screen and (max-width:600px) {
            .es-m-p15r {
                padding-right: 15px !important
            }

            .es-m-p15l {
                padding-left: 15px !important
            }

            .es-m-p20 {
                padding: 20px !important
            }

            .es-m-p20r {
                padding-right: 20px !important
            }

            .es-m-p20l {
                padding-left: 20px !important
            }

            .es-m-p20b {
                padding-bottom: 20px !important
            }

            .es-p-default {}

            *[class="gmail-fix"] {
                display: none !important
            }

            p,
            a {
                line-height: 150% !important
            }

            h1,
            h1 a {
                line-height: 120% !important
            }

            h2,
            h2 a {
                line-height: 120% !important
            }

            h3,
            h3 a {
                line-height: 120% !important
            }

            h4,
            h4 a {
                line-height: 120% !important
            }

            h5,
            h5 a {
                line-height: 120% !important
            }

            h6,
            h6 a {
                line-height: 120% !important
            }

            .es-header-body p {}

            .es-content-body p {}

            .es-footer-body p {}

            .es-infoblock p {}

            h1 {
                font-size: 28px !important;
                text-align: left
            }

            h2 {
                font-size: 24px !important;
                text-align: left
            }

            h3 {
                font-size: 20px !important;
                text-align: left
            }

            h4 {
                font-size: 24px !important;
                text-align: left
            }

            h5 {
                font-size: 20px !important;
                text-align: left
            }

            h6 {
                font-size: 16px !important;
                text-align: left
            }

            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
                font-size: 28px !important
            }

            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
                font-size: 24px !important
            }

            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
                font-size: 20px !important
            }

            .es-header-body h4 a,
            .es-content-body h4 a,
            .es-footer-body h4 a {
                font-size: 24px !important
            }

            .es-header-body h5 a,
            .es-content-body h5 a,
            .es-footer-body h5 a {
                font-size: 20px !important
            }

            .es-header-body h6 a,
            .es-content-body h6 a,
            .es-footer-body h6 a {
                font-size: 16px !important
            }

            .es-menu td a {
                font-size: 16px !important
            }

            .es-header-body p,
            .es-header-body a {
                font-size: 16px !important
            }

            .es-content-body p,
            .es-content-body a {
                font-size: 16px !important
            }

            .es-footer-body p,
            .es-footer-body a {
                font-size: 16px !important
            }

            .es-infoblock p,
            .es-infoblock a {
                font-size: 12px !important
            }

            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3,
            .es-m-txt-c h4,
            .es-m-txt-c h5,
            .es-m-txt-c h6 {
                text-align: center !important
            }

            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3,
            .es-m-txt-r h4,
            .es-m-txt-r h5,
            .es-m-txt-r h6 {
                text-align: right !important
            }

            .es-m-txt-j,
            .es-m-txt-j h1,
            .es-m-txt-j h2,
            .es-m-txt-j h3,
            .es-m-txt-j h4,
            .es-m-txt-j h5,
            .es-m-txt-j h6 {
                text-align: justify !important
            }

            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3,
            .es-m-txt-l h4,
            .es-m-txt-l h5,
            .es-m-txt-l h6 {
                text-align: left !important
            }

            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
                display: inline !important
            }

            .es-m-txt-r .rollover:hover .rollover-second,
            .es-m-txt-c .rollover:hover .rollover-second,
            .es-m-txt-l .rollover:hover .rollover-second {
                display: inline !important
            }

            .es-m-txt-r .rollover span,
            .es-m-txt-c .rollover span,
            .es-m-txt-l .rollover span {
                line-height: 0 !important;
                font-size: 0 !important;
                display: block
            }

            .es-spacer {
                display: inline-table
            }

            a.es-button,
            button.es-button {
                font-size: 14px !important;
                padding: 10px 20px 10px 20px !important;
                line-height: 120% !important
            }

            a.es-button,
            button.es-button,
            .es-button-border {
                display: inline-block !important
            }

            .es-m-fw,
            .es-m-fw.es-fw,
            .es-m-fw .es-button {
                display: block !important
            }

            .es-m-il,
            .es-m-il .es-button,
            .es-social,
            .es-social td,
            .es-menu {
                display: inline-block !important
            }

            .es-adaptive table,
            .es-left,
            .es-right {
                width: 100% !important
            }

            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
                width: 100% !important;
                max-width: 600px !important
            }

            .adapt-img {
                width: 100% !important;
                height: auto !important
            }

            .es-mobile-hidden,
            .es-hidden {
                display: none !important
            }

            .es-desk-hidden {
                width: auto !important;
                overflow: visible !important;
                float: none !important;
                max-height: inherit !important;
                line-height: inherit !important
            }

            tr.es-desk-hidden {
                display: table-row !important
            }

            table.es-desk-hidden {
                display: table !important
            }

            td.es-desk-menu-hidden {
                display: table-cell !important
            }

            .es-menu td {
                width: 1% !important
            }

            table.es-table-not-adapt,
            .esd-block-html table {
                width: auto !important
            }

            .h-auto {
                height: auto !important
            }

            .m-c-p16r {
                padding-right: 8vw
            }

            .h-auto,
            table.h-auto {
                height: auto !important
            }

            td.es-spacer-4045 {
                height: 0px !important
            }
        }

        @media screen and (max-width:384px) {
            .mail-message-content {
                width: 414px !important
            }
        }
    </style>
</head>

<body class="body" style="width:100%;height:100%;padding:0;Margin:0">
    <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#333333">
        <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#333333"></v:fill> </v:background><![endif]-->
        <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-color:#333333">
            <tr>
                <td valign="top" style="padding:0;Margin:0">
                    <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                        <tr>
                            <td align="center" class="es-m-p15r es-m-p15l" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0"
                                    class="es-content-body" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:640px">
                                    <tr>
                                        <td align="left"
                                            style="padding:0;Margin:0;padding-top:30px;padding-right:40px;padding-left:40px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr class="es-mobile-hidden">
                                                                <td align="center" height="44" class="es-spacer-4045"
                                                                    style="padding:0;Margin:0"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" bgcolor="#ffffff" class="es-m-p20"
                                            style="padding:40px;Margin:0;background-color:#ffffff;border-radius:20px 20px 0px 0px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0px">
                                                                    <a target="_blank" href="https://viewstripo.email/"
                                                                        style="mso-line-height-rule:exactly;text-decoration:underline;color:#391484;font-size:18px"><img
                                                                            src="https://i.ibb.co/rm4XX3V/tilogo-Kittl.jpg" 
                                                                            alt="" width="180"
                                                                           style="display:block; font-size:18px; border:0; outline:none; text-decoration:none; border-radius:1rem;"</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" height="40"
                                                                    style="padding:0;Margin:0"></td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            bgcolor="#AACAEF"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background:linear-gradient(153.06deg, #dae6f7 -0.31%, #f9f1fb 99.69%);border-radius:20px;border:1px dotted #aacaef"
                                                            role="presentation">
                                                            <tr>
                                                                <td align="left" class="es-m-p20r es-m-p20l"
                                                                    style="padding:0;Margin:0;padding-right:40px;padding-left:40px;padding-top:20px">
                                                                    <h1 class="es-m-txt-l"
                                                                        style="Margin:0;font-family:'Exo 2', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:36px;font-style:normal;font-weight:bold;line-height:43.2px;color:#000000;text-transform:uppercase">
                                                                        Order Placed by</h1>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left" class="es-m-p20r es-m-p20l"
                                                                    style="Margin:0;padding-right:40px;padding-left:40px;padding-top:15px;padding-bottom:20px">
                                                                    <h1 class="es-m-txt-l"
                                                                        style="Margin:0;font-family:'Exo 2', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:36px;font-style:normal;font-weight:bold;line-height:43.2px;color:#7720ca">
                                                                        ${name}</h1>
                                                                    <h2 class="es-m-txt-l"
                                                                        style="Margin:0;font-family:'Exo 2', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:28px;font-style:normal;font-weight:bold;line-height:33.6px;color:#333333">
                                                                        ${email}</h2>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Exo 2', sans-serif;line-height:27px;letter-spacing:0;color:#666666;font-size:18px">
                                                                        ${mob}</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Exo 2', sans-serif;line-height:27px;letter-spacing:0;color:#666666;font-size:18px">
                                                                        <br></p>
                                                                    <h2
                                                                        style="Margin:0;font-family:'Exo 2', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:28px;font-style:normal;font-weight:bold;line-height:33.6px;color:#000000">
                                                                        Order: <span
                                                                            style="color:#666666">${orderid}</span>
                                                                    </h2>
                                                                    <h2
                                                                        style="Margin:0;font-family:'Exo 2', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:28px;font-style:normal;font-weight:bold;line-height:33.6px;color:#000000">
                                                                        Date: <span style="color:#666666">${orderdate}</span></h2>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Exo 2', sans-serif;line-height:27px;letter-spacing:0;color:#666666;font-size:18px">
                                                                        <br></p>
                                                                    <h1
                                                                        style="Margin:0;font-family:'Exo 2', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:36px;font-style:normal;font-weight:bold;line-height:43.2px;color:#000000">
                                                                        Amount:&nbsp; ₹${price}</h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" bgcolor="#ffffff" background class="es-m-p20r es-m-p20l"
                                            style="padding:0;Margin:0;padding-right:40px;padding-left:40px;padding-top:40px;background-color:#ffffff"> <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr>
<td style="width:270px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" align="left" class="es-left"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td align="left" class="es-m-p20b"
                                                        style="padding:0;Margin:0;width:270px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left" style="padding:5px;Margin:0">
                                                                    <h4
                                                                        style="Margin:0;font-family:'Exo 2', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:28.8px;color:#333333">
                                                                        TYPE : ${person}</h4>
                                                                    <h4
                                                                        style="Margin:0;font-family:'Exo 2', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:28.8px;color:#333333">
                                                                        SIZE : ${size} </h4>
                                                                    <h4
                                                                        style="Margin:0;font-family:'Exo 2', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:28.8px;color:#333333">
                                                                        ORIENT. : ${orient}</h4>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" align="right" class="es-right"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:270px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="left" style="padding:5px;Margin:0">
                                                                    <h4
                                                                        style="Margin:0;font-family:'Exo 2', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:28.8px;color:#333333">
                                                                        ADDRESS:&nbsp;</h4>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Exo 2', sans-serif;line-height:27px;letter-spacing:0;color:#666666;font-size:18px">
                                                                        ${address}
                                                                    </p>
                                                                    <h4
                                                                        style="Margin:0;font-family:'Exo 2', sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:28.8px;color:#333333">
                                                                        PIN: ${pin}</h4>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table> <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" bgcolor="#ffffff" class="es-m-p20r es-m-p20l"
                                            style="padding:40px;Margin:0;background-color:#ffffff">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center" class="es-m-p20b"
                                                                    style="padding:0;Margin:0;padding-right:20px;padding-left:20px"> <!--[if mso]><a href="https://imartifex.live" target="_blank" hidden> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://imartifex.live" style="height:53px; v-text-anchor:middle; width:246px" arcsize="50%" strokecolor="#ffdda9" strokeweight="1px" fillcolor="#aca8ff"> <w:anchorlock></w:anchorlock> <center style='color:#000000; font-family:Monument, "Monument Extended", "Exo 2", sans-serif; font-size:20px; font-weight:400; line-height:20px; mso-text-raise:1px'>Proceed to checkout</center> </v:roundrect></a>
<![endif]--> <!--[if !mso]><!-- --><span class="es-button-border msohide"
                                                                        style="border-style:solid;border-color:#FFDDA9;background:#aca8ff;border-width:0px 0px 2px 0px;display:inline-block;border-radius:30px;width:auto;mso-hide:all"><a
                                                                            href="https://imartifex.live"
                                                                            target="_blank" class="es-button"
                                                                            style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#000000;font-size:20px;padding:15px 30px 15px 30px;display:inline-block;background:#aca8ff;border-radius:30px;font-family:Monument, 'Monument Extended', 'Exo 2', sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #aca8ff">Proceed
                                                                            to checkout</a> </span> <!--<![endif]-->
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" bgcolor="#ffffff" class="es-m-p20b es-m-p20r es-m-p20l"
                                            style="padding:40px;Margin:0;background-color:#ffffff;border-radius:0px 0px 20px 20px;background-size:contain">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0px">
                                                                    <a target="_blank" href="https://viewstripo.email/"
                                                                        style="mso-line-height-rule:exactly;text-decoration:underline;color:#391484;font-size:18px"><img
                                                                             src="https://i.ibb.co/rm4XX3V/tilogo-Kittl.jpg" 
                                                                            alt="" width="120"
                                                                            style="display:block;font-size:18px;border:0;outline:none;text-decoration:none border-radius:1rem; "></a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                     
                </td>
            </tr>
        </table>
    </div>
</body>

</html>
`

    const emailData = {
       
      to: ['piyushvishwakarma6706@gmail.com', 'piyushvishwakarma6707@gmail.com'],
        subject: 'Order Confirmation',
        htmlContent: orderComfirmation
        };
    
    try {
      const response = await axios.post('https://artifex-backend.vercel.app/api/send-email', emailData);
      console.log('Email sent to admin successfully:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
   
  };