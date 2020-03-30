import * as React from 'react';
import {ThemeProvider} from './theming';
import {Provider as SettingsProvider, Settings} from './settings';
import MaterialCommunityIcon from '../components/MaterialCommunityIcon';
import PortalHost from '../components/Portal/PortalHost';
import {Theme} from '../types';
import {Appearance, ColorSchemeName} from 'react-native';
import {DarkTheme, DefaultTheme} from '../index';

type Props = {
  children: React.ReactNode;
  theme?: Theme;
  settings?: Settings;
};

type State = {
  colorScheme: ColorSchemeName;
};

export default class Provider extends React.Component<Props, State> {
  state = {
    colorScheme: Appearance.getColorScheme(),
  };

  componentDidMount() {
    Appearance.addChangeListener(this._handleAppearanceChange);
  }

  componentWillUnmount() {
    Appearance.removeChangeListener(this._handleAppearanceChange);
  }

  _handleAppearanceChange = (preferences: Appearance.AppearancePreferences) => {
    const {colorScheme} = preferences;
    this.setState({colorScheme});
  };

  _getTheme = () => {
    if (this.props.theme) {
      return this.props.theme;
    } else {
      return this.state.colorScheme === 'light' ? DefaultTheme : DarkTheme;
    }
  };

  render() {
    console.log(this.state.colorScheme);
    return (
      <PortalHost>
        <SettingsProvider
          value={this.props.settings || {icon: MaterialCommunityIcon}}>
          <ThemeProvider theme={this._getTheme()}>
            {this.props.children}
          </ThemeProvider>
        </SettingsProvider>
      </PortalHost>
    );
  }
}
