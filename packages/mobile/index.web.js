import { AppRegistry } from 'react-native';
import WebAppWrapper from './src/WebAppWrapper';

// Register the app
AppRegistry.registerComponent('main', () => WebAppWrapper);

// Run the app on web
AppRegistry.runApplication('main', {
  rootTag: document.getElementById('root'),
});

// Add web-specific styles
const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`));
document.head.appendChild(style);