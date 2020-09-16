import React from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'

import styles from './confetti.css'

const CANVAS_ID = `canvas`

export const Confetti = () => {
  const confetti = useSelector(state => state.user.confetti)

  React.useEffect(() => {
    throwConfetti()
  }, [])

  return (
    <canvas
      className={classNames(styles.confetti, {
        [styles.on]: confetti,
      })}
      id={CANVAS_ID}
    />
  )

  // https://codepen.io/ma_suwa/pen/oNXxQxZ
  function throwConfetti() {
    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame

    var canvas = document.querySelector("canvas")

    if (canvas) {
      canvas.width = window.innerWidth
      canvas.height = 1940
      var ctx = canvas.getContext("2d")
      ctx.globalCompositeOperation = "source-over"
      var particles = []
      var pIndex = 0
      var x, y, frameId

      function Dot(x,y,vx,vy,color){
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.color = color
        particles[pIndex] = this
        this.id = pIndex
        pIndex++
        this.life = 0
        this.maxlife = 600
        this.degree = getRandom(0,360)// Shift start angle
        this.size = Math.floor(getRandom(8,10))// Change the size of confetti
      };

      Dot.prototype.draw = function(x, y){

        this.degree += 1
        this.vx *= 0.99// gravity
        this.vy *= 0.999// gravity
        this.x += this.vx+Math.cos(this.degree*Math.PI/180)// meandering
        this.y += this.vy
        this.width = this.size
        this.height = Math.cos(this.degree*Math.PI/45)*this.size// Change the height and make it look like it is rotating
        // Confetti depiction
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.moveTo(this.x+this.x/2, this.y+this.y/2)
        ctx.lineTo(this.x+this.x/2+this.width/2, this.y+this.y/2+this.height)
        ctx.lineTo(this.x+this.x/2+this.width+this.width/2, this.y+this.y/2+this.height)
        ctx.lineTo(this.x+this.x/2+this.width, this.y+this.y/2)
        ctx.closePath()
        ctx.fill()
        this.life++
        // Remove confetti when life is gone
        if(this.life >= this.maxlife){
          delete particles[this.id]
        }
      }
      // Resizing process
      window.addEventListener("resize", function(){
        canvas.width = window.innerWidth
        x = canvas.width / 2
        y = canvas.height / 2
      })

      function loop(){
        // Color the entire screen. Increasing the transmittance increases the afterimage
        ctx.clearRect(0,0, canvas.width, canvas.height)
        // Adjusting the amount of confetti
        if(frameId % 3 === 0) {
          new Dot(canvas.width*Math.random()-canvas.width+canvas.width/2*Math.random(), -canvas.height/2, getRandom(1, 3),  getRandom(2, 4),"#ED1A3D")
          new Dot(canvas.width*Math.random()+canvas.width-canvas.width*Math.random(), -canvas.height/2,  -1 * getRandom(1, 3),  getRandom(2, 4),"green")
          new Dot(canvas.width*Math.random()+canvas.width-canvas.width*Math.random(), -canvas.height/2,  1 * getRandom(1, 3),  getRandom(2, 4),"blue")
        }
        for(var i in particles){
          particles[i].draw()
        }
        frameId = requestAnimationFrame(loop)
      }

      loop()

      function getRandom(min, max) {
        return Math.random() * (max - min) + min
      }
    }
  }
}
