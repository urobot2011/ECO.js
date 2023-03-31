# ECO.js
```html
<script src="https://urobot2011.github.io/SaveMartin/MartyBot/chess/chess.js"></script>
<script src="https://urobot2011.github.io/ECO.js/src/ECO.js"></script>
<script>
  var ECO = new ECOjs(new Chess());
  //here is your code
  var openings = ECO.engineOnly.currentlyAvailableOpening(game);
  game.move(openings[Math.floor(Math.random() * openings.length)].move);
  board.position(game.fen());
</script>
```
