import React from 'react'
import { getInitials } from '../../utils/Helper'

const ProfileInfo = ({onLogout}) => {
  return (
    <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
          {getInitials("John Wick")}
        </div>

        <div className="text-sm font-medium">
            <p className="text-sm text-slate-700 underline">John Wick</p>
            <button className="" onClick={onLogout}>
                LogOut
            </button>
        </div>
    </div>
  )
}

export default ProfileInfo
