<template>
    <div class="footer-container">
        <img class="footer-bg" :src="require('@/assets/images/footer-bg.png')" alt="footer-bg">
        <img class="footer-bg1" :src="require('@/assets/images/footer-bg1.png')" alt="footer-bg1">
        <div class="wrapper">
            <div class="logo">
                <img :src="require('@/assets/images/AHT-logo.png')" alt="AHT-logo">
            </div>
            <div class="list">
                <ul>
                    <li>
                        <a href="">隱私權政策</a>
                    </li>
                    <li>
                        <a href="">版權說明</a>
                    </li>
                    <li>
                        <a href="">人才招募</a>
                    </li>
                </ul>
            </div>
            <div class="info">
                <ul>
                    <li><img :src="require('@/assets/images/phone.png')" alt="phone"> +(886)2 2523-1322</li>
                    <li><img :src="require('@/assets/images/email.png')" alt="email">contact@ahit.com.tw</li>
                    <li><img :src="require('@/assets/images/pin.png')" alt="pin"> 106 台北市大安區仁愛路三段136號6樓</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'TheFooter',
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
.footer-container{
    position: relative;
    .footer-bg{
        
        width: 100%;
        opacity: 0.3;
    position: absolute;
    left: 0;
    z-index: -10;
    }
    .footer-bg1{
        width: 100%;
        opacity: 0.5;
    position: absolute;
    left: 0;
    z-index: -10;
    }
    .wrapper{
        display: flex;
        justify-content: space-evenly;
        position: absolute;
        width: 100%;
        top: 150px;
        align-self: flex-end;
        
        .list{
            ul{
                display: flex;
                li{
                    a{
                        text-decoration: none;
                        color: black;
                        font-weight: bold;
                        margin-right: 20px;
                    }
                }
            }
            

        }
        .info{
            ul{
                text-align: left;
                li{
                    line-height: 10px;
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
                    font-weight: bold;
                    img{
                        margin-right: 10px;
                    }
                }
                
            }
        }
    }
}

</style>