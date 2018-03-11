import React, { Component } from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import Link from './Link';


class LinkList extends Component {

    render() {
        

        const linksToRender = [{
            id: '1',
            description: 'The coolest GraphQL backend 😎',
            url: 'https://www.graph.cool'
        }, {
            id: '2',
            description: 'Highly performant GraphQL client from Facebook',
            url: 'https://facebook.github.io/relay/'
        }];

        return (
            <div>
                {this.props.viewer.allLinks.edges.map(({node}) =>
                    <Link key={node.__id} link={node} />
                )}
            </div>
        )
    }

}

export default createFragmentContainer(LinkList, graphql`
  fragment LinkList_viewer on Viewer {
    allLinks(last: 100, orderBy: createdAt_DESC) @connection(key:"LinkList_allLinks", filters: []){
        edges {
            node {
                ...Link_link
            }
        }
    }
  }
`);