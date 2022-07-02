# Spotify Current Playing
- Spotify has never been another music service I have used, and I attribute this to its great song quality and easy-to-use interface.
In spite of my inexperience, I love to play around with the Spotify API, and things that are related to it, as it makes me just as happy.

- Therefore, I have created an application that lets you see what song is playing right now on Spotify. If you were to ask me, "What is the use of this app?", I would reply, "nothing". This was created for two reasons: first, for fun, and second, to demonstrate how to use Spotify authentication.
 

## How To Install?

- After installing this project, it will ask for Client ID, Client Secret and Redirect URI, and to get those you need to register the Spotify app. This guide will help you do that. https://developer.spotify.com/documentation/general/guides/app-settings
- In case you are unable to setup things up then just follow this - :
  - Go to spotify dashboard and login ( https://developer.spotify.com/dashboard/ )
  - Create a new spotify app and fill out the details
  - Go to the settings of the spotify app that you just created and add **Redirect URI** ( `https://<your username>.api.stdlib.com/<project-name>@dev/callback/` )
  - In last save the details and add the same **Redirect URI** in the env var of autocode app.
  - Do not forget to add Client ID and Client Secret of spotify app in the autocode app environment variable 
<img src="./readme/gallery/uri.png" width="50%" alt="example">

- You will be able to see your app runing on `https://<your username>.api.stdlib.com/<project-name>@dev/`

## Note
- It will only show your activity, if you want everyone can see their activity then you need to Submit a quota extension request for your spotify app.

## Showcase
<img src="./readme/gallery/first.png" alt="main">
