function firstQuestion(){
    var audio = new Audio('../sound/music.mp3');
    $('.content').hide();
    Swal.fire({
        title: CONFIG.introTitle,
        text: CONFIG.introDesc,
        imageUrl: 'img/1.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("../img/iput-bg.jpg")',
        imageAlt: 'Custom image',
        confirmButtonText: CONFIG.btnIntro
      }).then(function(){
        $('.content').show(200);
      })
}