import * as React from 'react';
import renderer from 'react-test-renderer';
import Menu from '../Menu/Menu.tsx';
import Button from '../Button.tsx';

it('renders visible menu', () => {
  const tree = renderer
    .create(
      <Menu
        visible
        onDismiss={jest.fn()}
        anchor={<Button mode="outlined">Open menu</Button>}
      >
        <Menu.Item onPress={jest.fn()} title="Undo" />
        <Menu.Item onPress={jest.fn()} title="Redo" />
      </Menu>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders not visible menu', () => {
  const tree = renderer
    .create(
      <Menu
        visible={false}
        onDismiss={jest.fn()}
        anchor={<Button mode="outlined">Open menu</Button>}
      >
        <Menu.Item onPress={jest.fn()} title="Undo" />
        <Menu.Item onPress={jest.fn()} title="Redo" />
      </Menu>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders menu with content styles', () => {
  const tree = renderer
    .create(
      <Menu
        visible
        onDismiss={jest.fn()}
        anchor={<Button mode="outlined">Open menu</Button>}
        contentStyle={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        <Menu.Item onPress={jest.fn()} title="Undo" />
        <Menu.Item onPress={jest.fn()} title="Redo" />
      </Menu>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
