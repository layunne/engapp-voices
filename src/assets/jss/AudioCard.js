
export default theme => ({

    eachCard: {
        /*background: 'linear-gradient(to right, #02499b 80%, #fff)',*/
        /*border: '1px solid #02499b',*/
        height: 370,
    },

    titBoxes: {
        textAlign: 'center',
        height: 195, 

        [theme.breakpoints.down('xs')]:{
            height: 180,
        
        }

    },

    btnControls: {

    },

});