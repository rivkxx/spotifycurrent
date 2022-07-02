async function nowPlaying() {
  const data = await fetch("https://api.spotify.com/v1/me/player", {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem("access_token")
    }
  }).then(res => res.json())  
  return data;
}


if(localStorage.getItem("expires_in") <= Date.now()) document.location = "login"
  
  setInterval(async () => {
    const data = await nowPlaying().catch(err => {})
    
    if(data && !document.getElementsByClassName("music-player")[0].style.transform) document.getElementsByClassName("music-player")[0].style.transform =  'translate(-50%, -50%)'                     
    else if(!data) return document.getElementsByClassName("music-player")[0].style.transform =  '' 
    
    if(data.item.name === document.getElementsByClassName("track")[0].childNodes[1].nodeValue) {
      document.getElementById("timer-start").innerText = new Date(data.progress_ms).toISOString().slice(14, -5)
      document.getElementsByTagName("progress")[0].value = (data.progress_ms/data.item.duration_ms) * 100
    } else setValues(data)
  }, 1 * 600);


function setValues(json) {
  document.getElementsByClassName("track")[0].childNodes[1].nodeValue = json.item.name
  document.getElementsByTagName("img")[0].src = json.item.album.images[0].url
  document.getElementsByClassName("extras")[0].innerText = `By ${json.item.album.artists.map(x => x.name).join(", ")}`
  document.getElementsByClassName("extras")[1].innerText = `On ${json.item.album.name}`
  document.getElementById("timer-end").innerText = new Date(json.item.duration_ms).toISOString().slice(14, -5)
  document.getElementById("timer-start").innerText = new Date(json.progress_ms).toISOString().slice(14, -5)
  document.getElementsByTagName("progress")[0].value = (json.progress_ms/json.item.duration_ms) * 100
}
