// p for license
let c=document.getElementById('about')
let p=document.createElement('p')
p.innerText="نقوم في مكان بعملية التخطيط المعماري للمشروع، آخذين بالاعتبار جميع اشتراطات المملكة لتوفير مساكن مميزة للمستفيدين من المشروع، وتوفير جميع الخدمات والمرافق ووسائل الراحة والأمان وموقع المشروع المتميز لخدمة عملية الحركة وجعلها أكثر مرونة."
let title=document.getElementById('lic')
title.addEventListener('click',function () {
    
   console.log('test');

   c.appendChild(p)
   
           let span= document.createElement('span')
           span.innerHTML="\u00d7";
          c.appendChild(span)
          span.id='s'

span.addEventListener('click',function() {    
  c.removeChild(p)
  c.removeChild(span)
  removeEventListener(span)
})
})


p.id="para"