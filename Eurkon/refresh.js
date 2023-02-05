<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="/assets/js/Meting.min.js"></script>eurkon.switchThemeColor(eurkon.getMainColor())
eurkon.switchPageTitle()
eurkon.catalogActive()

// 顶部菜单栏 评论按钮
if (document.getElementById('comment-button')) document.getElementById('comment-button').style.display = document.getElementById('post-comment') ? 'block' : 'none'
if (document.getElementById('barrage-btn')) document.getElementById('barrage-btn').style.display = document.getElementById('post-comment') ? 'block' : 'none'

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 27) { // ESC
    if (!document.getElementById('rightside')?.classList.contains('hidden') || !document.getElementById('rightside-mask')?.classList.contains('hidden')) {
      document.getElementById('rightside')?.classList.add('hidden')
      document.getElementById('rightside-mask')?.classList.add('hidden')
    }
    else {
      eurkon.exitFullScreen()
    }
  }
});

