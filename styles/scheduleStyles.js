import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const ScheduleStles = StyleSheet.create({
    background: {
        display: "flex",
        flexDirection: "column"
    },
    headingContainer: {
        display: "flex",
        flexDirection: "column",
        padding: 18,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#04266D4D",
    },
    headingText: {
        color: "#00040B",
        fontWeight: "600",
        fontSize: 32,
        marginTop: 10
    },


    // month section
    CaenderMonth: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "white",
        flexDirection: "row",
        borderBottomWidth: 0.6,
        borderBottomColor: "#04266D4D",
    },
    monthText: {
        fontSize: 20,
        color: "#00040B",
        fontWeight: "500",
        marginLeft: 10,
        marginRight: 10
    },


    // date section
    calenderDate: {
        display: "flex",
        paddingLeft: 20,
        backgroundColor: "white",
        flexDirection: "row",
        borderBottomWidth: 0.3,
        borderBottomColor: "#04266D4D",
        paddingTop: 10,
        paddingBottom: 10,
    },
    DateBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 6,
        padding: 14,
        borderRadius: 8,
        backgroundColor: "#D0E1F4",
        marginRight: 10,
        alignItems:"center"
    },
    DateBoxActive: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 6,
        padding: 14,
        borderRadius: 8,
        backgroundColor: "#3b83f7",
        marginRight: 10,
        alignItems:"center"
    },
    dayText: {

        fontSize: 14,
        color: "#00040B",
        fontWeight: "500",
    },
    dateText: {
        marginTop: 5,
        fontSize: 18,
        color: "#00040B",
        fontWeight: "600",
    },
    dayTextActive: {
     
        fontSize: 14,
        color: "white",
        fontWeight: "500",
    },
    dateTextActive: {
        marginTop: 5,
        fontSize: 18,
        color: "white",
        fontWeight: "600",
    },





    //status card

    deliveryStatusCard: {
        display: "flex",
        flexDirection: "column",
        padding: 10,
        marginLeft: 10,
        marginRight: 10
    },
    DeliveryText: {
        fontSize: 20,
        color: "#00040B",
        fontWeight: "600",
        marginTop: 10,
    },
    statusBox: {
        padding: 20,
        borderWidth: 0.5,
        borderColor: "#04266D4D",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:20
    },  
    
    //status delivered
     statusBoxDelivered: {
        padding: 20,
        borderWidth: 0.5,
        borderColor: "#04266D4D",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:20,
        backgroundColor: "#f1fcf4",
    },

    //status missed
    statusBoxMissed: {
        padding: 20,
        borderWidth: 0.5,
        borderColor: "#04266D4D",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:20,
        backgroundColor: "#fef3f3",
    },
    // status pending
    statusPending: {
        padding: 20,
        borderWidth: 0.5,
        borderColor: "#f0ecbf",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:20,
        backgroundColor: "#fefbe8",
    },
    statusSart: {
        display: "flex",
        flexDirection: "row",
    },
    logoContainer:{
        marginRight:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:100,
        padding:10
    },
    logoContainerDelivered:{
        marginRight:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#defae6",
        borderRadius:100,
        padding:10,
        
    },
    logoContainerMissed:{
        marginRight:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fbe3e7",
        borderRadius:100,
        padding:10,
        
    },
    logoContainerPending:{
        marginRight:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fafeff",
        borderRadius:100,
        padding:10,
        
    },
    statustTextContainer: {
        display: "flex",
        flexDirection: "column",

    },
    statusText1: {
        fontSize: 17,
        color: "#00040B",
        fontWeight: "600",
        marginLeft: 10

    },
    statusText2: {
        fontSize: 15,
        color: "#878c92",
        fontWeight: "600",
        marginLeft: 10,
        marginTop: 3,

    },
    dateBox: {
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#04266D4D",
        borderRadius: 20,
        padding: 10,
        alignItems:"center",
        display:"flex",
        justifyContent:"center",
    },
    DateBoxText: {
        fontSize: 14,
        color: "#00040B",
        fontWeight: "600"
    },



// Action Buttons
    actionContainer:{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"white",
        padding:10,
        borderWidth: 0.3,
        borderColor: "#04266D4D",
        borderRadius: 10,
        marginTop:20,
        justifyContent:"space-between",
        elevation:3
    },
    ActionsText:{
        fontSize: 17,
        color: "#00040B",
        fontWeight: "600",
        marginLeft: 10
    },
    actionButtonContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10,
        marginBottom:7
    },
    //Request Button
    RequestButton:{
        backgroundColor:"#3b83f7",
        display:"flex",
        flexDirection:"row",
        padding:10,
        borderRadius:9,
        marginRight:10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    PastRequestButton:{
        backgroundColor:"grey",
        display:"flex",
        flexDirection:"row",
        padding:10,
        borderRadius:9,
        marginRight:10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    ReqestText:{
        fontSize: 14,
        color: "white",
        fontWeight:"600",
        marginLeft:10,
        marginTop:1
    },
    // Pause Button
    PauseButton:{
        backgroundColor:"white",
        display:"flex",
        flexDirection:"row",
        padding:10,
        borderRadius:9,
        borderWidth: 0.5,
        borderColor: "#04266D4D",
        flex: 1,

        alignItems: "center",
        justifyContent: "center",
    },
    PauseButtonActive:{
        backgroundColor:"#fa7117",
        display:"flex",
        flexDirection:"row",
        padding:10,
        borderRadius:9,
        borderWidth: 0.5,
        borderColor: "#04266D4D",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    PastPauseButton:{
        backgroundColor:"grey",
        display:"flex",
        flexDirection:"row",
        padding:10,
        borderRadius:9,
        borderWidth: 0.5,
        borderColor: "#04266D4D",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    PauseText:{
        fontSize: 14,
        color: "black",
        fontWeight:"600",
        marginLeft:10,
        marginTop:1
    },
    PauseTextActive:{
        fontSize: 14,
        color: "white",
        fontWeight:"600",
        marginLeft:10,
        marginTop:1
    },


    // monthly summary
    MonthlySummaryContainer:{
        display:"flex",
        flexDirection:"column",
        padding:10,
        backgroundColor:"white",
        borderWidth: 0.3,
        borderColor: "#04266D4D",
        borderRadius: 10,
        marginTop:20,
        elevation:3
    },
    SummaryText:{
        fontSize: 17,
        color: "#00040B",
        fontWeight: "600",
        marginLeft: 10
    },
    //delivered
    summaryDeliveredBox:{
        backgroundColor:"#f1fcf4",
        display:"flex",
        flexDirection:"column",
        padding:10,
        borderRadius:9,
        borderWidth: 0.5,
        borderColor: "#f1fcf4",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight:10
    },
    logoContainerDelivered:{
        marginRight:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#dcfce5",
        borderRadius:100,
        padding:6,
        marginLeft:11,
        marginBottom:10
    },
    //missed
    summaryMissedBox:{
        backgroundColor:"#fef3f3",
        display:"flex",
        flexDirection:"column",
        padding:10,
        borderRadius:9,
        borderWidth: 0.5,
        borderColor: "#fef3f3",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight:10
    },
    logoContainerMissed:{
        marginRight:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ffe2e0",
        borderRadius:100,
        padding:6,
        marginLeft:11,
        marginBottom:10
    },

    //paused
    summaryPausedBox:{
        backgroundColor:"#f9fbfd",
        display:"flex",
        flexDirection:"column",
        padding:10,
        borderRadius:9,
        borderWidth: 0.5,
        borderColor: "#f9fbfd",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight:10,
    },
    DeliveredText: {
        fontSize: 15,
        color: "#878c92",
        fontWeight: "400",
        marginTop: 3,

    },
    countText:{
        fontSize: 20,
        color:"#00040B",
        fontWeight: "900",

    },
    logoContainerPaused:{
        marginRight:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f2f5f6",
        borderRadius:100,
        padding:6,
        marginLeft:11,
        marginBottom:10
    },


})
export default ScheduleStles;