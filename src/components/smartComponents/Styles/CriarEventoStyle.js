import metrics from '../../../Metrics';

export default {
    container: {
        flex: 1,
        //paddingTop: 10,
        //paddingBottom: 10,
        backgroundColor: '#fff'
    },
    image: {
        width: (metrics.screenWidth)-40,
        height: (metrics.screenHeight)*(2/5),
        //backgroundColor: 'red',
        //flexDirection: 'row',
        //flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        //resizeMode: 'stretch',
        resizeMode: 'contain',
        paddingLeft: 20,
        //backgroundColor: 'red'
    },
    nbButton: {
        width: (metrics.screenWidth)-40,
        height: (metrics.screenHeight)*(2/5),
        //flex: 1,
        resizeMode: 'contain',
        paddingLeft: 20,
        //paddingRight: 30,
        backgroundColor: ''
    },
    button: {
        flex: 0.08,
        paddingBottom: 5,
        paddingHorizontal: 0,
        flexDirection: 'row',
        //flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        //marginTop: 10
    },
}
