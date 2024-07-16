import React from 'react'

export const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkhLkPoA1nX_KXMEC2FHkQeerMNmqIiiiYA&s" alt="" />
      </div>
    </div>
  )
}
