import React from 'react'

export default function Contacts() {
  return (
    <div className="content">
        <h2>Contacts</h2>
        <div className='contact'>
            <img src="https://via.placeholder.com/250x250" alt="Store at abc" />
            <div>
                <h4>Store at abc</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='ta-r'><span className='light'>From 8-00 to 18-00</span></div>
            </div>
        </div>
        <div className='contact'>
            <img src="https://via.placeholder.com/250x250" alt="Store at Aaaaaa street" />
            <div>
                <h4>Store at Aaaaaa street</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='ta-r'><span className='light'>24/7</span></div>
            </div>
        </div>
    </div>
  )
}
