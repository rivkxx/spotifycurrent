let scopes = 'user-read-playback-state';

return {
  headers: {
    Location:
      'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' +
      process.env.CLIENT_ID +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' +
      encodeURIComponent(process.env.REDIRECT_URI),
  },
   statusCode: 302,
   body: Buffer.from('')
};
