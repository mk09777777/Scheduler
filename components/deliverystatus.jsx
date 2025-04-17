import { Text, View, FlatList, ScrollView, TouchableOpacity, Modal, TextInput } from "react-native";
import ScheduleStles from "../styles/scheduleStyles";
import { Fragment, useEffect, useState } from "react";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import InputBoxStyles from "../styles/inputBox";


export default function Status({deliveredcount,  missedcount,pausedcount, data, day, past, year, month,  setLocalData }) {

    const [inputModal, setInputModal] = useState(false)
    const [quantity, setQuantity] = useState()
    const [pauseButtonActive, setPauseButtonActive] = useState(false);




    const toggleInput = () => {
     
        setInputModal(false);
        setPauseButtonActive(true)
        setQuantity("");
    };


    const handlePause = () => {

        setPauseButtonActive(false)
    };



    const handleStatusBox = () => {
        if (data.status === "delivered") {
            return (
                <View style={ScheduleStles.statusBoxDelivered}>
                    <View style={ScheduleStles.statusSart}>
                        <View style={ScheduleStles.logoContainerDelivered}>
                            <FontAwesome5 name="calendar-check" size={24} color="#17a24d" />
                        </View>
                        <View style={ScheduleStles.statustTextContainer}>
                            <Text style={ScheduleStles.statusText1}>Delivered</Text>
                            <Text style={ScheduleStles.statusText2}>Quantity: {data.quantity}L</Text>
                        </View>
                    </View>
                    <View style={ScheduleStles.dateBox}>
                        <Text style={ScheduleStles.DateBoxText}> {data.date} {data.month}</Text>
                    </View>
                </View>
            )
        }
        else if (data.status === "missed") {
            return (
                <View style={ScheduleStles.statusBoxMissed}>
                    <View style={ScheduleStles.statusSart}>
                        <View style={ScheduleStles.logoContainerMissed}>
                            <Entypo name="cross" size={24} color="#d22b29" />
                        </View>
                        <View style={ScheduleStles.statustTextContainer}>
                            <Text style={ScheduleStles.statusText1}>Missed</Text>
                            <Text style={ScheduleStles.statusText2}>Quantity: {data.quantity}L</Text>
                        </View>
                    </View>
                    <View style={ScheduleStles.dateBox}>
                        <Text style={ScheduleStles.DateBoxText}> {data.date} {data.month}</Text>
                    </View>
                </View>
            )
        }
        else if (data.status === "requested") {
            return (
                <View style={ScheduleStles.statusPending}>
                    <View style={ScheduleStles.statusSart}>
                        <View style={ScheduleStles.logoContainerPending}>
                            <Entypo name="cross" size={24} color="#d22b29" />
                        </View>
                        <View style={ScheduleStles.statustTextContainer}>
                            <Text style={ScheduleStles.statusText1}>Pending</Text>
                            <Text style={ScheduleStles.statusText2}>Quantity: {data.quantity}L</Text>
                        </View>
                    </View>
                    <View style={ScheduleStles.dateBox}>
                        <Text style={ScheduleStles.DateBoxText}> {data.date} {data.month}</Text>
                    </View>
                </View>
            )

        }

        else {
            return (
                <View style={ScheduleStles.statusBox}>
                    <View style={ScheduleStles.statusSart}>
                        <View style={ScheduleStles.logoContainer}>
                            <Feather name="pause" size={24} color="black" />
                        </View>
                        <View style={ScheduleStles.statustTextContainer}>
                            <Text style={ScheduleStles.statusText1}>Paused</Text>
                            <Text style={ScheduleStles.statusText2}>Quantity: {data.quantity}L</Text>
                        </View>
                    </View>
                    <View style={ScheduleStles.dateBox}>
                        <Text style={ScheduleStles.DateBoxText}> {data.date} {data.month}</Text>
                    </View>
                </View>
            )
        }
    }



    if (!data) {
        return (
            <Fragment>
                <View style={ScheduleStles.deliveryStatusCard}>
                    <Text style={ScheduleStles.DeliveryText}>Delivery Status</Text>


                    <View style={ScheduleStles.statusBox}>
                        <View style={ScheduleStles.statusSart}>
                            <View style={ScheduleStles.logoContainer}>
                                <Feather name="pause" size={24} color="black" />
                            </View>
                            <View style={ScheduleStles.statustTextContainer}>
                                <Text style={ScheduleStles.statusText1}>Paused</Text>
                                <Text style={ScheduleStles.statusText2}>Quantity: null</Text>
                            </View>
                        </View>
                        <View style={ScheduleStles.dateBox}>
                            <Text style={ScheduleStles.DateBoxText}> {day?.date} {day?.day}</Text>
                        </View>
                    </View>



                    <View style={ScheduleStles.actionContainer}>
                        <Text style={ScheduleStles.ActionsText}>Actions</Text>
                        <View style={ScheduleStles.actionButtonContainer}>
                            <TouchableOpacity style={past ? ScheduleStles.PastRequestButton : ScheduleStles.RequestButton} onPress={() => setInputModal(true)}>

                                <Feather name="calendar" size={20} color="white" />
                                <Text style={ScheduleStles.ReqestText}>Request Delivery</Text>

                            </TouchableOpacity>

                            <Modal
                                visible={inputModal}
                                onRequestClose={toggleInput}
                                animationType="slide"
                                transparent={true}
                            >
                                <TouchableOpacity onPress={()=>setInputModal(false)} style={InputBoxStyles.background}>
                                    <View style={InputBoxStyles.inputContainer}>
                                        <View style={InputBoxStyles.headingContainer}>
                                            <Text style={InputBoxStyles.headingText}>Request</Text>
                                        </View>
                                        <View style={InputBoxStyles.inputBox}>
                                            <TextInput
                                                placeholder="enter quantity in Liters ex: 1.5"
                                                keyboardType="decimal-pad"
                                                inputMode="decimal"
                                                value={quantity}
                                                onChangeText={setQuantity} />
                                        </View>
                                        <TouchableOpacity style={InputBoxStyles.ConfirmButton} onPress={toggleInput}>
                                            <Text style={InputBoxStyles.ConfirmText}>Confirm</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </Modal>



                            {pauseButtonActive ? (
                                <TouchableOpacity
                                    style={past ? ScheduleStles.PastPauseButton : ScheduleStles.PauseButtonActive}
                                    onPress={handlePause}
                                >
                                    <Feather name="pause-circle" size={24} color="white" />
                                    <Text style={ScheduleStles.PauseTextActive}>Pause Delivery</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={past ? ScheduleStles.PastPauseButton : ScheduleStles.PauseButton}>
                                    <Feather name="pause-circle" size={24} color="black" />
                                    <Text style={ScheduleStles.PauseText}>Pause Delivery</Text>
                                </View>
                            )}
                        </View>
                    </View>



                    <View style={ScheduleStles.MonthlySummaryContainer}>
                        <Text style={ScheduleStles.SummaryText}>Monthly Summary</Text>
                        <View style={ScheduleStles.actionButtonContainer}>
                            <View style={ScheduleStles.summaryDeliveredBox}>
                                <View style={ScheduleStles.logoContainerDelivered}>
                                    <FontAwesome5 name="calendar-check" size={22} color="#17a24d" />
                                </View>
                                <Text style={ScheduleStles.countText}>{deliveredcount}</Text>
                                <Text style={ScheduleStles.DeliveredText}>Delivered</Text>
                            </View>
                            <View style={ScheduleStles.summaryMissedBox}>
                                <View style={ScheduleStles.logoContainerMissed}>
                                    <Entypo name="cross" size={22} color="#d22b29" />
                                </View>
                                <Text style={ScheduleStles.countText}>{missedcount}</Text>
                                <Text style={ScheduleStles.DeliveredText}>Missed</Text>
                            </View>
                            <View style={ScheduleStles.summaryPausedBox}>
                                <View style={ScheduleStles.logoContainerPaused}>
                                    <Feather name="pause" size={22} color="black" />
                                </View>
                                <Text style={ScheduleStles.countText}>{pausedcount}</Text>
                                <Text style={ScheduleStles.DeliveredText}>Paused</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Fragment>
        );
    }


    return (
        <Fragment>
            <View style={ScheduleStles.deliveryStatusCard}>
                <Text style={ScheduleStles.DeliveryText}>Delivery Status</Text>


                {handleStatusBox()}


                <View style={ScheduleStles.actionContainer}>
                    <Text style={ScheduleStles.ActionsText}>Actions</Text>
                    <View style={ScheduleStles.actionButtonContainer}>
                        <View style={past ? ScheduleStles.PastRequestButton : ScheduleStles.RequestButton}>
                            <Feather name="calendar" size={20} color="white" />
                            <Text style={ScheduleStles.ReqestText}>Request Delivery</Text>
                        </View>
                        <View style={past ? ScheduleStles.PastPauseButton : ScheduleStles.PauseButton}>
                            <Feather name="pause-circle" size={24} color="black" />
                            <Text style={ScheduleStles.PauseText}>Pause Delivery</Text>
                        </View>
                    </View>
                </View>



                <View style={ScheduleStles.MonthlySummaryContainer}>
                    <Text style={ScheduleStles.SummaryText}>Monthly Summary</Text>
                    <View style={ScheduleStles.actionButtonContainer}>
                        <View style={ScheduleStles.summaryDeliveredBox}>
                            <View style={ScheduleStles.logoContainerDelivered}>
                                <FontAwesome5 name="calendar-check" size={22} color="#17a24d" />
                            </View>
                            <Text style={ScheduleStles.countText}>{deliveredcount}</Text>
                            <Text style={ScheduleStles.DeliveredText}>Delivered</Text>
                        </View>
                        <View style={ScheduleStles.summaryMissedBox}>
                            <View style={ScheduleStles.logoContainerMissed}>
                                <Entypo name="cross" size={22} color="#d22b29" />
                            </View>
                            <Text style={ScheduleStles.countText}>{missedcount}</Text>
                            <Text style={ScheduleStles.DeliveredText}>Missed</Text>
                        </View>
                        <View style={ScheduleStles.summaryPausedBox}>
                            <View style={ScheduleStles.logoContainerPaused}>
                                <Feather name="pause" size={22} color="black" />
                            </View>
                            <Text style={ScheduleStles.countText}>{pausedcount}</Text>
                            <Text style={ScheduleStles.DeliveredText}>Paused</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Fragment>
    )
}