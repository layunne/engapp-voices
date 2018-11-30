import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

import AudioCard from './AudioCard';

import 'typeface-roboto';

const audios = [
	{ title: 'Hassum meu irmão, e aí?', audio: require('./audio.ogg') },
	{ title: 'Eu tô chorando porra', audio: require('./audio2.ogg') },
	{ title: 'Fdp não sabe digitar', audio: require('./audio3.ogg') },
	{ title: 'Bolsonaro zoio de lula', audio: require('./audio4.ogg') },
	{ title: 'CTO Rino', audio: require('./audio5.ogg') },
	{ title: 'Se eu tivesse uma arma eu atirava no primeiro de azul', audio: require('./audio6.ogg') },
	// { title: 'Aqui quem fala é Marco Barbosa', audio: require('./audio7.aac') },
	{ title: 'Bolsonaro com tuberculose', audio: require('./audio8.ogg') },
	{ title: 'Tome no cu esse csa', audio: require('./audio9.ogg') },
	{ title: 'Isso aqui tá uma porra', audio: require('./audio10.ogg') },
	{ title: 'Hugo saia do crossfit', audio: require('./audio11.ogg') },
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
