'use server'
import axios, { AxiosError } from 'axios'
import ROUTES from '@/constants/routes'
import { normalizeString } from '@/utils/normalize-string'
import { isValid } from '@/utils/validate-string'
import { ApiException } from '@/lib'

export default async function getUserData(user: string) {
  if (isValid(user)) {
    const search = normalizeString(user)

    try {
      const res = await axios.get(
        `${process.env.BASE_URL}${ROUTES.GET_USER}/${search}`
      )

      return res.data
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new ApiException(
          `An error occurred while searching for user data ${user}`,
          error.status as number
        )
      }
    }
  }
}
