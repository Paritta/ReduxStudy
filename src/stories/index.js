import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ModalError from "../components/Modal/ModalError/ModalError";

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('ModalErrro', module).add('ModalErrro', () => <ModalError />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
