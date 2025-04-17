import { Text, View, FlatList, ScrollView, TouchableOpacity } from "react-native";
import ScheduleStles from "../styles/scheduleStyles";
import { Fragment, useEffect, useRef, useState } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Status from "../components/deliverystatus";
import { RefreshControl } from "react-native";


export default function Index() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateData, setSelectedDateData] = useState(null);
  const [pastdateActive, setPastDateActive] = useState(false)
  const flatListRef = useRef(null);
  const [totalMissedCount, setMissedCount] = useState(0)
  const [totalDeliveredCount, setDeliveredCount] = useState(0)
  const [totalPausedCount, setPausedCount] = useState(0)
  const [refreshing, setRefreshing] = useState(false);


  useEffect(() => {

    const today = new Date();
    const formattedToday = {
      day: today.toLocaleDateString("en-US", { weekday: "short" }),
      date: today.getDate().toString().padStart(2, '0'),
    };

    handleSelectedDate(formattedToday);

    const indexToScroll = days.findIndex(
      (item) => item.date === formattedToday.date && item.day === formattedToday.day
    );

    if (indexToScroll !== -1 && flatListRef.current) {
      setTimeout(() => {
        flatListRef.current.scrollToIndex({ index: indexToScroll, animated: true });
      }, 100);
    }
  }, [currentMonth, currentYear]);

  useEffect(() => {
    handleCounts();
  }, [localData]);

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push({
        day: date.toLocaleDateString("en-US", { weekday: "short" }),
        date: date.getDate().toString().padStart(2, '0'),
      });
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const days = getDaysInMonth(currentMonth, currentYear);
  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  const [localData, setLocalData] = useState([
    { quantity: 1.5, status: "delivered", date: 1, day: "Tue", month: "Apr", year: 2025 },
    { quantity: 1.5, status: "missed", date: 4, day: "Fri", month: "Apr", year: 2025 },
    { quantity: 2.5, status: "delivered", date: 7, day: "Mon", month: "Apr", year: 2025 },
    { quantity: 3.5, status: "paused", date: 3, day: "Thu", month: "Apr", year: 2025 },
    { quantity: 2, status: "missed", date: 2, day: "Wed", month: "Apr", year: 2025 },
    { quantity: 1, status: "delivered", date: 15, day: "Tue", month: "Apr", year: 2025 }
  ]);



  const handleSelectedDate = (dateObj) => {
    const selectedDateFull = new Date(currentYear, currentMonth, dateObj.date);
    const currentFullDate = new Date();

    const isPastDate = selectedDateFull < currentFullDate;


    setPastDateActive(isPastDate && !(selectedDateFull.getDate() === currentFullDate.getDate() && selectedDateFull.getMonth() === currentFullDate.getMonth() && selectedDateFull.getFullYear() === currentFullDate.getFullYear()));


    setSelectedDate(dateObj);

    const matched = localData.find(
      (item) =>
        item.date.toString().padStart(2, '0') === dateObj.date &&
        item.day === dateObj.day &&
        item.month === monthName.slice(0, 3) &&
        item.year === currentYear
    );

    setSelectedDateData(matched || null);
  };

  const handleCounts = () => {
    let delivered = 0;
    let missed = 0;
    let paused = 0;

    localData.forEach((item) => {
      if (item.status === "delivered") delivered++;
      else if (item.status === "missed") missed++;
      else if (item.status === "paused") paused++;
    });

    setDeliveredCount(delivered);
    setMissedCount(missed);
    setPausedCount(paused);
  };

  const onRefresh = () => {
    setRefreshing(true);


    setTimeout(() => {

      setLocalData((prevData) => [
        ...prevData,
        {
          quantity: 2,
          status: "delivered",
          date: 10,
          day: "Thu",
          month: "Apr",
          year: 2025
        },
      ]);

      setRefreshing(false);
    }, 1500);
  };

  return (
    <Fragment>
      <View style={ScheduleStles.background}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={ScheduleStles.headingContainer}>
            <MaterialIcons name="arrow-back-ios" size={28} color="black" />
            <Text style={ScheduleStles.headingText}>Calendar</Text>
          </View>
          <View style={ScheduleStles.CaenderMonth}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={goToPreviousMonth} />
            <Text style={ScheduleStles.monthText}>{monthName}</Text>
            <Ionicons name="chevron-forward" size={24} color="black" onPress={goToNextMonth} />
          </View>
          <View style={ScheduleStles.calenderDate}>
            <FlatList
              ref={flatListRef}
              data={days}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              getItemLayout={(data, index) => ({
                length: 60,
                offset: 60 * index,
                index,
              })}
              onScrollToIndexFailed={(info) => {
                setTimeout(() => {
                  flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
                }, 100);
              }}
              renderItem={({ item }) => {
                const isActive = selectedDate && selectedDate.date === item.date && selectedDate.day === item.day;
                return (
                  <TouchableOpacity onPress={() => handleSelectedDate(item)}>
                    <View style={isActive ? ScheduleStles.DateBoxActive : ScheduleStles.DateBox}>
                      <Text style={isActive ? ScheduleStles.dayTextActive : ScheduleStles.dayText}>
                        {item.day}
                      </Text>
                      <Text style={isActive ? ScheduleStles.dateTextActive : ScheduleStles.dateText}>
                        {item.date}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <Status
            data={selectedDateData}
            day={selectedDate}
            past={pastdateActive}
            year={currentYear}
            month={currentMonth}
            deliveredcount={totalDeliveredCount}
            missedcount={totalMissedCount}
            pausedcount={totalPausedCount}
          />
        </ScrollView>
      </View>
    </Fragment>
  );
}
