import './index.less';

import { defineComponent, unref } from 'vue';
import { Loading } from '/@/components/Loading';

import { useRootSetting } from '/@/hooks/setting/useRootSetting';
import { useTransitionSetting } from '/@/hooks/setting/useTransitionSetting';
import PageLayout from '/@/layouts/page/index.vue';
export default defineComponent({
  name: 'LayoutContent',
  setup() {
    const { getOpenPageLoading } = useTransitionSetting();
    const { getLayoutContentMode, getPageLoading } = useRootSetting();

    return () => {
      return (
        <div class={['layout-content', unref(getLayoutContentMode)]}>
          {unref(getOpenPageLoading) && (
            <Loading loading={unref(getPageLoading)} absolute class="layout-content__loading" />
          )}
          <PageLayout />
        </div>
      );
    };
  },
});
