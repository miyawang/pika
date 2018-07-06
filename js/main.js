! function () {
  var duration = 50;

  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code');
    let styleTag = document.querySelector('#styleTag');
    let n = 0;
    setTimeout(function run() {
      n += 1;
      // container.innerHTML = code.substring(0, n);
      container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)

      styleTag.innerHTML = code.substring(0, n);
      // 每次写完 都要自动往下翻
      container.scrollTop = container.scrollHeight;
      if (n < code.length) {
        // window.clearInterval(timer);
        // fn && fn.call();
        setTimeout(run, duration);
      } else {
        fn && fn.call();
      }
    }, duration)
  }
  let code = `
/*
 * 一直以来，想拥有一只皮卡皮卡皮卡丘，
 * 但是呢，只能画一只送给自己。
 */
.preview{
  height: 50vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #FFE035;
  display: flex;
}
.wrapper {
  width: 100%;
  height: 166px;
  position: relative;
}
/*
 * 画完皮卡的皮肤后，我很想问小智：
 * 小智你的皮卡丘掉毛吗？
 */
/*
 * 接下来给皮卡一只小小的鼻子
 */
.nose {
  width: 22px;
  height: 16px;
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -11px;
  border:11px solid #000;
  border-color:#000 transparent transparent transparent;
  border-radius: 50%;
}
/*
 * 皮卡的眼睛要萌萌哒、亮亮哒~
 */
.eye {
  width: 50px;
  height: 50px;
  background-color: #111;
  position: absolute;
  border:2px solid #000;
  border-radius: 50%;
}
.eye::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  position: absolute;
  border-radius: 50%;
  left: 6px;
  top:-2px;
  border: 2px solid #000;
  background:#fff;
}
.eye.left {
  right: 50%;
  margin-right: 90px;
}
.eye.right {
  left: 50%;
  margin-left: 90px;
}
/*
 * 好想捏一捏这两个苹果红的脸颊哦，不过，
 * 小智，你的皮卡丘掉毛吗？
 */
.apple-cheeked {
  width: 68px;
  height: 68px;
  background: #E23D22;
  border:2px solid #000;
  border-radius: 50%;
  position: absolute;
  top: 85px;
}
.apple-cheeked.left{
  right: 50%;
  margin-right: 116px;
}
.apple-cheeked.right{
  left: 50%;
  margin-left: 116px;
}
/*
 * 还有哦，皮卡到底是猫科动物呢还是什么科的？
 */
.upper-lip {
  height: 40px;
  width: 80px;
  position: absolute;
  top: 44px;
  background-color: #FFE035;
  z-index: 2;
}
.upper-lip.left{
  right: 50%;
  border-right:3px solid #000;
  border-bottom:3px solid #000;
  border-bottom-left-radius: 60px 40px;
  border-top: none;
  border-right:none;
  transform: rotate(-30deg);
  margin-right: 2px;
}
.upper-lip.right{
  left: 50%;
  border-left:3px solid #000;
  border-bottom:3px solid #000;
  border-bottom-right-radius: 60px 40px;
  border-top: none;
  border-left:none;
  transform: rotate(30deg);
  margin-left: 2px;
}

.lower-lip {
  width: 120px;
  height: 600px;
  background-color: #990513;
  border-radius: 50%;
  border:2px solid #000;
  bottom: 0;
  position: absolute;
  left: 50%;
  margin-left: -60px;
  overflow: hidden;
}
.lip-wrapper {
overflow: hidden;
  height: 140px;
  width:200px;
  position: absolute;
  left: 50%;
  bottom: -37px;
  margin-left: -100px;
}
/*
 * 皮卡皮卡，皮卡丘~
 */
.lower-lip::after {
  content: '';
  width: 100px;
  height: 110px;
  position: absolute;
  left: 50%; 
  bottom: 0;
  background-color: #fc4a62;
  margin-left: -50px;
  border-radius: 46px;
}
/*
 * 小舌头一吐出来，哎呦不行了，萌翻了~
 */

`
  writeCode('', code);
  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget); //用户点击的那个button
    let speed = $button.attr('data-speed');
    console.log(speed);
    $button.addClass('active').siblings('.active')
      .removeClass('active');
    switch (speed) {
      case 'slow':
        duration = 100;
        break;
      case 'normal':
        duration = 50;
        break;
      case 'fast':
        duration = 10;
        break;
    }
  })
  // 所有的setInterval都可以用setTimeOut
}.call();