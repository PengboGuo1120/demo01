<template>
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">猜你喜欢</h3>
        <a href="javascript:;" class="fr tip changeBnt">换一换</a>
      </div>
      <div class="bd">
        <ul class="favourate">
          <li>
            <img src="./images/5226CA.DB05V2_600x.png" alt="" />
            <div class="like-text">
              <p>PARACHUTES ALBUM COVER MUG</p>
              <h3>€9,00</h3>
            </div>
          </li>
          <li>
            <img src="./images/5226CA.DB05V3_600x.png" alt="" />
            <div class="like-text">
              <p>A RUSH OF BLOOD ALBUM COVER MUG</p>
              <h3>€9,00</h3>
            </div>
          </li>
          <li>
            <img src="./images/5226CA.DB05V7_600x.png" alt="" />
            <div class="like-text">
              <p>X&Y ALBUM COVER MUG</p>
              <h3>€9,00</h3>
            </div>
          </li>
          <li>
            <img src="./images/COLGIFTCARD_085a17d6-c68d-41e1-ac32-51521ed32b64_600x.png" alt="" />
            <div class="like-text">
              <p>Coldplay EU Gift Card</p>
              <h3>From €25,00</h3>
            </div>
          </li>
          <li>
            <img src="./images/COLHANDWRITTENHATFRONT_289d36ae-a036-4ddb-958d-5e2bace665e1_600x.png" alt="" />
            <div class="like-text">
              <p>COLDPLAY LOGO CAP</p>
              <h3>€27,00</h3>
            </div>
          </li>
          <li>
            <img src="./images/COLTOTE_a195a48b-c6a6-4554-8c94-0c57677927be_600x.png" alt="" />
            <div class="like-text">
              <p>SPECTRUM TOTE BAG</p>
              <h3>€27,00</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Like'
}
</script>

<style lang="less" scoped>
.like {
  margin-top: 15px;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .title {
      overflow: hidden;

      .fl {
        float: left;
        font-size: 20px;
        line-height: 30px;
      }

      .fr {
        float: right;
        background-image: url(./images/icons.png);
        width: 66px;
        height: 25px;
        background-position: 182px -104px;
        line-height: 30px;
        font-size: 12px;
        font-weight: 400;
        color: #666;
        text-decoration: none;
      }
    }

    .bd {
      .favourate {
        border: 1px solid #e4e4e4;
        overflow: hidden;
        padding: 0 10px;
        box-sizing: border-box;
        display: flex;

        li {
          height: 250px;
          margin: 0 -1px;
          overflow: hidden;
          background: #fff;
          position: relative;
          width: 16.667%;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;

          img {
            width: 142px;
            height: 142px;
            transition: all 400ms;

            &:hover {
              opacity: 0.8;
              transform: scale(1.1);
            }
          }

          .like-text {
            padding: 0;
            width: 142px;
            border-right: 1px solid #e4e4e4;

            p {
              margin: 5px 0;
            }

            h3 {
              color: #df3033;
              font-size: 20px;
              line-height: 30px;
              margin: 9px 0;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
}
</style>
