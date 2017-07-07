window.addEventListener('DOMContentLoaded', function(){
  var maman = ["ﾏｧﾏ...👶", "ﾊﾞﾌﾞｩ！", "ママァ〜！", "おっぱい🚼", "ちゅき♥", "でちゃった(照)"];
  var real = 0;
  var mama = function(){
    console.log(maman[Math.floor(Math.random()*maman.length)]);
    setTimeout(arguments.callee, 5000);
    if(real == 60 || real++ > 5000000000000000){
      if(real++ % 2 == 0){
        console.log("期待しても何もでねえよ?");
      }else{
        console.log("アホ(笑)");
        real = 0;
      }
    }
  }
  mama();
});
