<template >
  <div class="bottom-nav">
      <div class="bottom-nav-n">
        <ul class="bottom-nav-ul">
            <li>
                <a href="#">关于我们</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">联系我们</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">联系客服</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">合作招商</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">商家帮助</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">营销中心</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">手机怡购</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">友情链接</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">销售联盟</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">怡购社区</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">风险监测</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">隐私政测</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">English Site</a>
                <span>|</span>
            </li>
            <li>
                <a href="#">Media & IR</a>
            </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  name: "BottomNav",
  data() {
    return {};
  },
  components: {}
};
</script>
<style  scoped>
.bottom-nav {
    width: 100%;
    bottom:0;
}
.bottom-nav-n{
    width: 1200px;
    height: 40px;
    margin: 0 auto;
}
.bottom-nav-ul {
    padding-left: 104px;
  border-top: 1px solid #e1e1e1;
}
li {
    float: left;
    padding: 15px 0;
    cursor: pointer;
}
a {
  color: #666;
  display: inline-block;
  margin: 0 auto;
  font-size: 12px;
}
.bottom-nav-title {
  color: #999;
}
a:hover {
  color: #c81623;
}
span {
  margin: 0 10px;
  color: #999;
  font-size: 12px;
}
.bottom_copyright_info{
    padding: 10px 0;
    line-height: 22px;
    color: #999;
    text-align: center;
}
.bottom_copyright_inter{
    display: inline-block;
    width: 15px;
    height: 10px;
    vertical-align: -1px;
    margin-right: 10px;
    background-repeat: no-repeat
}
.global,.siss,.sitio,.situs,.cant{
    background-repeat: no-repeat;
    margin-top: -1px;
    background-image: url("../../../assets/img/header/sprite.footer.png");
}
.global{
    width: 15px;
    height: 12px;
    background-position: -108px -155px;
}
.cant{
    background-position: -168px -155px;
}
.situs{
    background-position: -148px -155px;
}
.sitio{
    background-position: -128px -155px;
}
.siss{
    background-position: -108px -172px;
}
.bottom_copyright{
    padding: 25px 0;
     text-align: center;
}
.bottom_copyright_icon {
  overflow: hidden;
  display: inline-block;
  margin: 0 3px;
  width: 103px;
  height: 32px;
  line-height: 1000px;
}
.icon2,.icon3,.icon4,.icon5,.icon6{
    background-repeat: no-repeat; 
    background-image: url("../../../assets/img/header/sprite.footer.png")
}
.icon2{
    background-position: -205px -111px;
}
.icon3{
    background-position: -205px -74px;
}
.icon4{
    background-position: -205px -37px;
}
.icon5{
    background-position: -205px 0;
}
.icon6{
   background-position: 0 -155px;
}
</style>
