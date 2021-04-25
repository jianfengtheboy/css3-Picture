/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-25 23:12:10
 * @LastEditTime: 2021-04-25 23:16:32
 * @Description: 
 */
var retrieverPolygons = document.querySelector('#retriever').querySelectorAll('polygon')
var flamengoPolygons = document.querySelector('#flamengo').querySelectorAll('polygon')
var passerinePolygons = document.querySelector('#passerine').querySelectorAll('polygon')

var all = [retrieverPolygons, flamengoPolygons, passerinePolygons]

var container = document.querySelector('#container')
var shapeshifter = new Shapeshifter(container, 0, 0, all[0], {
  defaultSpeed: 0.03,
  scale: 0.3,
  center: true,
  strokeOnly: false
})

var shapeshifterStroke = new Shapeshifter(container, 0, 0, all[0], {
  defaultSpeed: 0.01,
  scale: 0.8,
  center: true,
  strokeOnly: true
})

function loop() {
  shapeshifter.loop()
  shapeshifterStroke.loop()
  window.requestAnimationFrame(loop)
}
loop()

var animationState = 0
window.addEventListener('click', function(){
  animationState++
  if (animationState >= all.length) animationState = 0
  shapeshifter.transform( all[animationState] )
  shapeshifterStroke.transform( all[animationState] )
})
