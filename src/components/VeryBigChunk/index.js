import React from 'react';

export default React.lazy(() => import(/* webpackChunkName: "big-chunk", webpackPrefetch: true */ './BigChunk'));