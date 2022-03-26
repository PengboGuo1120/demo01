<template>
  <div class="brand">
    <div class="py-container">
      <ul class="brand-list">
        <li class="brand-item">
          <img src="./images/ADX.png" />
        </li>
        <li class="brand-item">
          <img src="./images/AE.png" />
        </li>
        <li class="brand-item">
          <img src="./images/ARDR.png" />
        </li>
        <li class="brand-item">
          <img src="./images/ARK.png" />
        </li>
        <li class="brand-item">
          <img src="./images/BCC.png" />
        </li>
        <li class="brand-item">
          <img src="./images/BLOCK.png" />
        </li>
        <li class="brand-item">
          <img src="./images/BNT.png" />
        </li>
        <li class="brand-item">
          <img src="./images/DASH.png" />
        </li>
        <li class="brand-item">
          <img src="./images/DOGE.png" />
        </li>
        <li class="brand-item">
          <img src="./images/ICN.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brand'
}
</script>

<style lang="less" scoped>
.brand {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    height: 120px;
    margin: 0 auto;
    margin-bottom: 15px;

    .brand-list {
      height: 120px;
      overflow: hidden;
      padding: 15px 0;
      background: #f7f7f7;
      line-height: 18px;

      .brand-item {
        width: 120px;
        float: left;
        height: 37px;

        img {
          border-left: 1px dotted #ccc;
          padding: 0 5px;
          width: 110px;
        }

        &:first-child {
          img {
            border-left: 0;
          }
        }
      }
    }
  }
}
</style>
