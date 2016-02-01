const React = require('react');

const BackImage = React.createClass({
    render:function(){
        let style={
            backgroundImage: 'url(../../public/home/images/img3.jpg)'
        };
        return(
            <div className="BackImage" style={style}>
            </div>
        )
    }
})

module.exports=BackImage;