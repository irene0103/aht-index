<template>
    <div class="header-container">
        <div class="wrapper">
            <!-- LOGO -->
            <header>
                <h1>
                    <router-link to="/" class="logo">
                        <img :src="require('@/assets/images/AHT-logo.png')" alt="AHT-LOGO">
                    </router-link>
                </h1>
            </header>
            <!-- 導覽列 -->
            <nav>
                <ul>
                    <li class="about"><router-link to="#about">公司簡介</router-link></li>
                    <li class="products"><router-link to="#products">產品及服務</router-link></li>
                    <li class="company"><router-link to="#company">關係企業</router-link></li>
                    <!-- <li class="store"><router-link to="store">軟硬體採購網</router-link></li> -->
                </ul>
            </nav>
            <!-- <div class="btn">
                <button class="member">
                    <router-link to="/member"><img :src="require('@/assets/images/member.png')" alt=""></router-link>
                </button>
                <button class="cart">
                    <router-link to="/cart"><img :src="require('@/assets/images/cart.png')" alt=""></router-link>
                </button>
            </div> -->
        </div>
    </div>
</template>


<script>
export default {
    name: 'TheHeader',
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
.header-container{
    width: 100%;
    margin: auto;
    background-color: rgba(217, 236, 253, 0.30);
    backdrop-filter: blur(2.5px);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: fixed;
    z-index: 100;
    .wrapper{
        width: 1200px;
        display: flex;
        margin: auto;
        header{
            h1{
                width: 160px;
                margin: 20px;
                img{
                    width: 100%;
                    vertical-align: bottom;
                }
            }
        }
        nav{
            margin: auto auto 25px 120px;
            ul{
                display: flex;
                margin: auto;
                .about, .products, .company{
                        margin: auto 30px;
                        a{
                            color: #00274B;
                            font-weight: bold;
                            font-size: 20px;
                            position: relative;
                            transform: translateY(0);
                            transition: .3s;
                            &:hover{
                                transform: translateY(-5px);
                                color: #057DCD;
                                &:after{
                                left: 0;
                                right: 0;
                                }
                            }
                            &:after{
                                content: '';
                                position: absolute;
                                left: 50%;
                                right: 50%;
                                bottom: -5px;
                                height: 0;
                                border-bottom: 3px solid #057DCD;
                                transition: .3s;
                            }
                            // &.router-link-exact-active {
                            //     color: #7f8c98;
                            // }
                        }
                    }
                .store{
                    margin: auto 30px;
                    font-weight: bold;
                    font-size: 20px;
                    a{  
                        color: #fff;
                        padding: 8px 20px;
                        background-color: #057DCD;
                        border-radius: 100px;
                    }
            } 
        }
    }
    .btn{
        margin: auto 50px 15px auto;
        .member, .cart{
            width: 50px;
            margin: auto 3px;
            img{
                width: 100%;
                vertical-align: bottom;
                }
            }
        }
    }
}

</style>