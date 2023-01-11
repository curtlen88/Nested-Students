import React, {Component} from "react";
import Roster from "./Roster";

export default class Student extends Component {
    render() {
        const allScores = this.props.student.scores.map((score, idx) =>{
            return (
                <score 
                score={score}

                key={`score-${idx}`}
                />
            ) 
    return (
        
    )
            })
    }
}