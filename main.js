(()=>{"use strict";var e={420:(e,t,r)=>{e.exports=r.p+"bed8c136e13907f5eefb.svg"},724:(e,t,r)=>{e.exports=r.p+"6666407ac3aa5af1d5de.jpg"},892:(e,t,r)=>{e.exports=r.p+"84a69e2a88582107beb5.jpg"},692:(e,t,r)=>{e.exports=r.p+"81f9808b88871ce01200.jpg"},784:(e,t,r)=>{e.exports=r.p+"d54fc136d7e0d52199e6.jpg"},976:(e,t,r)=>{e.exports=r.p+"8a65f75d3d836c291cc9.svg"},964:(e,t,r)=>{e.exports=r.p+"2af49b82d305a6ea3442.svg"},440:(e,t,r)=>{e.exports=r.p+"6c7bf05444b9793fdf6e.svg"},452:(e,t,r)=>{e.exports=r.p+"a7ffe37dcb927ba0c46c.svg"},488:(e,t,r)=>{e.exports=r.p+"df0c965524717a3fd8e9.svg"},364:(e,t,r)=>{e.exports=r.p+"0863e5bc26221680f1e2.svg"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}r.m=e,r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="",r.b=document.baseURI||self.location.href,(()=>{function e(e){document.addEventListener("keydown",n),e.classList.add("popup_is-opened")}function t(e){document.removeEventListener("keydown",n),e.classList.remove("popup_is-opened")}function n(e){"Escape"===e.key&&t(document.querySelector(".popup_is-opened"))}var o={url:"https://nomoreparties.co/v1/wff-cohort-11/",headers:{authorization:"cb84c739-4986-447f-b45b-898c907879fa","Content-Type":"application/json"}};function u(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}function c(e){return fetch("".concat(o.url,"cards/likes/").concat(e),{method:"PUT",headers:o.headers}).then((function(e){return u(e)}))}function a(e){return fetch("".concat(o.url,"cards/likes/").concat(e),{method:"DELETE",headers:o.headers}).then((function(e){return u(e)}))}var i=document.querySelector("#card-template").content;function l(e,t,r,n,o){var u=i.cloneNode(!0),c=u.querySelector(".card__delete-button"),a=u.querySelector(".card__image"),l=u.querySelector(".likes"),s=u.querySelector(".card__like-button");return l.textContent=e.likes.length,a.src=e.link,a.alt=e.name,a.id=e._id,u.querySelector(".card__title").textContent=e.name,e.owner._id!==o?c.remove():c.addEventListener("mousedown",(function(){return t(a)})),e.likes.some((function(e){return e._id===o}))&&s.classList.toggle("card__like-button_is-active"),a.addEventListener("mousedown",(function(){n(e.link,e.name)})),s.addEventListener("mousedown",r),u}function s(e){var t=e.target.closest(".card"),r=t.querySelector(".card__image").id,n=t.querySelector(".likes");(e.target.classList.contains("card__like-button_is-active")?a:c)(r).then((function(t){e.target.classList.toggle("card__like-button_is-active"),n.textContent=t.likes.length})).catch((function(e){return console.log(e)}))}var p=["formSelector"],d=["inputSelector","submitButtonSelector"];function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.textContent="",n.classList.remove(r.errorClass)}function y(e,t,r){var n=r.inactiveButtonClass;!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.removeAttribute("disabled"),t.classList.remove(n)):v(t,n)}function m(e,t){var r=t.inputSelector,n=t.submitButtonSelector,o=Array.from(e.querySelectorAll(r)),u=e.querySelector(n);o.forEach((function(r){_(e,r,t)})),v(u,t)}function v(e,t){e.setAttribute("disabled",""),e.classList.add(t.inactiveButtonClass)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var h=document.querySelector(".places__list"),S=document.querySelector(".popup_type_new-card"),g=S.querySelector(".popup__form"),q=document.querySelector(".profile__edit-button"),L=document.querySelector(".popup_type_edit"),x=document.querySelector(".profile__add-button"),C=L.querySelector(".popup__form"),E=C.querySelector(".popup__input_type_name"),w=C.querySelector(".popup__input_type_description"),k=document.querySelector(".profile__title"),j=document.querySelector(".profile__description"),O=document.querySelector(".popup__input_type_card-name"),A=document.querySelector(".popup__input_type_url"),U=document.querySelector(".popup_type_image"),R=U.querySelector(".popup__image"),P=U.querySelector(".popup__caption"),T=document.querySelector(".popup_type_delete_card"),B=T.querySelector(".popup__button"),I=document.querySelector(".profile__image"),D=I.querySelector(".profile__image-hover"),M=document.querySelector(".popup_type_avatar"),N=M.querySelector(".popup__form"),z=N.querySelector(".popup__input"),J=document.querySelectorAll(".popup"),H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},V="",$=[fetch("".concat(o.url,"cards"),{headers:o.headers}).then((function(e){return u(e)})),fetch("".concat(o.url,"users/me"),{headers:o.headers}).then((function(e){return u(e)}))];function F(t,r){R.src=t,R.alt=r,P.textContent=r,e(U)}Promise.all($).then((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,c,a=[],i=!0,l=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=u.call(r)).done)&&(a.push(n.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return a}}(t,r)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],u=n[1];k.textContent=u.name,j.textContent=u.about,I.style.backgroundImage="url('".concat(u.avatar,"')"),V=u._id,o.forEach((function(e){h.append(l(e,K,s,F,V))}))})).catch((function(e){return console.log(e)}));var G="";function K(t){e(T),G=t}function Q(e){e.textContent="Сохранение..."}B.addEventListener("mousedown",(function(){return r=t,n=T,void(c=(e=G).id,fetch("".concat(o.url,"cards/").concat(c),{method:"DELETE",headers:{authorization:o.headers.authorization,"Content-Type":"application/json"}}).then((function(e){return u(e)}))).then((function(){e.closest(".card").remove()})).catch((function(e){return console.log(e)})).finally((function(){return r(n)}));var e,r,n,c})),q.addEventListener("mousedown",(function(){E.value=k.textContent,w.value=j.textContent,C.querySelector(".popup__button").textContent="Сохранить",e(L),m(L,H)})),x.addEventListener("mousedown",(function(){g.querySelector(".popup__button").textContent="Сохранить",e(S),m(S,H)})),D.addEventListener("mousedown",(function(){z.value="",N.querySelector(".popup__button").textContent="Сохранить",e(M),m(M,H)})),J.forEach((function(e){e.addEventListener("mousedown",(function(r){(r.target.classList.contains("popup_is-opened")||r.target.classList.contains("popup__close"))&&t(e)}))})),C.addEventListener("submit",(function(e){e.preventDefault(),Q(C.querySelector(".popup__button")),function(e,t){return fetch("".concat(o.url,"users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return u(e)}))}(E.value,w.value).then((function(t){k.textContent=t.name,j.textContent=t.about,e.target.reset()})).catch((function(e){return console.log(e)})).finally((function(){return t(L)}))})),g.addEventListener("submit",(function(e){var r,n;e.preventDefault(),Q(g.querySelector(".popup__button")),(r=O.value,n=A.value,fetch("".concat(o.url,"cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:r,link:n})}).then((function(e){return u(e)}))).then((function(e){var t=l(e,K,s,F,V);h.prepend(t)})).catch((function(e){return console.log(e)})),e.target.reset(),t(S)})),N.addEventListener("submit",(function(e){var r;e.preventDefault(),Q(N.querySelector(".popup__button")),(r=z.value,fetch("".concat(o.url,"users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:r})}).then((function(e){return u(e)}))).then((function(t){I.style.backgroundImage="url('".concat(t.avatar,"')"),e.target.reset()})).catch((function(e){return console.log(e)})).finally((function(){return t(M)}))})),function(e){var t=e.formSelector,r=f(e,p);Array.from(document.querySelectorAll(t)).forEach((function(e){!function(e,t){var r=t.inputSelector,n=t.submitButtonSelector,o=f(t,d),u=Array.from(e.querySelectorAll(r)),c=e.querySelector(n);y(u,c,o),u.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?_(e,t,r):function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(e,t,t.validationMessage,r)}(e,t,o),y(u,c,o)}))}))}(e,r)}))}(H),new URL(r(420),r.b),new URL(r(724),r.b),new URL(r(892),r.b),new URL(r(692),r.b),new URL(r(784),r.b),new URL(r(976),r.b),new URL(r(964),r.b),new URL(r(440),r.b),new URL(r(452),r.b),new URL(r(488),r.b),new URL(r(364),r.b)})()})();