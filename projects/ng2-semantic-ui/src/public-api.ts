/*
 * Public API Surface of ng2-semantic-ui
 */

export * from './lib/ng2-semantic-ui.service';
export * from './lib/ng2-semantic-ui.component';
export * from './lib/ng2-semantic-ui.module';


export * from "./lib/behaviors/public";
export * from "./lib/collections/public";
export * from "./lib/modules/public";

export * from "./lib/misc/public";

 
//added to satisfy angular >=9 requirements, see https://stackoverflow.com/questions/60121962/this-class-is-visible-to-consumers-via-somemodule-somecomponent-but-is-not-e
export { SuiModal } from "./lib/modules/modal/components/modal"
export * from "./lib/collections/message/components/message"
export * from "./lib/collections/pagination/components/pagination"
export * from "./lib/modules/accordion/components/accordion"
export * from "./lib/modules/accordion/components/accordion-panel"
export * from "./lib/modules/checkbox/components/checkbox"
export * from "./lib/modules/checkbox/components/radio"
export * from "./lib/modules/checkbox/directives/radio-manager"
export * from "./lib/modules/collapse/directives/collapse"
export * from "./lib/modules/datepicker/directives/datepicker.directive"
export * from "./lib/modules/datepicker/directives/input.directive"
export * from "./lib/modules/dimmer/components/dimmer"
export * from "./lib/modules/dropdown/directives/dropdown"
export * from "./lib/modules/dropdown/directives/dropdown-menu"
export * from "./lib/modules/popup/directives/popup.directive"
export * from "./lib/modules/popup/components/popup"
export * from "./lib/modules/progress/components/progress"
export * from "./lib/modules/rating/components/rating"
export * from "./lib/modules/search/components/search"
export * from "./lib/modules/select/components/select"
export * from "./lib/modules/select/components/select-option"
export * from "./lib/modules/select/directives/select-search"
export * from "./lib/modules/select/components/multi-select"
export * from "./lib/modules/sidebar/components/sidebar"
export * from "./lib/modules/sidebar/components/sidebar-container"
export * from "./lib/modules/sidebar/components/sidebar-sibling"
export * from "./lib/modules/tabs/components/tabset"
export * from "./lib/modules/tabs/directives/tab-header"
export * from "./lib/modules/tabs/directives/tab-content"
export * from "./lib/modules/select/components/multi-select"
export * from "./lib/modules/sidebar/components/sidebar"
export * from "./lib/modules/sidebar/components/sidebar-container"
export * from "./lib/modules/sidebar/components/sidebar-sibling"
export * from "./lib/modules/tabs/components/tabset"
export * from "./lib/modules/tabs/directives/tab-header"
export * from "./lib/modules/tabs/directives/tab-content"
