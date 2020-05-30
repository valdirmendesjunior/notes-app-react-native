import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    logoContainer: {
        width: '100%',
        height: '35%',
        backgroundColor: 'rgb(247, 247, 247)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    newNoteContainer: {
        width: '100%',
        height: '65%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
    },

    newNoteTitle: {
        fontSize: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        marginTop: 5,
        padding: 15,
        borderColor: 'rgb(216, 222, 226)'
    },

    newNoteInput: {
        fontSize: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        marginTop: 5,
        padding: 15,
        borderColor: 'rgb(216, 222, 226)',
        height: 150
    },

    saveNoteButton: {
        borderStyle: 'solid',
        borderRadius: 7,
        marginTop: 5,
        padding: 13,
        backgroundColor: 'rgb(250, 218, 128)'
    },

    saveNoteButtonLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 17
    },
})


export default styles;