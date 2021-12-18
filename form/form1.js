import React from 'react'
import { View, Text, SafeAreaView, ScrollView, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'



const DATA = [
    {
      id: 1,
      title: 'Đà Nẵng lập trạm y tế điều trị F0 ở KCN, tiêm vaccine cho người dân tại nhà',
      Img: "https://photo-baomoi.zadn.vn/w300_r3x2_sm/2021_12_14_83_41196456/1e3fea4c5b0eb250eb1f.jpg",
      hour: 7,
    },
    {
      id: 2,
      title: 'Hải Phòng không còn vùng đỏ, hơn 100 ca qua khám sàng lọc, 3 ca tử',
      Img: "https://photo-baomoi.zadn.vn/w300_r3x2_sm/2021_12_14_94_41196384/a558eb2b5a69b337ea78.jpg",
      hour: 6,
    },
    {
      id: 3,
      title: 'Bình Phước: Ca mắc COVID-19 tăng cao kỷ lục trong ngày, Giám đốc',
      Img: "https://photo-baomoi.zadn.vn/w300_r3x2_sm/2021_12_14_94_41196354/0e400633b7715e2f0760.jpg",
      hour: 7,
    },
    {
        id: 4,
        title: 'Hà Nam: Chùm lây mới liên quan đến công ty xi măng Xuân Thành tiếp tục',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2_sm/2021_12_14_94_41196325/19dfb5af04ededb3b4fc.jpg",
        hour: 12,
      },
      {
        id: 5,
        title: 'Quảng Ngãi: Phát hiện 90 F0 tại lán trại công nhân tạm trú',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2_sm/2021_12_14_83_41196264/2ac400b4b1f658a801e7.jpg",
        hour: 12,
      },
      {
        id: 6,
        title: 'TP.HCM thí điểm cách ly tập trung 7 ngày đối với F0 không triệu chứng',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2/2021_12_14_293_41196313/0320767d293fc061992e.jpg",
        hour: 12,
      },
      {
        id: 7,
        title: 'Thủ tướng yêu cầu tìm giải pháp đẩy lùi ca nặng và tử vong do COVID-19',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2/2021_12_14_20_41196201/93d414a5a5e74cb915f6.jpg",
        hour: 12,
      },
      {
        id: 8,
        title: 'Các mốc dịch tễ liên quan đến các ca mắc COVID-19 mới trên địa bàn TP Thanh Hóa',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2_sm/2021_12_14_361_41196107/21530a4c5b0eb250eb1f.jpg",
        hour: 12,
      },
      {
        id: 9,
        title: 'CLIP: Cận cảnh cách làm vừa xuất hiện của Hóc Môn đối với các F0',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2_sm/2021_12_14_15_41195782/a654422ef36c1a32437d.jpg",
        hour: 12,
      },
      {
        id: 10,
        title: 'Mở lại bay quốc tế: Phải chờ hướng dẫn y tế đối với khách nhập cảnh',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2/2021_12_14_293_41195679/4622954bc4092d577418.jpg",
        hour: 12,
      },
      {
        id: 11,
        title: 'Bộ Y tế: TP.HCM có thể rút ngắn thời gian cách ly tập trung xuống 7 ngày',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2_sm/2021_12_14_94_41195569/93e697152a57c3099a46.jpg",
        hour: 12,
      },
      {
        id: 12,
        title: 'Chiều 14/12, Nghệ An ghi nhận 73 ca nhiễm Covid-19 mới, trong đó có 16 ca cộng đồng',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2/2021_12_14_274_41195511/0bbe5190f2d31b8d42c2.jpg",
        hour: 12,
      },
      {
        id: 13,
        title: 'Ngày 14-12, Thanh Hóa ghi nhận 121 bệnh nhân mắc COVID-19',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2_sm/2021_12_14_361_41194846/d2e4f28743c5aa9bf3d4.jpg",
        hour: 12,
      },
      {
        id: 14,
        title: 'Hà Nội lên phương án 508 trạm y tế lưu động điều trị F0 tăng cao',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2/2021_12_14_293_41194699/d9a7af551e17f749ae06.jpg",
        hour: 12,
      },
      {
        id: 15,
        title: 'Trưng dụng ký túc xá 2 trường đại học tại Hà Nội làm nơi điều trị F0',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2/2021_12_14_20_41191887/af0d8f5ccf1e26407f0f.jpg",
        hour: 12,
      },
      {
        id: 16,
        title: 'Đức hỗ trợ thêm hơn 2,5 triệu liều vaccine Moderna cho Việt Nam',
        Img: "https://photo-baomoi.zadn.vn/w300_r3x2/2021_12_14_119_41193109/bb4dbfdd0e9fe7c1be8e.jpg",
        hour: 12,
      },
  ];


export default function tintuc() {
    const header=()=>{
        return(
            <View>
                <View style={styles.header}>
                <View style={styles.header_left}>
                <Icon name="sun-o" color="yellow" size={30} />
                <Text style={styles.header_leftText}>Chào buổi sáng</Text>
                </View>
                <View style={styles.header_right}>
                <Image style={styles.header_rightImg} source={require("../picture/thiet-ke-logo-tin-tuc-24h-1.png")} />
                </View>
            </View>
            <View style={styles.mainTittle}>
                <Text style={styles.mainTittle_line}></Text>
                <Text style={styles.mainTittle_text}>Tin tức</Text>
                <Text style={styles.mainTittle_line}></Text>
            </View>
            </View>
        )
    }

    const renderItem = ({ item }) => (
        <View style={styles.mainItem}>
       <TouchableOpacity style={styles.mainItem_left_btn}><Image style={styles.mainItem_left} source={{ uri: item.Img}} /></TouchableOpacity>
        <View style={styles.mainItem_right}>
        <TouchableOpacity><Text style={styles.mainItem_right_text}>{item.title}</Text></TouchableOpacity>
        <View style={styles.mainItem_right_bottom}>
        <Image style={styles.mainItem_right_bottom_img} source={{ uri: 'https://lh3.googleusercontent.com/proxy/VNLjlXGXtxkXwmM7QDOSYnO4s_abmq79u6GcCA6VWpvCdK9qmDtJoRoyWyNH5X9segfTuMQGu2HdIc5pRWkACbdfcmJEZeYbr4wkrfvhmoFjyPE',}} />
        <Text style={styles.mainItem_right_bottom_text}>{item.hour}h</Text>
        </View>
        </View>
        </View>
      );


    return (
        <View style={styles.container}>
         <FlatList
         style={styles.main}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={header}
      />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    },
    header: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        backgroundColor: "#22c0d9",
        marginBottom: 20,
    },
    header_left: {
        width: "40%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    header_leftText: {
        marginLeft: 5,
        color: "white",
        fontSize: 17,
    },
    header_right: {
        width: "30%",
    },
    header_rightImg: {
        width: "100%",
        height: 50,
        resizeMode: "cover",
    },
    mainItem: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
        paddingLeft: 15,
        paddingRight: 15,
    },
    mainItem_left_btn: {
        width: "45%",
    },
    mainItem_left: {
        width: "100%",
        height: 200,
    },
    mainItem_right: {
        width: "52%",
        justifyContent: "space-between",
    },
    mainItem_right_text: {
        width: "100%",
        color: "black",
        fontSize: 20,
        fontWeight: "600",
    },
    mainItem_right_bottom: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    mainItem_right_bottom_img: {
        width: "50%",
        height: 50,
        resizeMode: "contain",
    },
    mainItem_right_bottom_text: {
        color: "black",
        fontSize: 15,
    },
    mainTittle: {
        marginBottom: 15,
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    mainTittle_line: {
        width: "25%",
        height: 1,
        backgroundColor: "black",
        color: "black",
    },
    mainTittle_text: {
        width: "20%",
        textAlign: "center",
        fontSize: 19,
        color: "black",
        fontWeight: "bold",
        textTransform: "uppercase",
    }
  });