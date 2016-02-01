const React = require('react');
const Banner = require('./Banner.react.js');
const BackImage = require('./BackImage.react.js');

const Main = React.createClass({
    render(){
        return(
            <div className="main" >
                <BackImage />
                <Banner />
                {this.props.children}
            </div>
        )
    }
});


module.exports = Main;