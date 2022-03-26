<template>
  <div class="rank">
    <div class="tab">
      <div class="tab-tit clearfix">
        <a href="javascript:;" class="on">
          <p class="img">
            <i></i>
          </p>
          <p class="text">Hot</p>
        </a>
        <a href="javascript:;">
          <p class="img">
            <i></i>
          </p>
          <p class="text">Hotter</p>
        </a>
        <a href="javascript:;">
          <p class="img">
            <i></i>
          </p>
          <p class="text">Hottest</p>
        </a>
      </div>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/COLCOLORCHANGEKIDSTEE_1e9bc3be-7b58-48e3-8e2b-4c1ceaa16cd6_600x.png" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#">PARACHUTES LONGSLEEVE</a>
              </div>
              <p class="info-price">€32,00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/COLCOLORCHANGETEE_a227d849-0f5e-4ba7-b209-99030a52c416_600x.png" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#">COLOUR CHANGE LOGO KIDS' TEE</a>
              </div>
              <p class="info-price">€22,00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/COLCREW_600x.png" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#">COLOUR CHANGE LOGO TEE</a>
              </div>
              <p class="info-price">€30,00</p>
            </div>
          </div>
          <div class="img-item">
            <p class="tab-pic">
              <a href="#">
                <img src="./images/COLPARAUPDATEFRONT_600x.png" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#">SPECTRUM CREWNECK SWEATSHIRT</a>
              </div>
              <p class="info-price">€55,00</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rank'
}
</script>

<style lang="less" scoped>
.rank {
  width: 1200px;
  margin: 0 auto;

  .tab {
    margin: 0 auto;
    overflow: hidden;
    width: 312px;

    .tab-tit {
      text-align: center;

      a {
        display: block;
        padding: 0 18px;
        float: left;
        text-decoration: none;
        font-size: 16px;
        color: #999;

        p {
          margin: 5px 0;
        }

        .img {
          i {
            width: 35px;
            height: 35px;
            display: block;
            background: url(./images/bg0.png);
            margin-left: 10px;
          }
        }

        .text {
          line-height: 28px;
        }
      }

      .on {
        color: #e60012;

        .img {
          i {
            background-position: -35px 0;
          }
        }
      }
    }
  }

  .content {
    overflow: hidden;
    padding: 10px;

    ul {
      li {
        overflow: hidden;
        list-style: none;
        line-height: 18px;

        .img-item {
          border: 1px solid #e1251b;
          width: 269px;
          float: left;
          overflow: hidden;
          margin: 0 12px 10px;
          background: #fff;

          .tab-pic {
            width: 230px;
            height: 210px;
            overflow: hidden;
            text-align: center;
            margin: 5px auto 18px;

            a {
              img {
                width: 200px;
                height: 200px;
              }
            }
          }

          .tab-info {
            background: #fafafa;

            .info-title {
              height: 50px;
              line-height: 28px;
              overflow: hidden;
              margin: 0 auto;
              padding-left: 10px;

              a {
                color: #333;
                text-decoration: none;
              }
            }

            .info-price {
              font-size: 20px;
              color: #e1251b;
              height: 35px;
              padding-left: 10px;
              display: block;
              line-height: 24px;
              margin: 10px auto 0;
            }
          }
        }
      }
    }
  }
}
</style>
