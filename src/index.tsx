import {createRoot} from 'react-dom/client';
// Axios
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store, {persistor} from './setup/redux/Store';

import axios from 'axios';
import {Chart, registerables} from 'chart.js';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
// Apps
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n';
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import 'react-toastify/dist/ReactToastify.css';

import './_metronic/assets/sass/style.scss';
import './_metronic/assets/sass/plugins.scss';
import './_metronic/assets/sass/style.react.scss';
import {AppRoutes} from './app/routing/AppRoutes';
import {AuthProvider, setupAxios} from './app/modules/auth';
import {ConfigProvider} from 'antd';
import locale from 'antd/lib/locale/vi_VN';
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios);

Chart.register(...registerables);

const queryClient = new QueryClient();
const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <MetronicI18nProvider>
        <ConfigProvider locale={locale}>
          <Provider store={store}>
            {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
            <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
              <AuthProvider>
                <AppRoutes />
              </AuthProvider>
            </PersistGate>
          </Provider>
        </ConfigProvider>
      </MetronicI18nProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
