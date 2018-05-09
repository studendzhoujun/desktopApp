/*
 * @Author: zhouJun 
 * @Date: 2018-05-09 20:04:35 
 * @Last Modified by: zhouJun
 * @Last Modified time: 2018-05-09 20:10:06
 */

 var oDiv = document.querySelector('.box')
 oDiv.addEventListener('mouseover',function(){
     this.style.background='red'
 })
 oDiv.addEventListener('mouseout',function(){
    this.style.background='#909'
})