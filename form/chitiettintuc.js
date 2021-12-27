import React from 'react'
import { View, Text, SafeAreaView, ScrollView, FlatList, Image, StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
const DATA = [
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
export default function form2() {

    const header=()=>{
        return(
            <View style={styles.header}>
            <Text style={styles.headerTittle1}>Đà Nẵng lập trạm y tế điều trị F0 ở KCN, tiêm vaccine cho người dân tại nhà</Text>
            <Text style={styles.headerHour}>8 giờ trước</Text>
            <Text style={styles.headerTittle2}>(VTC News) - Đà Nẵng chỉ đạo ngành y tế tổ chức tiêm vaccine ngừa COVID-19 cho người dân ngay tại nhà và lập trạm y tế lưu động để điều trị F0 ở các khu công nghiệp.</Text>
            <Text style={styles.headerText}>
            Chỉ đạo tại cuộc họp Ban chỉ đạo phòng chống dịch COVID-19 tối 14/12, bà Ngô Thị Kim Yến, Phó Chủ tịch UBND TP Đà Nẵng chỉ đạo ngành y tế tổ chức tiêm vaccine ngừa COVID-19 cho người dân ngay tại nhà và lập trạm y tế lưu động điều trị F0 ở các khu công nghiệp.
            </Text>
            <Text style={styles.headerText}>
            Theo báo cáo của ngành y tế, đến ngày 14/12, Đà Nẵng đã tiêm mũi 1 cho 966.683 người và mũi 2 cho 919.501 người. Hiện vẫn còn một số trường hợp chưa được tiêm mũi 1 vaccine ngừa COVID-19 dù người dân mong muốn được tiêm. 
            </Text>
            <Text style={styles.headerText}>
            Vì vậy, Phó Chủ tịch UBND TP Đà Nẵng yêu cầu ngành y tế tổ chức các điểm tiêm vaccine ngừa COVID-19 lưu động để tiêm cho người dân. Lực lượng y tế phải đến tận nhà tiêm cho những trường hợp muốn tiêm nhưng không thể di chuyển đến các điểm tiêm.
            </Text>
            <Image style={styles.headerImg} source={{ uri: 'https://image.vtc.vn/resize/th/upload/2021/12/14/anh-khu-cong-nghiep-1-20160672.jpg',}} />
            <Text style={styles.headerImg_tieude}>Đà Nẵng yêu cầu lập các trạm y tế lưu động điều trị F0 là công nhân các khu công nghiệp.</Text>
            <Text style={styles.headerText}>
            Phó Chủ tịch UBND TP Đà Nẵng cũng chỉ đạo các đơn vị, địa phương phải rút kinh nghiệm và triển khai hiệu quả các biện pháp phòng, chống dịch khi xuất hiện các ca nhiễm là công nhân từ khu công nghiệp.
            </Text>
            <Text style={styles.headerText}>
            Trong đó, Ban Quản lý Khu công nghệ cao và các khu công nghiệp Đà Nẵng phải sớm thành lập trạm y tế lưu động tại Khu công nghiệp An Đồn (quận Sơn Trà) và Khu công nghiệp Hòa Khánh (quận Liên Chiểu) để cách ly, điều trị F0 là các công nhân.
            </Text>
            <Text style={styles.headerText}>
            Về cách ly F1 tại khu công nghiệp, bà Ngô Thị Kim Yến yêu cầu các đơn vị, địa phương đánh giá, nếu công nhân là F1 đủ điều kiện thì cho cách ly tại nhà, nơi lưu trú. Trường hợp không đủ điều kiện thì tổ chức cho công nhân cách ly tập trung tại các trường học chưa dạy học trực tiếp.
            </Text>
            <Text style={[styles.headerText, styles.headerEnd]}>
            Ngày 14/12, Đà Nẵng tiếp tục ghi nhận số F0 ở mức cao với 176 ca, trong đó có 6 ca cách ly tập trung, 67 ca cách ly tại nhà, 29 trong khu phong tỏa và 74 trường hợp chưa cách ly.
            </Text>

            <Text style={styles.mainTittle}>Tin khác</Text>
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
        <SafeAreaView style={styles.container}>
        <FlatList
         style={styles.main}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={header}
      />
      <View style={styles.headerTop}>
      <TouchableOpacity><Icon name="arrow-left" size={30} color="black" /></TouchableOpacity>
      <Image style={styles.headerTop_img} source={require("../picture/Báo_Pháp_Luật_TP.HCM.png")} />
      <TouchableOpacity><Icon name="bars" size={30} color="black" /></TouchableOpacity>
      </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    header: {
        width: "100%",
        marginTop: 70,
        paddingLeft: 10,
      paddingRight: 10,
    },
    headerTittle1: {
        width: "100%",
        fontWeight: "bold",
        fontSize: 30,
        color: "black",
        marginBottom: 20,
    },
    headerHour: {
        width: "100%",
        fontSize: 15,
        color: "black",
        marginBottom: 20,
    },
    headerTittle2: {
        width: "100%",
        fontWeight: "500",
        fontSize: 25,
        color: "black",
        marginBottom: 20,
    },
    headerText: {
        width: "100%",
        fontSize: 17,
        color: "black",
        marginBottom: 10,
        fontWeight: "400",
    },
    headerImg: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
        backgroundColor: "#f3f3f3",
    },
    headerImg_tieude: {
        width: "100%",
        textAlign: "center",
        fontSize: 15,
        backgroundColor: "#f3f3f3",
        marginBottom: 20,
    },
    headerEnd: {
        marginBottom: 40,
    },
    mainItem: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
        paddingLeft: 7,
        paddingRight: 7,
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
        fontSize: 18,
        paddingLeft: 5,
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
    },
    headerTop: {
        width: "100%",
        position: "absolute",
        top: 0,
        backgroundColor: "#ede8e8",
        zIndex: 99,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    headerTop_img: {
        width: "30%",
        height: 50,
        resizeMode: "contain",
    }
  });
