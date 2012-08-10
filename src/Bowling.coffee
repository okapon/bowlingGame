window.throw_bowl = (i) ->
  window.pins.push i

window.getScore = ->
  for i in window.pins
    window.score += i
