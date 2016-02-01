const React = require('react');
const ReactDOM = require('react-dom');
const Paper = require('material-ui').Paper;
import CircularProgress from  'material-ui/lib/circular-progress.js'
const $ = require('jquery');

const Content = React.createClass({
    getArticleContent:function(url,cb) {
        $.ajax({
            url: 'public/home/article/'+url,
            dataType: 'text'
        }).done( function(html) {
            cb(html);
        }).fail(function(err) {
            //console.log(err);
        });
    },
    componentDidMount:function() {
        var _this=this;
        this.getArticleContent(this.props.params.id.slice(1),function(my){
            _this.handleChangePage(my);
        });
    },
    handleChangePage:function(my) {
        ReactDOM.findDOMNode(this.refs.container).innerHTML=my;
        this.bindCommentSession();
    },
    bindCommentSession:function() {
        var _this=this;
        if(!window.DISQUS) {
            disqus_identifier='id?'+this.props.params.id.slice(1);
            disqus_url = "http://www.zhuqiao.me/content/#!"+this.props.params.id.slice(1);

            var d = document, s = d.createElement('script');
            d.async = true;
            s.src = 'https://mangoare.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        }else {
            disqus_identifier='id?'+this.props.params.id.slice(1);
            disqus_url = "http://www.zhuqiao.me/content/#!"+this.props.params.id.slice(1);

            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.url = "http://www.zhuqiao.me/content/#!"+this.props.params.id.slice(1);
                    this.page.identifier = 'id?'+this.props.params.id.slice(1);
                    this.page.title = this.props.params.id.slice(1);
                }
            });
        }
    },
    render:function() {

        return(
            <div className="ArticleContent container">
                <Paper zDepth={5}>
                    <div className="Aricle show-contents" ref="container">
                        <div className ="loading">
                            <CircularProgress mode="indeterminate" size={2} />
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
})

module.exports = Content;
