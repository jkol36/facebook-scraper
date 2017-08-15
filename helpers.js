export const getAccessToken = fb => {
  if(!fb)
    throw new Error('no facebook object')
  return new Promise((resolve, reject) => {
    fb.api('oauth/access_token', {
      client_id: process.env.FACEBOOK_APP_ID,
      client_secret: process.env.FACEBOOK_APP_SECRET,
      grant_type: 'client_credentials'
    }, res => {
      if(!res || res.error) {
        console.log(!res ? 'error occured': res.error)
        reject(!res ? 'error occured': res.error)
      }
      resolve(res.access_token)
    })
  })
}