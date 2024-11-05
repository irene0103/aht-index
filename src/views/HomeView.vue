<template>
  <div class="container">
    <div class="banner">
      <div class="banner-title">
        <h2>資訊力量<br/>引領時代</h2>
        <img :src="require('@/assets/images/Ellipse 17.png')" alt="decoration">
        <h3>Power of technology , lead the world</h3>
      </div>
      <div class="banner-pic">
        <img class="sec1" :src="require('@/assets/images/tech company-amico.svg')" alt="tech company">
        <img class="sec1bg" :src="require('@/assets/images/sec1bg.png')" alt="sec1bg">
      </div>
    </div>
    <div class="about" id="about">
      <div class="about-description">
        <div class="about-title">
          <h3 >公司簡介 About us </h3>
        </div>
        <img class="sec2lbg" :src="require('@/assets/images/sec2lbg.png')" alt="">
        <p class="about-dec">About</p>
        <div class="about-content">
          <p>安惠資訊科技股份有限公司成立於2020年，是台灣餐飲與零售業資訊系統的新創企業，設有專案管理、應用系統、硬體維護與支援部門，瞄準資訊系統解決方案及周邊軟硬體服務商機。</p>
          <p>致力於提供連鎖流通業資訊系統的研發設計與系統整合，以及串聯電子支付系統，提供消費者多元的支付方式，以數位方式深化會員經營。</p>
        </div>
      </div>
      <div class="about-pic">
        <img class="sec2bg" :src="require('@/assets/images/Multi-device targeting-rafiki.svg')" alt="">
        <img class="sec2rbg" :src="require('@/assets/images/sec2rbg.png')" alt="">
      </div>
    </div>
    <product-item id="product" />
    <div class="company">
      <div class="company-title" id="company">
        <img :src="require('@/assets/images/Ellipse 17.png')" alt="decoration">
        <h3>關係企業 Affiliated company</h3>
        <p class="company-dec">Affiliated company</p>
      </div>
      <div class="company-item">
        <img class="company-pic" :src="require('@/assets/images/company.png')">
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue"
export default {
  name: 'HomeView',
  components:{
    ProductItem
  },
  data() {
    return {
      
    }
  },
  
}
</script>
<style lang="scss" scoped>
.container{
  width: 100%;
  overflow: hidden;
  .banner{
    width: 100%;
    position: relative;
    display: flex;
    margin: 20px auto 150px auto;
    .banner-title{
      width: 60%;
      position: relative;
      h2{
        font-weight: bold;
        font-size: 65px;
        color: #057DCD;
        text-indent: -4em;
        line-height: 1.5;
      }
      h3{
        font-weight: bold;
        font-size: 25px;
        color: #057DCD;
        text-indent: -3em;
        letter-spacing: 1.3px;
        &:after{
          content: '';
          position: absolute;
          right: 100px;
          bottom: -15px;
          width: 400px;
          height: 0;
          border-bottom: 5px solid #FFF9D2;
        }
      }
      img{
        width: 10%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 80px;
        margin: auto;
        z-index: -1;
      }
    }
    .banner-pic{
      width: 40%;
      position: relative;
      
      .sec1{
       width: 90%;
       vertical-align: bottom;
       position: absolute;
       top: -50px;
       bottom: 0;
       right: 0;
       z-index: 10;
       animation: Move 3s infinite;
      }
      .sec1bg{
        width: 200%;
        vertical-align: bottom;
        position: absolute;
        top: -450px;
        bottom: 0;
        right: -400px;
        bottom: 0;
        z-index: -20;
      }
    }
  }
  .about{
    margin: 350px auto;
    display: flex;
    .about-description{
      width: 60%;
      position: relative;
      padding: 0 50px;
      right: -100px;
      .about-title{
        font-size: 50px;
        color: #057DCD;
        font-weight: bold;
        letter-spacing: 2.5px;
        position: relative;
        margin-bottom: 30px;
        &:after{
          content: '';
          position: absolute;
          right: 95px;
          bottom: -10px;
          width: 440px;
          border-bottom: 3px solid #057DCD;
        }
      }
      .sec2lbg{
        position: absolute;
        left: -250px;
        top: -70px;
        width: 80%;
        z-index: -3;
      }
      .about-dec{
        position: absolute;
        font-size: 130px;
        letter-spacing: 8px;
        bottom: 90px;
        left: -250px;
        font-weight: bold;
        -webkit-text-stroke: 5px #FFF9D2;
        color: transparent;
        transform: rotate(270deg);
      }
      .about-content{
        letter-spacing: 1.5px;
        text-indent: 3rem;
        font-weight: bold;
        font-size: 22px;
        line-height: 1.3;
        text-align: left;
        p{
          margin: 20px;
        }
      }
    }
    .about-pic{
      width: 40%;
      position: relative;
      .sec2bg{
        width: 90%;
        position: absolute;
        top: 0;
        right:0;

      }
      .sec2rbg{
        width: 100%;
        position: absolute;
        right: -200px;
        z-index: -3;
      }
    }


  }

  .company{
      position: relative;
      .company-title{
        img{
      width: 8%;
      vertical-align: bottom;
      position: absolute;
      z-index: -3;
      left: 180px;
      top: -10px;
    }
    h3{
      font-size: 50px;
        color: #057DCD;
        font-weight: bold;
        letter-spacing: 2.5px;
        position: relative;
        margin-bottom: 30px;
        &:after{
          content: '';
          position: absolute;
          right: 120px;
          bottom: -10px;
          width: 850px;
          border-bottom: 3px solid #057DCD;
        }
    }
    .company-dec{
      position: absolute;
      font-size: 80px;
      letter-spacing: 8px;
      top: 10px;
      right: 0;
      -webkit-text-stroke: 5px #FFF9D2;
      color: transparent;
      z-index: -4;
    }
      }
    .company-pic{
      width: 80%;
      margin: 50px auto;
      .company-pic{
        width: 100%;
      }
    }
  }
}
@keyframes Move {
    0% {transform: translate(0,0);}
    50% {transform: translate(0,20px);}
    100% {transform: translate(0,0);}
}

@media (max-width:768px) { 
  .container{
  .banner{
    display: block;
    text-align: center;
    margin: auto;
    .banner-title{
      width: 100%;
      h2{
        font-size: 50px;
        text-indent: -1em;
        margin: 10px auto;
      }
      h3{
        font-size: 16px;
        text-indent: 0em;
      }
      img{
        width: 8%;
        left: 150px;
        bottom: 50px;
      }
    }
    .banner-pic{
      width: 50%;
      .sec1{
       width: 100%;
       top: 150px;
       left: 120px;
       margin:auto;
      }
      .sec1bg{
        top: -400px;
        right: -350px;
      }
    }
  }
  .about{
    flex-direction: column;
    align-items: center;
    .about-description{
      width: 90%;
      right: 0;
      .about-title{
        font-size: 40px;
      }
      .sec2lbg{
        left: -200px;
      }
      .about-dec{
        left: -200px;
      }
      .about-content{
        font-size: 20px;
      }
    }
    .about-pic{
      width: 80%;
      margin-bottom: 50px;
    }
  }
  .company{
      position: relative;
      .company-title{
    h3{
      font-size: 40px;
    }
    .company-dec{
      font-size: 60px;
    }
      }
    .company-pic{
      width: 95%;
      margin: 30px auto;
    }
  }
}
  }

</style>
