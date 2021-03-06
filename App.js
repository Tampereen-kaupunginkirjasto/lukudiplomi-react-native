/**
 * The main app component.
 *
 * @author Miika Koskela <koskela.miika.s@outlook.com>
 * @copyright Tampereen Kaupunginkirjasto, 2018-
 * @license MIT (see LICENSE)
 */

import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import Styles from './src/Styles';

import Navigation from './src/Navigation';
import Downloader from './src/Downloader';

// TODO: Parser can be left out when the server contains only JSON files.
import Parser from './src/Parser';
import ConfigDatasource from './src/Datasources/ConfigDatasource';

/**
 * An entry point to the Lukudiplomi application.
 *
 * It renders the app and also checks if a grade is selected.
 *
 * If the grade is not selected, then a user is redirected to the grade
 * selection screen where the user can select and save the grade.
 */
class App extends Component {
  constructor (props) {
    super(props);
    let downloader = new Downloader(new Parser({}));
    let uri = 'https://www.example.com/lukudiplomi-config.txt';
    this.config = new ConfigDatasource(uri, downloader);
  }

  componentDidMount () {
    SplashScreen.hide();

    // First, check if there's current grade set; if not, navigate to the grade
    // selection screen to set the grade.
    let grade = this.config.getCurrentGrade();
    grade.then((value) => {
      if (!value) {
        this.navigator && this.navigator.dispatch(
          NavigationActions.navigate({ routeName: 'GradeSelect' })
        );
        return null;
      }
    }).catch((error) => {});
  }

  render () {
    return (
      <Navigation
        ref={(ref) => { this.navigator = ref; }}
        style={Styles.tabNavigator}
      />
    );
  }
}

export default App;

App.propTypes = {
  navigation: PropTypes.object
};
