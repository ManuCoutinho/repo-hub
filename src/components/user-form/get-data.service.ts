'use server'
import axios from 'axios'
import ROUTES from '@/constants/routes'
import { normalizeString } from '@/utils/normalize-string'
import { isValid } from '@/utils/validate-string'

export async function getUserData(user: string) {
  if (isValid(user)) {
    const search = normalizeString(user)
    console.error('🤖', search)
    try {
      const res = await axios.get(
        `${process.env.BASE_URL}${ROUTES.GET_USER}/${search}`
      )

      return res.data
    } catch (error) {
      //do something
    }
  }
}
