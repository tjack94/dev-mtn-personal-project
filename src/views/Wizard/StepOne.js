import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../Redux/actions';
import axios from 'axios';

class StepOne extends Component {
	constructor(props) {
		super(props);
		this.state = {
			surveyName: ''
		};
	}
	handleChange(string) {
		this.setState({ surveyName: string });
	}
	createSurvey() {
		const newSurvey = {
			name: this.state.surveyName
		};
		axios.post('/api/create-survey', newSurvey).then(() => {
			this.props.history.push('/create-survey/step2');
		});
	}
	render() {
		return (
			<div className="wizard slide-in-right">
			<h2>Create New Survey</h2>
				<h3> Survey Name: </h3>
				<input
					className="wizard-input"
					type="text"
					value={this.state.surveyName}
					onChange={(e) => this.handleChange(e.target.value)}
				/>
				<button className="next-button" onClick={() => this.createSurvey()}>
					Next
				</button>
			</div>
		);
	}
}
export default connect((state) => state, Actions)(StepOne);
