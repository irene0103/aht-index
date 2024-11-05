<template>
    <div class="products">
      <img class="products-bg" :src="require('@/assets/images/sec3bg.png')" alt="product">
      <div class="products-title" id="products">
        <h3>產品及服務 Products and Services</h3>
        <img :src="require('@/assets/images/Ellipse 17.png')" alt="decoration">
      </div>
      <div class="products-list">
        <div class="products-item" v-for="item in products" :key="item.id">
          <img :src="item.pic"/>
          <h4 class="products-title">{{ item.title }}</h4>
          <h4 class="products-eng-title">{{ item.eng }}</h4>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'ProductItem',
    data() {
      return {
        products:[
          {
            pic:require(`@/assets/images/kitchen.png`),
            title:'廚房菜單機',
            eng:'Kitchen Display System',
          },
          {
            pic:require(`@/assets/images/pos.png`),
            title:'POS系統',
            eng:'POS System',
          },
          {
            pic:require(`@/assets/images/Multiple.png`),
            title:'多元支付系統',
            eng:'Multiple Pay',
          },
          {
            pic:require(`@/assets/images/Performance.png`),
            title:'即時業績',
            eng:'Performance',
          },
          {
            pic:require(`@/assets/images/Customer.png`),
            title:'顧客反應系統',
            eng:'Customer Response System',
          },
          {
            pic:require(`@/assets/images/Multi-Ordering.png`),
            title:'多元點餐平台',
            eng:'Multi-Ordering Platform',
          },
          {
            pic:require(`@/assets/images/Material.png`),
            title:'物料管理',
            eng:'Material Management',
          },
          {
            pic:require(`@/assets/images/E-invoice.png`),
            title:'電子發票',
            eng:'E-invoice ',
          },
          {
            pic:require(`@/assets/images/Smart.png`),
            title:'智慧店鋪',
            eng:'Smart Store',
          },
        ]
      }
    },
    
  }
  </script>
  <style lang="scss" scoped>
  .products{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .products-bg{
      width: 180%;
      height: 1000px;
      position: absolute;
      top: 100%;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: auto;
      z-index: -4;
    }
    .products-title{
      position: relative;
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
      img{
        width: 8%;
        vertical-align: bottom;
        position: absolute;
        z-index: -3;
        left: 150px;
        top: 10px;

      }
    }
    .products-list{
      width: 70%;
      margin: 60px 0;
      display: grid;
      grid-template-columns: repeat(3,1fr);
      justify-content: center;
      align-content: center;
       .products-item{
        width: 70%;
        margin: 20px auto;
        padding: 20px 10px;
        border-radius: 15px;
        border: 1px solid rgba(168, 168, 168, 0.50);
        background: rgba(255, 255, 255, 0.26);
        box-shadow: 0px 3px 7.5px 0px rgba(0, 0, 0, 0.25);
        img{
          width: 50%;
        }
        .products-title{
          font-size: 20px;
          font-weight: bold;
          margin-top: 10px;

        }
        .products-eng-title{
          font-size: 15px;
          margin-top: 5px;
        }
    }
    }
   
  }
  @media (max-width:768px) { 
    .products{
      .products-title{
        h3{
          font-size: 40px;
        }
      }
      .products-list{
        width: 90%;
        grid-template-columns: repeat(2,1fr);
         .products-item{
          width: 80%;
        }
      }
    }
  }
  </style>