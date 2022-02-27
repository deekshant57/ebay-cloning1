const navbar1 = () => {
  return `<div class="left">
  <div>Hi! <a href="signin.html">Sign in</a> or <a href="personalAc.html">register</a></div>
  <div>Dealy Deals</div>
  <div>Help & Contact</div>
</div>
<div class="right">
  <div>Sell</div>
  <div class="dropdown dropbtn">
    WatchList <i class="fa fa-caret-down" style="text-indent: 5px"></i>
    <div class="dropdown-content">
      <!-- <span>Please <a href="./signin.html">sign in</a>to view items you are watching.</span> -->
    </div>
  </div>
  <div class="dropdown dropbtn">
    My eBay <i class="fa fa-caret-down" style="text-indent: 5px"></i>

    <div class="dropdown-content">
      <a href="">Summary</a>
      <a href="">Recently Viewed</a>
      <a href="">Bids Offers</a>
      <a href="">Watchlist</a>
      <a href="">Purchase History</a>
      <a href="">Buy Again</a>
      <a href="">Selling</a>
      <a href="">Saved Searches</a>
      <a href="">Saved Sellers</a>
      <a href="">Messages</a>
    </div>
  </div>
  <div><i class="material-icons">notifications</i></div>
  <div>
    <i style="font-size: 25px; color: rgb(82, 79, 79)" class="fa"
      >&#xf07a;</i
    >
  </div>
</div>`;
};

export default navbar1;
