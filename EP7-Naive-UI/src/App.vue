<script setup>
import { 
  NSpace, NButton, 
  NCollapse, NCollapseItem ,
  NLayout ,NCarousel ,
  NLayoutHeader , NLayoutFooter , NLayoutSider , NMenu ,
  NAutoComplete ,
} from 'naive-ui'


import { h, defineComponent, ref , computed } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from "@vicons/ionicons5";


const valueRef = ref('');
const options = computed(() => {
  return ['@gmail.com', '@yahoo.com', '@hotmail.com'].map((suffix) => {
    const prefix = valueRef.value.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
});


function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const inverted = ref(false);
const menuOptions = [
  {
    label: "Hear the Wind Sing",
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon)
  },
  {
    label: "Pinball 1973",
    key: "pinball-1973",
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: "Rat",
        key: "rat"
      }
    ]
  },
  {
    label: "A Wild Sheep Chase",
    key: "a-wild-sheep-chase",
    disabled: true,
    icon: renderIcon(BookIcon)
  },
  {
    label: "Dance Dance Dance",
    key: "Dance Dance Dance",
    icon: renderIcon(BookIcon),
    children: [
      {
        type: "group",
        label: "People",
        key: "people",
        children: [
          {
            label: "Narrator",
            key: "narrator",
            icon: renderIcon(PersonIcon)
          },
          {
            label: "Sheep Man",
            key: "sheep-man",
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: "Beverage",
        key: "beverage",
        icon: renderIcon(WineIcon),
        children: [
          {
            label: "Whisky",
            key: "whisky"
          }
        ]
      },
      {
        label: "Food",
        key: "food",
        children: [
          {
            label: "Sandwich",
            key: "sandwich"
          }
        ]
      },
      {
        label: "The past increases. The future recedes.",
        key: "the-past-increases-the-future-recedes"
      }
    ]
  }
];
</script>

<template>
  <!-- button -->
  <h4>button</h4>
  <NSpace>
    <NButton>Default</NButton>
    <NButton type="tertiary"> Tertiary </NButton>
    <NButton type="primary"> Primary </NButton>
    <NButton type="info" :disabled="true"> Info </NButton>
    <NButton type="success" circle> Success </NButton>
    <NButton type="warning" :dashed="true"> Warning </NButton>
    <NButton type="error"> Error </NButton>
  </NSpace>
  <br />


  <!-- collapse -->
  <h4>collapse</h4>
  <NCollapse>
    <NCollapseItem title="right" name="1">
      <div>good</div>
    </NCollapseItem>
    <NCollapseItem title="right" name="2">
      <div>nice</div>
    </NCollapseItem>
    <NCollapseItem title="right" name="3">
      <div>very good</div>
    </NCollapseItem>
  </NCollapse>
  <br />


  <!-- Carousel -->
  <h4>Carousel</h4>
  <p>NLayout</p>
  <!-- NLayout -->
  <NLayout :content-style="{ width: '800px' , height : '300px' }">
    <NCarousel :space-between="20" draggable >
      <img class="carousel-img" 
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
      <img class="carousel-img" 
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
      <img class="carousel-img" 
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
      <img class="carousel-img" 
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
    </NCarousel>
  </NLayout>
  <br>
  <p>自己做框</p>
  <!-- 自己做框 -->
  <div class="banner">
    <NCarousel :space-between="20" draggable >
      <img class="carousel-img" 
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
      <img class="carousel-img" 
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
      <img class="carousel-img" 
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
      <img class="carousel-img" 
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
    </NCarousel>
  </div>
  <br />


  <!-- 信箱 AutoComplete -->
  <h4>信箱 AutoComplete</h4>
  <NAutoComplete
    v-model:value="valueRef"
    :input-props="{
      autocomplete: 'disabled'
    }"
    :options="options"
    placeholder="Email 信箱"
  />
  <br />


  <!-- admin -->
  <h4>admin</h4>
  <NSpace vertical>
    <NLayout>
      <NLayoutHeader :inverted="inverted" bordered>
        <div class="d-flex flex-center">
          <img class="logo" src="./assets/logo.svg" alt="">
          <h1>admin</h1>
        </div>
      </NLayoutHeader>

      <NLayout has-sider>
        <!-- 左 -->
        <NLayoutSider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
          :inverted="inverted"
          style="height: calc(100vh - 130px)"
        >
          <NMenu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </NLayoutSider>
        <!-- 右 -->
        <NLayout class="content" style="height: calc(100vh - 130px)">
          <p>右邊</p>
        </NLayout>
      </NLayout>

      <NLayoutFooter :inverted="inverted" bordered>
        Footer Footer Footer
      </NLayoutFooter>
    </NLayout>
  </NSpace>
  <br />


</template>
<style lang="scss" scoped>
h4 {
  font-size: 42px;
  color: rgb(72, 9, 229);
}
.n-collapse {
  padding: 10px;
  width: 300px;
  border: 1px solid #eee;
}
/* ===================
....... banner .......
==================== */
.banner{
  width: 500px;
  height: 300px;
  position: relative;
}
.carousel-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.n-carousel {
  --n-dot-color: rgb(169, 232, 11) !important;
  --n-dot-color-active: red !important;
}
/* ===================
....... admin .......
==================== */
.logo {
  width: 30px;
  height: 30px;
}
.d-flex {
  display: flex;
}
.flex-center {
  justify-content: center;
  align-items: center;
}
.n-layout-footer {
  padding: 30px;
}
.content{
  padding: 20px 36px;
  p{
    font-size: 40px;
  }
}
</style>
