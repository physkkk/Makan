// greeting user by the name


let name1=document.getElementById('name')
name1.innerText=name1


let button=document.getElementById('myForm')

button.addEventListener('click',function name(params) {
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: ' تهانينا '+"لقد اصبحت الآن جزء مننا",
    showConfirmButton: true,
    timer: 15000
  })

})


// let name1=document.getElementById('name')
// name1.innerText=name1

let b3=document.getElementById('but')

b3.addEventListener('click',function () {
    console.log('test');
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: name1.value+' تهانينا '+"لقد اصبحت الآن جزء مننا",
        showConfirmButton: false,
        timer: 1500
      })
})










// Swal.fire(
//   'تهانيا!',
//   ' لقد اصبحت عضوا معنا!',
//   'بنجاح'
// )










// const Toast = Swal.mixin({
//      toast: true,
//     position: 'top-end',
//   showConfirmButton: false,
//     timer: 3000,
//      timerProgressBar: true,
//      didOpen: (toast) => {
//        toast.addEventListener('mouseenter', Swal.stopTimer)
//        toast.addEventListener('mouseleave', Swal.resumeTimer)
//     }
//    })
  
//    Toast.fire({
//     icon: 'success',
//      title: 'Signed in successfully'
//    })
  

























//  let namee=document.getElementById('name')
//  let test=document.getElementById("test")
//   let b=document.getElementById('but');

//   b.addEventListener('click',function () {


//     let greet=document.createElement('h1')
//     test.appendChild(greet)
//     greet.innerText=('مرحبا بك في صفحتنا '+ namee.value)
  

//     let ve=alert('تهانينا '+ namee.value+"," +' لقد اصبحت عضوا معنا')

//   localStorage.setItem(namee.value)
//   })




























// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.addEventListener('mouseenter', Swal.stopTimer)
//     toast.addEventListener('mouseleave', Swal.resumeTimer)
//   }
// })

// Toast.fire({
//   icon: 'success',
//   title: 'Signed in successfully'
// })




// let namee=document.getElementById('name')
//  let test=document.getElementById("test")
//  let b=document.getElementById('but');

//  b.addEventListener('click',function () {


//    let greet=document.createElement('h1')
//    test.appendChild(greet)
//    greet.innerText=('hello '+ namee.value)
  

//    let ve=alert('Congrats '+ namee.value+"," +' You Are Now A Member')

//  localStorage.setItem(namee.value)
//  })
