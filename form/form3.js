import React from 'react'
import { View, Text, SafeAreaView, ScrollView, FlatList, Image, StyleSheet,TouchableOpacity, Linking} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function form3() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.header}>
           <TouchableOpacity><Icon name="arrow-left" color="#30B55C" size={20} /></TouchableOpacity>
            <TouchableOpacity style={styles.header_Tittle_btn}><Text style={styles.header_Tittle_btn_text}>Hướng dẫn sử dụng</Text></TouchableOpacity>
            <Text></Text>
            </View>
            <ScrollView style={styles.main}>
            <View style={styles.main1}>
            <Image style={styles.main1_img} source={{uri: 'https://pccovid.gov.vn/WebPcCovid/Home/banner.png',}} />
            </View>
            <View style={styles.main2}>
            <Text style={styles.main2_Tittle}>Các tính năng chính của PC_covid 10</Text>
            <View style={styles.main2_List}>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Cấp quản lý mã QR cá nhân và địa điểm</Text>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Quét mã QR</Text>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Khai báo y tế</Text>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Khai báo di chuyển nội địa</Text>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Phản ánh của người dân</Text>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Thông tin tiêm vắc xin, Thông tin xét nghiệm</Text>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Thẻ thông tin Covid-19</Text>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Truy vết tiếp xúc gần</Text>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Bản đồ nguy cơ</Text>
            </View>
            </View>

            <View style={styles.main3}>
            <Image style={styles.main3_img} source={{uri: 'https://pccovid.gov.vn/WebPcCovid/Manual/personalqrcode.png',}} />
            <View style={styles.main3_text}>
            <Text style={styles.main3_text_tittle}>Mã qr cá nhân </Text>
            <Text style={styles.main3_text_info}>Mỗi người dân có 1 mã QR cá nhân duy nhất hiển thị thông tin liên quan đến phòng, chống dịch Covid-19 phù hợp với chiến lược phòng, chống dịch của Quốc gia.</Text>
            </View>
            </View>



            <View style={styles.main4}>
            <Image style={styles.main4_img} source={{uri: 'https://pccovid.gov.vn/WebPcCovid/Manual/healthdeclaration.png',}} />
            <View style={styles.main4_text}>
            <Text style={styles.main4_text_tittle}>Khai báo y tế </Text>
            <Text style={styles.main4_text_info}>Khi có các dấu hiệu như ho, sốt, mất vị giác… hoặc có liên quan, tiếp xúc người nghi nhiễm Covid-19, người dân cần chủ động khai báo y tế để được hỗ trợ và phát hiện sớm nguy cơ lây nhiễm.</Text>
            </View>
            </View>


            <View style={styles.main3}>
            <Image style={styles.main3_img} source={{uri: 'https://pccovid.gov.vn/WebPcCovid/Manual/domeastictransportation.png',}} />
            <View style={styles.main3_text}>
            <Text style={styles.main3_text_tittle}>Di chuyển nội địa</Text>
            <Text style={styles.main3_text_info}>Người dân cần khai báo thông tin khi có nhu cầu di chuyển nội địa trong nước. Từ đó các cơ quan chức năng quản lý được thông tin di chuyển, thông tin y tế, phục vụ việc phòng, chống dịch Covid-19.</Text>
            </View>
            </View>



            <View style={styles.main4}>
            <Image style={styles.main4_img} source={{uri: 'https://pccovid.gov.vn/WebPcCovid/Manual/reflect.png',}} />
            <View style={styles.main4_text}>
            <Text style={styles.main4_text_tittle}>Phản ánh </Text>
            <Text style={styles.main4_text_info}>Người dân có thể gửi phản ánh về thông tin dịch bệnh, các trường hợp nghi ngờ nhiễm bệnh, hay các vấn đề trong công tác thực hiện quy định, phòng chống dịch bệnh với cơ quan chức năng.</Text>
            </View>
            </View>


            <View style={styles.main4}>
            <Image style={styles.main4_img} source={{uri: 'https://pccovid.gov.vn/WebPcCovid/Manual/scanqr.png',}} />
            <View style={styles.main4_text}>
            <Text style={styles.main4_text_tittle}>Quét mã QR để kiểm soát vào ra</Text>
            <Text style={styles.main4_text_info}>Các địa điểm: Cơ quan, Siêu thị, Bệnh viện, Nơi công cộng… đăng ký mã QR địa điểm và phải đảm bảo khi người dân vào, ra địa điểm phải được quét mã QR. Việc quét mã QR này giúp công tác truy vết nhanh chóng, từ đó xác định được các nguy cơ lây nhiễm và khuyến cáo sớm cho người dân.</Text>
            </View>
            </View>


            <View style={styles.main3}>
            <Image style={styles.main3_img} source={{uri: 'https://pccovid.gov.vn/WebPcCovid/Manual/vaccine.png',}} />
            <View style={styles.main3_text}>
            <Text style={styles.main3_text_tittle}>Vaccine, kết quả xét nghiệm</Text>
            <Text style={styles.main3_text_info}>Người dân có thể xem thông tin chi tiết về số mũi vaccine mình đã tiêm, mũi tiêm gần nhất vào thời điểm nào. Ứng dụng PC-Covid cũng hiển thị kết quả xét nghiệm Covid-19 khi có kết quả xét nghiệm.</Text>
            </View>
            </View>


            <View style={styles.main4}>
            <Image style={styles.main4_img} source={{uri: 'https://pccovid.gov.vn/WebPcCovid/Manual/card.png',}} />
            <View style={styles.main4_text}>
            <Text style={styles.main4_text_tittle}>Thẻ thông tin Covid-19</Text>
            <Text style={styles.main4_text_info}>PC-Covid kết nối chặt chẽ với các hệ thống quản lý tiêm vaccine, xét nghiệm Covid-19, từ đó có thể cấp các Thẻ thông tin Covid-19 cho người dân. Một số ví dụ người dân có thể được cấp thẻ thông tin Covid-19 như: Đã tiêm đủ 2 mũi vaccine, đã xét nghiệm âm tính Covid-19 (có tác dụng ngắn hạn)…</Text>
            </View>
            </View>


            <View style={styles.main3}>
            <Image style={styles.main3_img1} source={{uri: 'https://pccovid.gov.vn/WebPcCovid/Manual/andress.png',}} />
            <View style={styles.main3_text}>
            <Text style={styles.main3_text_tittle}>Nơi đã đến</Text>
            <Text style={styles.main3_text_info}>Người dân có thể xem thông tin chi tiết về các địa điểm mình đã đến và có thực hiện việc quét mã QR khi vào ra. Các thông tin bao gồm nơi đã đến, thời gian đến (chi tiết thời gian từng lần quét mã QR).</Text>
            </View>
            </View>


            <View style={styles.main3}>
            <Image style={styles.main3_img1} source={{uri: 'https://pccovid.gov.vn/WebPcCovid/Manual/trace.png',}} />
            <View style={styles.main3_text}>
            <Text style={styles.main3_text_tittle}>Truy vết nhanh chóng</Text>
            <Text style={styles.main3_text_info}>PC-Covid cung cấp tổ hợp các thông tin về Quét mã QR, Khai báo y tế, Khai báo di chuyển nội địa, Phát hiện tiếp xúc gần,… kết hợp cùng hệ thống Truy vết thần tốc để cho ra kết quả truy vết các trường hợp liên quan đến ca nhiễm chỉ sau vài phút.</Text>
            </View>
            </View>


            <View style={styles.main3}>
            <Image style={styles.main3_img1} source={{uri: 'https://pccovid.gov.vn/WebPcCovid/Manual/map.png',}} />
            <View style={styles.main3_text}>
            <Text style={styles.main3_text_tittle}>Bản đồ nguy cơ</Text>
            <Text style={styles.main3_text_info}>Xem Bản đồ nguy cơ lây nhiễm của Covid-19 theo thời gian thực.</Text>
            </View>
            </View>


            <View style={styles.main3}>
            <Image style={styles.main3_img1} source={{uri: 'https://pccovid.gov.vn/WebPcCovid/Manual/supportplatform.png',}} />
            <View style={styles.main2}>
            <Text style={styles.main2_Tittle}>Các nền tảng hỗ trợ</Text>
            <View style={styles.main2_List}>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Nền tảng khai báo y tế và quản lý ra vào bằng mã QR</Text>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Nền tảng hỗ trợ lấy mẫu và trả kết quả xét nghiệm</Text>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Nền tảng quản lý tiêm chủng Covid-19.</Text>
                <Text style={styles.main2_List_item}> <Icon name="circle" color="#30B55C" size={15} /> Nền tảng hỗ trợ truy vết</Text>
            </View>
            </View>
            </View>


            <View style={styles.main3}>
            <Image style={styles.main3_img2} source={{uri: 'https://play-lh.googleusercontent.com/oRH3-waQR7nx82QdM_VCAsQi33FNRWDgKHGdKP15oO3CcT7BtVMbT6qihen47ZAyYig',}} />
            <View style={styles.main3_text}>
            <Text style={styles.main3_text_tittle}>Ứng dụng phòng, chống dịch Covid-19 Quốc gia</Text>
            <Text style={styles.main3_text_info}>Tính năng của PC-Covid sẽ liên tục được cập nhật, điều chỉnh theo chỉ đạo của Ban chỉ đạo Quốc gia phòng, chống dịch Covid-19, mang lại sự thuận tiện nhất cho người dân, phù hợp với chiến lược phòng, chống dịch Covid-19 của Quốc gia theo từng giai đoạn cụ thể. Các thông tin về sức khỏe, đi lại, tiếp xúc của người dân được quản lý tập trung, thống nhất và chỉ phục vụ cho mục đích phòng, chống dịch, bảo đảm an toàn thông tin, không được sử dụng vào bất kỳ mục đích nào khác.Việc nâng cấp ứng dụng PC-Covid được thực hiện tự động, đồng thời, hiển thị thông báo tới người dùng về sự chuyển tiếp này.</Text>
            </View>
            </View>

            <View style={styles.footer}>
                <View style={styles.footer_item1}><Text style={styles.footer_item1_text}>Chi tiết xem lại</Text><Text style={[styles.footer_item1_text, styles.footer_item1_text1]}>https://pccovid.gov.vn/</Text></View>
                <View style={styles.footer_item1}><Text style={styles.footer_item1_text}>Chi tiết xem lại</Text><Text style={[styles.footer_item1_text, styles.footer_item1_text1]}>https://pccovid.gov.vn/</Text></View>
                <View style={styles.footer_item2}><Text style={styles.footer_item1_text}>Chi tiết xem lại</Text><Text style={[styles.footer_item1_text, styles.footer_item1_text1]}>https://pccovid.gov.vn/</Text></View>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        zIndex: 99,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 70,
    },
    header: {
        width: "100%",
        position: "absolute",
        top: 0,
        zIndex: 99,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    header_Tittle_btn_text: {
        fontSize: 20,
        color: "#30B55C",
        fontWeight: "600",
        textTransform: "uppercase",
    },
    main: {
        width: "100%",
        zIndex: 1,
    },
    main1: {
        width: "100%",
        height: 200,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", 
    },
    main1_img: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
    },
    main2: {
        width:"100%",
        marginBottom: 15,
    },
    main2_Tittle: {
        width: "100%",
        fontSize: 30,
        lineHeight: 50,
        color: "black",
        fontWeight: "600",
        marginBottom: 20,
        textTransform: "uppercase",
        paddingTop: 15,
    },
    main2_List: {
        width: "100%",
    },
    main2_List_item: {
        width: "100%",
        marginBottom: 15,
        fontSize: 16,
        color: "black",
        flexDirection: "row",
        alignItems: "center",
    },
    main3: {
        width: "100%",
        marginBottom: 60,
        flexDirection: "column",
        alignItems: "center",
    },
    main3_img: {
        width: "100%",
        height: 400,
        resizeMode: "contain",
        marginBottom: 20,
    },
    main3_text: {
        width: "100%",
    },
    main3_text_tittle: {
        width: "100%",
        fontSize: 30,
        textTransform: "uppercase",
        color: "black",
        fontWeight: "600",
        marginBottom: 20,
    },
    main3_text_info: {
        width: "100%",
        fontSize: 18,
        lineHeight: 30,
        color: "black",
    },


    main4: {
        width: "100%",
        backgroundColor: "#30B55C",
        borderRadius: 10,
        padding: 10,
        marginBottom: 70,
    },
    main4_img: {
        width: "100%",
        height: 400,
        resizeMode: "contain",
        marginBottom: 20,
    },
    main4_text: {
        width: "100%",
    },
    main4_text_tittle: {
        width: "100%",
        fontSize: 30,
        textTransform: "uppercase",
        color: "white",
        fontWeight: "600",
        marginBottom: 20,
    },
    main4_text_info: {
        width: "100%",
        fontSize: 18,
        lineHeight: 30,
        color: "white",
    },
    main3_img1: {
        width: "100%",
        height: 150,
        resizeMode: "contain",
        marginBottom: 50,
    },
    main3_img2: {
        width: "70%",
        height: 300,
        marginBottom: 50,
    },
    footer: {
        width: "100%",
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#6b6b6b2e",
    },
    footer_item1: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    footer_item1_text:  {
        fontSize: 17,
        color: "black",
        paddingRight: 10,
        marginBottom: 10,
        fontWeight: "600",
    },
    footer_item2: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    footer_item1_text1:{
        color: "#30B55C",
    } 
  });
