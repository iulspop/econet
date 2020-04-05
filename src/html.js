import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var div = document.createElement('div');
            div.className = 'fb-customerchat';
            div.setAttribute('page_id', '102654851380804');
            div.setAttribute('ref', 'b64:Y2hhdGZ1ZWxfbWVzc2VuZ2Vy');
            document.body.appendChild(div);
            window.fbMessengerPlugins = window.fbMessengerPlugins || {
              init: function () {
                FB.init({
                  appId            : '1678638095724206',
                  autoLogAppEvents : true,
                  xfbml            : true,
                  version          : 'v3.3'
                });
              }, callable: []
            };
            window.fbAsyncInit = window.fbAsyncInit || function () {
              window.fbMessengerPlugins.callable.forEach(function (item) { item(); });
              window.fbMessengerPlugins.init();
            };
            setTimeout(function () {
              (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
            }, 0);
        `,
          }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
