<script>
function provideQuery(avgPrice) {
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
  return http://www.boredapi.com/api/activity?minprice=0&maxprice=0.1
}
</script>
