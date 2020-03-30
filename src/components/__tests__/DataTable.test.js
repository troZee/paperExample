import * as React from 'react';
import renderer from 'react-test-renderer';
import DataTable from '../DataTable/DataTable.tsx';

it('renders data table header', () => {
  const tree = renderer
    .create(
      <DataTable.Header>
        <DataTable.Title>Dessert</DataTable.Title>
        <DataTable.Title>Calories</DataTable.Title>
      </DataTable.Header>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders data table title with sort icon', () => {
  const tree = renderer
    .create(
      <DataTable.Title sortDirection="descending">Dessert</DataTable.Title>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders right aligned data table title', () => {
  const tree = renderer
    .create(<DataTable.Title numeric>Calories</DataTable.Title>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders data table title with press handler', () => {
  const tree = renderer
    .create(
      <DataTable.Title sortDirection="descending" onPress={() => {}}>
        Dessert
      </DataTable.Title>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders data table cell', () => {
  const tree = renderer
    .create(<DataTable.Cell>Cupcake</DataTable.Cell>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders right aligned data table cell', () => {
  const tree = renderer
    .create(<DataTable.Cell numeric>356</DataTable.Cell>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders data table pagination', () => {
  const tree = renderer
    .create(
      <DataTable.Pagination
        page={3}
        numberOfPages={15}
        onPageChange={() => {}}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders data table pagination with label', () => {
  const tree = renderer
    .create(
      <DataTable.Pagination
        page={3}
        numberOfPages={15}
        onPageChange={() => {}}
        label="11-20 of 150"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
