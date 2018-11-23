import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';

import PlayIcon from '@material-ui/icons/PlayArrow';

import play from 'audio-play';
import load from 'audio-loader';

const click = _ => {
  load(require('./audio.ogg')).then(play)
}

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Grid container style={{ padding: 10 }}>
          <Grid item>
            <Paper elevation={4} style={{ padding: 15 }}>
              <Typography variant="subtitle1">
                Hassum meu irmão, e aí?
              </Typography>
              <IconButton onClick={click}>
                <PlayIcon style={{ fontSize: 40 }} />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default App;
