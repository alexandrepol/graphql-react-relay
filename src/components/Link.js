import React, {Component} from 'react';
import {createFragmentContainer, graphql} from 'react-relay';


class Link extends Component{
    render(){
        return (
            <div>
                <div>
                    {this.props.link.description} ({this.props.link.url})
                </div>
            </div>
        )
    }

    _voteForLink = async () => {
        //Implement this in chapter 6
    }
}

export default createFragmentContainer(Link, graphql`
  fragment Link_link on Link {
    id
    description
    url
  }
`);