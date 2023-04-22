import React from "react";


function App() {


return(
  React.createElement('div',{className:'main'},
  React.createElement('div',{className:'main1'},
  React.createElement('div',{className:'imgdiv'},React.createElement('button',{className:'btn1'},'+'),React.createElement('img', { src: 'https://media.istockphoto.com/id/1351285381/photo/happy-young-african-american-woman-looking-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=N31nPlncl1RGZ2IxfQdXTCl9LFN3pD31mWYhzxeRpdY=', alt: 'image-description-here' }),),
    React.createElement('div',{className:'header-div'},React.createElement('h1',{},'Alexandra Caulea'),React.createElement('p',{},'I enjoy a cup of coffee drinking Every day')),
  
    React.createElement('div',{className:'list'},React.createElement('div',{className:'left-side'},React.createElement('h3',{className:'num'},'26'),React.createElement('h3',{},'Shoot')),React.createElement('div',{className:'center'},React.createElement('h3',{className:'num'},'94'),React.createElement('h3',{},'Followers')),React.createElement('div',{className:'right-side'},React.createElement('h3',{className:'num'},'139'),React.createElement('h3',{},'Following'))),
      
  ))
)
}

export default App;