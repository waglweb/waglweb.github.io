// people click event      
function peopleOn() {
  // 이전 활성화된 프로필 off
  $('.people').removeClass('on').unbind('click').click(peopleOn);
  $('.people_detail.on').slideUp(250);
  // 클릭된 프로필 on
  $(this).addClass('on');
  var id = $(this).attr('id');
  $('#'+id+'_detail').slideDown(250).addClass('on');
  // 이벤트 리스너 제거        
  $(this).unbind('click');
  $(this).click(peopleOff);
}

function peopleOff() {
  // 활성화된 프로필 off
  $('.people').removeClass('on').unbind('click').click(peopleOn);
  $('.people_detail.on').slideUp(250);
  // 이벤트 리스너 제거
  $(this).unbind('click');
  $(this).click(peopleOn);
}

$('.people').click(peopleOn);
