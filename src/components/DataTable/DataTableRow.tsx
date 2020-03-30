import * as React from 'react';
import color from 'color';
import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';
import TouchableRipple from '../TouchableRipple';
import { black, white } from '../../styles/colors';
import { withTheme } from '../../core/theming';
import { Theme, $RemoveChildren } from '../../types';

type Props = $RemoveChildren<typeof TouchableRipple> & {
  /**
   * Content of the `DataTableRow`.
   */
  children: React.ReactNode;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  /**
   * @optional
   */
  theme: Theme;
};

class DataTableRow extends React.Component<Props> {
  static displayName = 'DataTable.Row';

  render() {
    const { onPress, style, theme, ...rest } = this.props;
    const borderBottomColor = color(theme.dark ? white : black)
      .alpha(0.12)
      .rgb()
      .string();

    return (
      <TouchableRipple
        {...rest}
        onPress={onPress}
        style={[styles.container, { borderBottomColor }, style]}
      >
        <View style={styles.content}>{this.props.children}</View>
      </TouchableRipple>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    minHeight: 48,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default withTheme(DataTableRow);

// @component-docs ignore-next-line
export { DataTableRow };
