import {
  FileRoutes,
  PerformanceMetrics,
  PerformanceMetricsDebug,
  Route,
  Router,
  ShopifyAnalytics,
  ShopifyProvider,
  useSession,
} from '@shopify/hydrogen';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Suspense} from 'react';
import ServerCartProvider from './components/cart/ServerCartProvider.server';
import DefaultSeo from './components/DefaultSeo.server';
import LoadingFallback from './components/global/LoadingFallback';
import NotFound from './components/global/NotFound.server';
// import { StepsProvider } from "react-step-builder";

function App() {
  const session = useSession();
  console.log('session', session);
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ShopifyProvider countryCode={session?.countryCode} languageCode={session?.countryCode}>
          <ServerCartProvider>
            <DefaultSeo />
            <Router>
              <FileRoutes />
              {/* @ts-expect-error <NotFound> doesn't require response */}
              <Route path="*" page={<NotFound />} />
            </Router>
          </ServerCartProvider>
          <PerformanceMetrics />
          {import.meta.env.DEV && <PerformanceMetricsDebug />}
          <ShopifyAnalytics />
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
