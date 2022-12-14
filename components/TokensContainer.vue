<template>
  <div class="tokensContainer">
    <div class="aboutStaking" v-if="0">
      <div class="aboutStaking__imgBox">
        <img
          class="aboutStaking__img"
          :src="require('assets/images/coins-img.png')"
        />
        <div class="aboutStaking__gradientBg" />
      </div>
      <div class="aboutStaking__infoBox">
        <h3 class="aboutStaking__title">{{ $t('Стейкинг') }}</h3>
        <div class="aboutStaking__info">{{ $t('stacking-info-1') }}</div>
        <div class="aboutStaking__info">{{ $t('stacking-info-2') }}</div>
        <div class="aboutStaking__info">{{ $t('stacking-info-3') }}</div>
        <CommonButton class="aboutStaking__button">{{
          $t('Стейкинг')
        }}</CommonButton>
      </div>
      <img
        class="aboutStaking__stars"
        :src="require('assets/images/stars-staking-bg.png')"
      />
    </div>

    <div class="aboutToken">
      <h3 class="aboutToken__title">{{ $t('Монетизация внимания пользователей') }}</h3>
      <div class="aboutToken__text">
        {{
          $t(
            'Токен DXA — это криптовалюта, обеспеченная вниманием пользователей метавселенной DEXART. Эмиссия токенов происходит, когда пользователь проводит время в метавселенной, взаимодействует с ней и выполняет активные действия.'
          )
        }}
      </div>
      <div class="aboutToken__infoBox">
        <div v-for="item in aboutTokenInfo" :key="item.id" :class="`aboutToken__infoWrapper aboutToken__infoWrapper${item.id}`">
          <div class="aboutToken__info">
            <h3 class="aboutToken__infoTitle">{{ $t(item.title) }}</h3>
            <!-- <ul>
              <li v-for="(elem, i) in item.text" :key="i" class="aboutToken__infoText">{{ $t(elem) }}</li>
            </ul> -->
            <p class="aboutToken__infoText">{{ $t(item.text) }}</p>
          </div>
        </div>
        <img
          :class="`aboutToken__coinIcon`"
          :src="require(`assets/images/coin-icon.png`)"
        />
      </div>
      <img
        class="aboutToken__stars"
        :src="require('assets/images/stars-tokens-bg.png')"
      />
      <div class="aboutToken__linkBox">{{ $t('dxa-tokens-about-text') }} <a :href='`${$i18n.locale === "en" ? "/docs/DEXART Tokenomics and DXA about Presentation.pdf" : "/docs/Презентация токеномики DEXART и токена DXA.pdf"}`' target="_blank" rel="noopener" class="link">{{ $t('dxa-tokens-about-link') }}</a></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TokensContainer',
  setup() {
    const aboutTokenInfo = [
      {
        id: 1,
        title: 'Производство токенов',
        text: 'Мы создали Token Production Facility (TPF). Чтобы его запустить, нужна энергия. Она хранится в энергетических юнитах. Юниты расходуются на питание TPF, он производит токены, которые скапливаются в хранилище пользователя.',
        // [
        //   'about-token-info-1-content-1',
        //   'about-token-info-1-content-2',
        //   'about-token-info-1-content-3',
        //   'about-token-info-1-content-4',
        //   'about-token-info-1-content-5',
        //   'about-token-info-1-content-6'
        // ]
      },

      {
        id: 2,
        title: 'Чем больше энергии, тем больше токенов',
        text: 'Токены на TPF производятся постепенно. Чем дольше работает TPF, тем выше его эффективность. Главное, вовремя заменять разрядившиеся энергетические юниты и забирать токены из хранилища, иначе оно переполнится и производство остановится.',
        // [
        //   'about-token-info-2-content-1',
        //   'about-token-info-2-content-2',
        //   'about-token-info-2-content-3',
        //   'about-token-info-2-content-4',
        //   'about-token-info-2-content-5',
        //   'about-token-info-2-content-6'
        // ]
      },
      {
        id: 3,
        title: 'Как потратить токены',
        text: 'Токены можно будет потратить на покупки внутри DEXART, обменять на бирже, улучшить с их помощью TPF или увеличить объем хранилища.',
        // [
        //   'about-token-info-3-content-1',
        //   'about-token-info-3-content-2',
        //   'about-token-info-3-content-3',
        //   'about-token-info-3-content-4',
        //   'about-token-info-3-content-5'
        // ]
      },
      {
        id: 4,
        title: 'Особый статус',
        text: 'Пользователи, участвующие в создании токенов, получают особый статус DEX Builder и специальный подарочный NFT-предмет для своего аватара.',
      }
    ]

    return {
      aboutTokenInfo
    }
  }
}
</script>

<style lang="stylus" scoped>
.tokensContainer {
  background: linear-gradient(360deg, #370863 0%, #160D1D 48.22%);
}
.aboutStaking {
  display: flex;
  position: relative;
  max-width: 1443px;
  margin: auto;
  margin-top: 113px;
  padding-left: 23px;
  &__imgBox {
    position: relative;
  }
  &__img {
    display: none;
    width: 35vw;
    position: relative;
    top: 50px;
    z-index: 1;
  }
  &__gradientBg {
    position: absolute;
    width 306px;
    height 306px;
    background: #9C3CFB;
    filter: blur(200px);
    top: calc(50% - 153px);
    left: calc(50% - 153px);
  }
  &__infoBox {
    width: 80%;
    margin: auto;
    z-index: 1;
  }
  &__title {
    font-size: 34px;
    margin-bottom: 40px;
    background: $colorTitle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__info {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    &:not(:first-child) {
      margin-top: 40px;
    }
  }
  &__button {
    margin-top: 60px;
  }
  &__stars {
    position: absolute;
    top: 0;
    left: -20px;
  }
  +mediaTablet() {
    &__img {
      display: block;
    }
    &__infoBox {
      position: relative;
      width: 45%;
      top: 98px;
      left: 94px;
      z-index: 1;
      margin: 0;
    }
  }
  +mediaDesktopM() {
    &__infoBox {
      width: auto;
    }
    &__title {
      font-size: 48px;
      margin-bottom: 60px;
    }
    &__info {
      font-size: 20px;
      max-width: 517px;
    }
  }
  +mediaLarge() {
    &__img {
      width: 749px;
    }
  }
}

.aboutToken {
  max-width: 1206px;
  margin: auto;
  margin-top: 52px;
  position: relative;
  &__infoWrapper {
    position: relative;
    background: transparent;
    margin-bottom: 11px;
    z-index: 0;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 42px;
      padding: 2px;
      background: linear-gradient(96.43deg, #ED3FFE 30.37%, #7D1ED4 94.57%);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
              mask-composite: exclude;
    }
  }
  &__infoWrapper1 {
    width: 80vw;
    height: 174px;
    &::before {
      height: 174px;
    }
  }
  &__infoWrapper2 {
    width: 80vw;
    height: 202px;
    &::before {
      height: 202px;
    }
  }
  &__infoWrapper3 {
    width: 80vw;
    height: 158px;
    &::before {
      height: 158px;
    }
  }
  &__infoWrapper4 {
    width: 80vw;
    height: 175px;
    &::before {
      height: 175px;
    }
  }
  &__info {
    position: relative;
    top: 1px;
    left: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    padding: 20px;
    border: none;
    border-radius: 62px;
    background: transparent;
  }
  &__infoTitle {
    font-weight: 700;
    font-size: 18px;
    color: $colorBrand;
    margin-bottom: 10px;
    text-align: center;
  }
  &__infoText {
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  }
  &__title {
    font-size: 34px;
    margin-bottom: 30px;
    background: $colorTitle;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
    text-align: center;
  }
  &__text {
    max-width: 581px;
    font-family: 'Didact Gothic';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: $colorSecondTitle;
    opacity: .8;
    z-index: 1;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 0 10px;
  }
  &__infoBox {
    display: grid;
    justify-content: center;
    gap: 20px 0;
    z-index: 1;
  }
  &__info1 {
    width: 80vw;
  }
  &__info2 {
    width: 80vw;
  }
  &__info3 {
    width: 80vw;
  }
  &__info4 {
    position: relative;
    width: 40vw;
    left: calc(50% - 20vw);
  }
  &__coinIcon {
    display: none;
    width: 25vw;
    position: absolute;
    top: -30px;
    left: calc(50% - 12.5vw);
  }
  &__stars {
    position: absolute;
    top: 70px;
    left: -120px;
  }
  &__linkBox {
    margin-top: 45px;
    padding-bottom: 20px;
    text-align: center;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: $colorBrand;
  }
  +mediaTablet() {
    &__infoWrapper1 {
      width: 35vw;
      position: relative;
      left: 55px;
    }
    &__infoWrapper2 {
      width: 35vw;
      position: relative;
      top: -90px;
      left: 90px;
    }
    &__infoWrapper3 {
      width: 40vw;
    }
    &__infoWrapper4 {
      width: 25vw;
      left: 100px;
    }
    &__infoBox {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 109px;
      position: relative;
      z-index: 1;
      gap: 0;
    }
    &__coinIcon {
      display: block;
    }
  }
  +mediaDesktopM() {
    &__title {
      font-size: 48px;
    }
    &__text {
      font-size: 28px;
    }
    &__linkBox {
      font-size: 20px;
    }
    &__infoTitle {
      font-size: 22px;
    }
    &__infoText {
      font-size: 16px;
    }
  }
  +mediaDesktop() {
    &__title {
      text-align: left;
    }
    &__text {
      text-align: left;
      margin: 0;
      padding: 0;
    }
    &__infoWrapper1 {
      position: relative;
      left: 55px;
      width: 431px;
      height: 204px;
      &::before {
        height: 184px;
      }
    }
    &__infoWrapper2 {
      position: relative;
      top: -90px;
      left: 65px;
      width: 539px;
      height: 182px;
      &::before {
        height: 182px;
      }
    }
    &__infoWrapper3 {
      position: relative;
      width: 569px;
      height: 158px;
      &::before {
        height: 158px;
      }
    }
    &__infoWrapper4 {
      position: relative;
      left: 100px;
      width: 325px;
      height: 165px;
      &::before {
        height: 165px;
      }
    }
    &__coinIcon {
      width: auto;
      left: calc(50% - 174px);
    }
  }
}
.link {
  color: $colorPurple;
  &:hover {
    color: $colorFontBase;
  }
}
</style>
