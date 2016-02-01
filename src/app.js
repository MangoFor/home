import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link ,IndexRoute} from 'react-router'

import Main from './components/main.react.js'
import List from './components/ArticleList'
import Content from'./components/ArticleContent'


require('./less/app.less');

render((

        <Router>
            <Route path="/" component={Main}>
                <IndexRoute component={List} />
                <Route path="content/:id" component={Content} />
                <Route path="list" component={List} />
            </Route>
        </Router>

), document.getElementById('app'));


