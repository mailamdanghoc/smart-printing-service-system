const freebtn = document.querySelector('#free')
const freecls = document.querySelector('#close_free')

freebtn.addEventListener("click", function () {
  document.querySelector('.printer_info_free').style.display = "flex"
})

freecls.addEventListener("click", function () {
  document.querySelector('.printer_info_free').style.display = "none"
})

const busybtn = document.querySelector('#busy')
const busycls = document.querySelector('#close_busy')

busybtn.addEventListener("click", function () {
  document.querySelector('.printer_info_busy').style.display = "flex"
})

busycls.addEventListener("click", function () {
  document.querySelector('.printer_info_busy').style.display = "none"
})

const unavailbtn = document.querySelector('#unvailable')
const unavailcls = document.querySelector('#close_unavailable')

unavailbtn.addEventListener("click", function () {
  document.querySelector('.printer_info_unavailable').style.display = "flex"
})

unavailcls.addEventListener("click", function () {
  document.querySelector('.printer_info_unavailable').style.display = "none"
})