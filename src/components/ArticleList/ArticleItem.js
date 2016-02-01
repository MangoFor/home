const React = require('react');
const utiles = require('../../utiles/utiles.js');

import { Router, Route, Link } from 'react-router'


const ArticleList = React.createClass({
    render:function(){
        return(
            <li className="ArticleItem">
                <Link  to={'/content/:'+this.props.data.url}>
                    <span className="time">{utiles.DateFormat.call(new Date(this.props.data.time),'yyyy-MM-dd')}</span>
                    <span>{this.props.data.title}</span>
                </Link>
            </li>
        )
    }
})

module.exports=ArticleList;