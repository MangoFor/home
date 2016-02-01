/**
 * Created by Mangotree on 2015/12/18.
 */
import React from 'react';

const CommentItem = React.createClass({
    render:function(){
        return(
            <div>
                <CommentInput />
                <ComentList />
            </div>
        )
    }
})

module.exports = CommentItem;
