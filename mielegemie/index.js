// 公共的方法
// 设置样式
function setStyle(d, styleObject) {
  for (var key in styleObject) {
    d["style"][key] = styleObject[key];
  }
  d["style"]["transition"] = ".225s";
}
// 生成随机的坐标
function randomPosition(min, max) {
  return randomKey(min, max);
}
// 生成随机的数字 (min,max)
function randomKey(min, max) {
  return Math.random() * (max - min + 1) + min;
}
// 打乱数组
function randomSort(a, b) {
  return Math.random() > 0.5 ? -1 : 1;
}
// 获取dom元素
var app = document.querySelector('#app');
// 设置图片大小
var $width = 50;
var $height = 50;
var $storeNum = 8;
// 多少组 3的倍数 确保有解
var BlockNums = 15;
// 存放Block
var allBlock = [];
// 图片的地址
var IMGS = [
  './img/1.png',
  './img/2.png',
  './img/3.png',
  './img/4.png',
  './img/5.png',
  './img/6.png',
  './img/7.png',
  './img/8.png',
  './img/9.png',
  './img/10.png',
  // './img/11.png',
];
// 游戏是否结束
let gameOver = false;
// 计算渲染区域位置
function calPosition() {
  //获取APP的位置信息
  const { x, y } = app.getBoundingClientRect();
  const AppPosition = {
    x,
    y,
    drawStartX: 20,
    drawStartY: 20,
    drawEndX: app.offsetWidth - 70,
    drawEndY: app.offsetHeight - 200,
  }
  return AppPosition;
}
const AppPosition = calPosition();
// 收集盒数组
const hasBlockArr = [];
var startLeft;
// 获取收集盒的位置信息
var storageBoxPosition;
//  获取收集盒中第一张图片的位置
// 将块放入收集盒中
function computedBoxPosition(target, targetDomClass) {
  setStyle(target, { zIndex: 9999 })
  const Item = {target, targetDomClass}
  storageBoxPosition = storageBox.getBoundingClientRect();
  startLeft = storageBoxPosition.x - AppPosition.x + 5;
  const top = storageBoxPosition.y - AppPosition.y + 5 + 'px';
  if (!hasBlockArr.length) {
    setStyle(target, {
      left: startLeft + 'px',
      top
    })
    targetDomClass.left = startLeft;
    hasBlockArr.push(Item);
    Item.targetDomClass.blockState = false;
  }
  else if(hasBlockArr.length<=$storeNum){
    const hasIndex = hasBlockArr.findIndex((v) => {
      return v.targetDomClass.n==targetDomClass.n
    })
    if (hasIndex == -1) {
      const left = startLeft + hasBlockArr.length * $width;
      setStyle(target, {
        left: left + 'px',
        top
      })
      targetDomClass.left = left;
      hasBlockArr.push(Item);
    }
    else {
      for (let index = hasBlockArr.length - 1; index >= hasIndex; index--){
        const newleft = startLeft + (index + 1) * $width;
        setStyle(hasBlockArr[index].target, {
          left: newleft + 'px'
        })
        hasBlockArr[index].targetDomClass.left = newleft;
      }
      const left = startLeft + hasIndex * $width;
      setStyle(target, {
        left: left + 'px',
        top
      })
      targetDomClass.left = left;
      hasBlockArr.splice(hasIndex, 0, Item);
      Item.targetDomClass.blockState = false;
    }
  }
  Item.target.classList.remove('noSelect');
  Item.target.classList.add('isSelect');
  const removeIndex = allBlock.findIndex((v) => {
    return v.index == Item.targetDomClass.index
  });
  // 删除对应元素
  allBlock.splice(removeIndex, 1);
  // 暴力高亮，重新渲染
  const noSelect = document.querySelectorAll('.noSelect')
  // 删除剩余元素
  for (let i = 0; i < noSelect.length; i++){
    app.removeChild(noSelect[i]);
  }
  // 重新渲染
  allBlock.forEach((item) => {
    app.appendChild(item.draw())
  })
}
// 验证输赢
function GameState() {
  if (hasBlockArr.length == $storeNum) {
    alert('恭喜你输了！');
    gameOver = true;
  }
  if (!allBlock.length && !hasBlockArr.length) {
    alert('很遗憾你赢了！');
    gameOver = true;
  }
  //判断游戏结束
  if (gameOver) {
    window.location.reload(false)
  }
}
// 消除相同块
function checkBox() {
  let checkMap = {};//接收收集盒中相同图片的数据（统计）
  hasBlockArr.forEach((item, index) => {
    if (!checkMap[item.targetDomClass.n]) {
      checkMap[item.targetDomClass.n]=[]
    }
    checkMap[item.targetDomClass.n].push({
      index: index,
      id:item.targetDomClass.index
    })
    for (let key in checkMap) {
      if (checkMap[key].length == 3) {
        // console.log('keyi');
        // 删除数组中元素
        hasBlockArr.splice(checkMap[key][0].index, 3)
        // 删除dom中元素
        setTimeout(() => {
          checkMap[key].forEach((item) => {
            var box = document.getElementById(item.id);
            box.parentNode.removeChild(box);
          })
          // 改变其他dom元素的位置
          hasBlockArr.forEach((item, index) => {
            var left = startLeft + index * $width + 'px';
            setStyle(item.target, {
              left
            });
            item.targetDomClass.left = left;
          })
        }, 300)
      }
    }
  })
  // 验证状态
  setTimeout(() => {
    GameState();
  }, 500);
}
// 定义点击事件
function clickBlock(target, targetDomClass) {
  // console.log(targetDomClass);
  if (targetDomClass.blockState) {
    computedBoxPosition(target, targetDomClass);
    checkBox();
  }
}
// 定义一个类
class Block{
  constructor(src, i) {
    this.width = $width;
    this.height = $height;
    this.src = src;
    this.index = i;
    this.n = src;
    this.blockState = false;
    this.x = randomPosition(AppPosition.drawStartX, AppPosition.drawEndX);
    this.y = randomPosition(AppPosition.drawStartY, AppPosition.drawEndY)
  }
  isCover() {
    var thisBlock;//当前元素
    var coverState = false;
    for (let i = 0; i < allBlock.length; i++){
      if (allBlock[i].index === this.index) {
        //找当前元素
        thisBlock = allBlock[i];
      }
      else if (thisBlock) {
        //找目标元素
        const target = allBlock[i];
        var xLeft = target.x;
        var xRight = target.x + target.width;
        var yTop = target.y;
        var yBottom = target.y + target.height;
        if (!(thisBlock.x > xRight || thisBlock.x + thisBlock.width < xLeft || thisBlock.y > yBottom || thisBlock.y + thisBlock.height < yTop)) {
          coverState = true;
          break;
        }

      }
    }
    return coverState;
  }
  draw() {
    var imgDom = new Image();
    imgDom.src = this.src;
    imgDom.id = String(this.index);
    imgDom.classList = 'noSelect imgGlobal';
    imgDom.onclick = clickBlock.bind(null, imgDom, this);
    var style = {
      width: this.width + 'px',
      height: this.height + 'px',
      left: this.x + 'px',
      top: this.y + 'px',
    };
    if (this.isCover()) {
      imgDom.classList.add('imgFilter');
      this.blockState = false;
    }
    else {
      imgDom.classList.remove('imgFilter');
      this.blockState = true;
    }
    setStyle(imgDom, style);
    return imgDom;
  };
};
function drawBlock(gloup) {
  var virtualArr = [];
  for (var i = 0; i < gloup; i++) {
    virtualArr.push.apply(virtualArr, IMGS.sort(randomSort));
  }
  // console.log(virtualArr.length);
  virtualArr.forEach(function (item, index) {
    var vBlock = new Block(item, index);
    allBlock.push(vBlock);
  });
  // console.log(allBlock);
  allBlock.forEach(function (item) {
    app.appendChild(item.draw());
  });
}
// 获取收集盒子的dom元素
const storageBox = document.getElementById('storageBox');

window.onload = () => {
  drawBlock(BlockNums);
  setStyle(storageBox, {
    border:'5px solid red'
  })
}
