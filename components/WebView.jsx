import React from 'react'

export default function WebView () {
  return (
    <div>
        <div className="flex items-center justify-center h-screen w-screen bg-[#FED7D7] text-center">
            <div className="p-4">
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#742A2A]">
                    This is not supported on your current device!
                </h2>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl text-[#742A2A]">
                    Please use a mobile device to access this web application.
                </p>
            </div>
        </div>
    </div>
  )
}
