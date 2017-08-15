import { getAccessToken } from './helpers'
import {Facebook, FacebookApiException} from 'fb'
Promise.promisifyAll(Facebook)


const fb = new Facebook()
Promise.promisify(fb.api)

// getAccessToken(fb)
// .then(token => fb.setAccessToken(token))
// .then(() => fb.api('me', {fields: ['id', 'name']}, res))
// .then(console.log)