'use client';

import { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';

import 'antd/dist/reset.css';
import React from 'react';

// suppress useLayoutEffect warnings when running outside a browser
if (!typeof window) React.useLayoutEffect = React.useEffect;

export function AntDesignProvider({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => createCache());

  const render = <>{children}</>;

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });

  if (typeof window !== 'undefined') {
    return render;
  }

  return (
    <StyleProvider hashPriority='high' cache={cache}>
      {render}
    </StyleProvider>
  );
}
