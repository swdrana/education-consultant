import { doLogout } from '@/actions'
import React from 'react'

export default function doLogOut() {
  return (
    <form action={doLogout  as unknown as (formData: FormData) => void}>
        <button className="bg-blue-400 my-2 text-white p-1 rounded" type="submit">Logout</button>
    </form>
  )
}
