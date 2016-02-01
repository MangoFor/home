import React from 'react'
import { Router, Route, Link ,IndexRoute} from 'react-router'

const Banner = React.createClass({
    render:function(){

        return(
            <div className="Banner" >
                <div className="container">
                    <div>
                        <Link to={"/"}>
                            <h1>
                            Mango era
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
})


module.exports=Banner;