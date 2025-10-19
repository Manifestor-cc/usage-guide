import React from 'react';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import type DocBreadcrumbsType from '@theme/DocBreadcrumbs';
import type {WrapperProps} from '@docusaurus/types';
import Admonition from '@theme/Admonition';

type Props = WrapperProps<typeof DocBreadcrumbsType>;

export default function DocBreadcrumbsWrapper(props: Props) {
  return (
    <>
      <div style={{marginBottom: '1.5rem'}}>
        <Admonition type="tip">
          Stuck or have questions? <a href="https://discord.gg/manifestorcc">Join our Discord server</a>
        </Admonition>
      </div>
      <DocBreadcrumbs {...props} />
    </>
  );
}

