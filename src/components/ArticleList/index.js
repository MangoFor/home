const React = require('react');
const Item = require('./ArticleItem');
const Paper = require('material-ui').Paper;
const arr  = require('./config.js');



const ArticleList = React.createClass({
    render:function(){
        var items=[];
        for(let i=0;i<arr.length;++i){
            items.push(<Item data={arr[i]} key={i} />);
        }
        return(
            <div className="ArticleList container">
                <Paper zDepth={5}>
                    <ul className="ArticleUl">
                        {items}
                    </ul>
                </Paper>
            </div>
        )
    }
})

module.exports=ArticleList;