const code = context.params.code;
const axios = require('axios');
const qs = require('querystring');
console.log(context);
if (!code) return;

const data = await axios('https://accounts.spotify.com/api/token', {
  method: 'POST',
  data: qs.stringify({
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.REDIRECT_URI,
  }),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization:
      'Basic ' +
      new Buffer.from(
        process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET
      ).toString('base64'),
  },
}).then((res) => res.data);

console.log(data);

return {
  headers: {
    'Content-Type': 'text/html',
  },
  body: Buffer.from(`<script>
  localStorage.setItem("refresh_token", "${data.refresh_token}")
  localStorage.setItem("access_token", "${data.access_token}")
  localStorage.setItem("expires_in", "${Date.now() + data.expires_in * 6000}")
  document.location = 'https://${context.http.headers.host}/${context.service.path[1]}@${context.service.environment}/'
  </script>`),
};
