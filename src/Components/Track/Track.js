import React from 'react';
import './Track.css';

export class Track extends React.Component{
    constructor(props){
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    removeTrack(){
        this.props.removeTrack(this.props.track)
    }

    addTrack(){
        this.props.onAdd(this.props.track)
    }

    renderAction(){
        if(this.props.isRemoval){
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        } else{
            return <button className="Track-action" onClick={this.addTrack}>+</button>
        }
    }    
    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action"></button>
                {this.renderAction()}
            </div>
        )
    }
}