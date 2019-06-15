<script>
function provideQuery(avgPrice) {
  if (avgPrice === undefined) { avgPrice = 4; }
  var probability = Math.floor((Math.random() * 1000));
  var range = 1;
  if (probability >= 680 && probability < 950) {
    range = 2;
  }
  if (probability >= 950 && probability < 997) {
    range = 3;
  }
  if (probability >= 997) {
    range = 4;
  }
  var minP = avgPrice-1.5*range;
  var maxP = avgPrice+1.5*range;
  if (minP < 0) { minP = 0; }
  if (maxP > 10) { maxP = 10; }
  minP = minP/10;
  maxP = maxP/10;
  return;
}
</script>
