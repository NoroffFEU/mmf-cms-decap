const fragmentStr = window.location.hash
const urlParams = new URLSearchParams(fragmentStr)
const userToken = urlParams.get('access_token')

console.log(userToken)

async function getUserData(accessToken) {
    // this api requires parameters i couldn't figure out.
    fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
  }

  getUserData(userToken)

/*
const data = getUserData(userToken)

if (noData) {
window.location.href = "/"
}
*/
