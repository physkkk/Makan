let name1=document.getElementById('name')



let b4=document.getElementById('b')
b4.addEventListener('click',function name(params) {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'تم الإرسال بنجاح '+name1.value,
        showConfirmButton: false,
        timer: 19000
      })

      
})



