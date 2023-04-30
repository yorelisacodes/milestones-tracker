// var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
// var thumbDown = document.getElementsByClassName("fa-thumbs-down");
const messagesList = document.querySelector('.messages');
const profileName = document.querySelector('#profile')
// const parent = document.querySelector('#parent')
// const baby =document.querySelector('#baby')

// profileName.addEventListener('click', function(){
//   fetch('profile', {
//     method: 'post',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       'parentName': parent.value,
//       'babyName' : baby.value
     
//     })
//   })
// })



// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });
// Array.from(thumbDown).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('messages/thumbDown', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbUp':thumbUp
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const description = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//           let newMsg = msg.trim()
//         const height = this.parentNode.parentNode.childNodes[5].innerText
//           let newHeight = height.trim()
//         const place = this.parentNode.parentNode.childNodes[9].innerText
//         console.log('message',newMsg),
//         console.log('message', newHeight)
  for (let t of trash){
    t.addEventListener('click', function(){
      fetch('messages', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({
          id : t.id,
          
        })
       
      })
      .then(function (response) {
        window.location.reload()
      })
    })
  }
        
      
//       });
      
// });


// messagesList.addEventListener('click', (event) => {
//   const trashIcon = event.target.closest('.fa-trash');
//   if (!trashIcon) {
//     return;
//   }
//   const messageElement = trashIcon.closest('.message');
//   const description = messageElement.querySelector('span:nth-child(1)').innerText;
//   const msg = messageElement.querySelector('span:nth-child(2)').innerText;
//   const height = messageElement.querySelector('span:nth-child(3)').innerText;
//   const place = messageElement.querySelector('span:nth-child(4)').innerText;

//   fetch('/messages', {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       description,
//       msg,
//       height,
//       place
//     })
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     window.location.reload();
//   })
//   .catch(error => console.error('There was a problem deleting the message:', error));
// });

