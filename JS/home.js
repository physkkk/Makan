let b=document.getElementById('button')
b.addEventListener('click',function () {
    console.log('test');
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'تم التحقق بنجاح',
        showConfirmButton: false,
        timer: 1000
      })
})

// title
let bg=document.getElementById('test')
let title=document.createElement('h1')
title.innerText="مكان .. لتمكين .. كل بنيان"
bg.appendChild(title)
//get to know us
let who=document.getElementById('who')
let h2=document.createElement('h2')
h2.innerText='مين حنا؟'
who.appendChild(h2)

