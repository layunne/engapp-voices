import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

import AudioCard from './AudioCard';

import 'typeface-roboto';

const audios = [
	{ title: 'Hassum meu irmão, e aí?', audio: require('./audio.ogg') },
]

class App extends Component {
	render() {
		return (
			<div style={{ padding: 8 }}>
				<CssBaseline />
				<Grid container spacing={16}>
					{audios.map((audio, index) => (
						<AudioCard key={index} {...audio} />
					))}
				</Grid>
			</div>
		);
	}
}

export default App;
