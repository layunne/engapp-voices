import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import PauseIcon from '@material-ui/icons/Pause';
import PlayIcon from '@material-ui/icons/PlayArrow';
import ShareIcon from '@material-ui/icons/Share';

import play from 'audio-play';
import load from 'audio-loader';
const options = {
	//start/end time, can be negative to measure from the end
	start: 0,
	//repeat playback within start/end
	loop: false,
	//playback rate
	rate: 1,
	//volume
	volume: 1,
	//start playing immediately
	autoplay: true,
}
class AudioCard extends Component {
	state = {
		playing: false,
	}
	constructor(props) {
		super(props);
		load(props.audio)
			.then(audioBuffer => this.buffer = audioBuffer);
	}
	click = _ => {
		const { playing } = this.state;
		if(!playing) {
			this.playback = play(this.buffer, {...options, end: this.buffer.duration }, _ => this.setState({ playing: false }));
		} else {
			this.playback.pause();
		}
		this.setState({ playing: !playing });
	}

	render() {
		const { playing } = this.state;
		const { title } = this.props;
		return (
			<Grid item xs={6} sm={4} lg={2}>
				<Card >
					<CardHeader title={title} />
					<CardContent>
						<Grid container justify="center">
							<IconButton onClick={this.click}>
								{ playing ? 
									<PauseIcon style={{ fontSize: 40 }} />
									:
									<PlayIcon style={{ fontSize: 40 }} />
								}
							</IconButton>
						</Grid>
					</CardContent>
					<CardActions>
						<IconButton>
							<ShareIcon />
						</IconButton >
					</CardActions>
				</Card>
			</Grid>
		);
	}
}

export default AudioCard;