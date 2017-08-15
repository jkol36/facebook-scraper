import { expect } from 'chai'
import {Facebook, FacebookApiException} from 'fb'



describe('facebook scraper', () => {
  before(done => {
    require('./config')
    done()
  })
  it('facebook app secret and app id should not be undefined', done => {
    expect(process.env.FACEBOOK_APP_ID).to.not.be.undefined
    expect(process.env.FACEBOOK_APP_SECRET).to.not.be.undefined
    done()
  })
  it('should not throw any errors importing the facebook library', done => {
    const options = {}
    expect(Facebook).to.not.be.undefined
    const fb = new Facebook()
    expect(fb).to.not.be.undefined
    done()
  })
  it('should ask facebook for an access token', done => {
    const fb = new Facebook()
    let accessToken 
    fb.api('oauth/access_token', {
      client_id: process.env.FACEBOOK_APP_ID,
      client_secret: process.env.FACEBOOK_APP_SECRET,
      grant_type: 'client_credentials'
    }, res => {
      if(!res || res.error) {
        console.log(!res ? 'error occured': res.error)
        return;
      }
      accessToken = res.access_token
      expect(accessToken).to.not.be.undefined
      console.log(accessToken)
      done()
    })
  })
})