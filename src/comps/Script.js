import React from "react";
// import { React } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from '../config/firebase';

// var inputTitle = document.getElementById('inputTitle')
// var inputDescription = document.getElementById('inputDescription')
// var inputPrice = document.getElementById('inputPrice')
// var inputNumber = document.getElementById('inputNumber')
// var postbtn = document.getElementById('postbtn')
// if(inputTitle.value,inputDescription.value,inputPrice.value,inputNumber.value === ''){
//     postbtn.disabled = true
// }
// else {
//     postbtn.disabled = false
// }
// upload.addEventListener('change' , function(){
//     if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png'){
//         alert('sorry you have to upload an image')
//     }else{
//         img.src = URL.createObjectURL(this.files[0])
//     }
// })
function Script() {
   
    return (
        function addItem() {
            var inputTitle = document.getElementById('inputTitle')
            var inputDescription = document.getElementById('inputDescription')
            var inputPrice = document.getElementById('inputPrice')
            var inputNumber = document.getElementById('inputNumber')
            var upload = document.getElementById('upload')

            var card_create = document.getElementById('card_create')
            var div1 = document.createElement('div');
            div1.setAttribute('class', 'col col-md-3 col-sm-6 inlineelement')
            var div2 = document.createElement('div');
            div2.setAttribute('class', 'card')
            div1.appendChild(div2)
            var img = document.createElement('img')
            img.setAttribute('class', 'card-img-top')
            img.setAttribute('height', '120')
            img.setAttribute('alt', 'Product image')
            // img.setAttribute('src', require('./images/download.jpg'))
            img.src = upload.addEventListener('change' , function(){
                if(this.files[0].type!='image/jpeg' && this.files[0].type!='image/png'){
                    alert('sorry you have to upload an image')
                }else{
                    img.src = URL.createObjectURL(this.files[0])
                    console.log(img.src)
                }
            })
            console.log(img.src)
            div2.appendChild(img)
            var div3 = document.createElement('div')
            div3.setAttribute('class', 'card-body')
            var h6 = document.createElement('h6')
            h6.setAttribute('class', 'basiccolor')
            var h6para = document.createTextNode(inputTitle.value)
            h6.appendChild(h6para)
            var h4 = document.createElement('h4')
            h4.setAttribute('class', 'basiccolor')
            var h4para = document.createTextNode("Rs: " +inputPrice.value)
            h4.appendChild(h4para)
            var p = document.createElement('p')
            p.setAttribute('class', 'card-text')
            var ppara = document.createTextNode(inputDescription.value)
            p.appendChild(ppara)
            div3.appendChild(h4)
            div3.appendChild(h6)
            div3.appendChild(p)
            div1.appendChild(div3)
            div2.appendChild(div3)
            card_create.appendChild(div1);
        
            inputTitle.value = '';
            inputDescription.value = '';
            inputPrice.value = '';
            inputNumber.value = '';
           
           
        }
    )
}

export default Script;

