document.getElementById('go').onclick = function() {
  var name = document.person_info.name.value;
  var cookie;
  var date = new Date();
  date.setDate(date.getDate() + 7);
  console.log(name);
  document.getElementsByName('message')[0].innerHTML = name+"님, 환영합니다";
  document.getElementsByName('map')[0].width=600;
  document.getElementsByName('map')[0].height=300;
};
