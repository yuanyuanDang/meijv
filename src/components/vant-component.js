import Vue from "vue";

// 导入组建
import {
  Button,
  Icon,
  Picker,
  Swipe,
  SwipeItem,
  Row,
  Col,
  Tab,
  Tabs,
  Switch,
  Tabbar,
  TabbarItem
} from "vant";

// 导入样式
import "vant/lib/index.css";

// 暴露组建
Vue.component("van-button", Button);
Vue.component("van-icon", Icon);
Vue.component("van-picker", Picker);
Vue.component("van-swipe", Swipe);
Vue.component("van-swipe-item", SwipeItem);
Vue.component("van-row", Row);
Vue.component("van-col", Col);
Vue.component("van-tab", Tab);
Vue.component("van-tabs", Tabs);
Vue.component("van-switch", Switch);
Vue.component("van-tabbar", Tabbar);
Vue.component("van-tabbar-item", TabbarItem);
