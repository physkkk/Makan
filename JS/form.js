let b=document.getElementById('btn')
let name1=document.getElementById('name')
b.addEventListener('click',function name(params) {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'تم الإرسال بنجاح '+name1.value,
        showConfirmButton: false,
        timer: 19000
      })
})