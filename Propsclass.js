import React, { Component } from 'react'
export default class Propsclass extends Component
{
    render()
    {
        return(
            <div>
                <h1>I am Saseena working at {this.props.office}</h1>
            </div>
        )
    }
}