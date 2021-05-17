import {render} from 'react-dom';

import 'styles/layouts/_site.scss';

import App from './components/app';
import Content from './components/content';

render(<App><Content/></App>, document.body);
