import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import AppBar from './AppBar';

storiesOf('AppBar', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Default', (): React.ReactElement<HTMLElement> => (
    <AppBar />
  ));