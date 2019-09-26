import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PDFViewer, PDFDownloadLink, Document, Page, Link, View, Text, Font, StyleSheet } from '@react-pdf/renderer'
import ReactPDF from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    margin: 30,
    fontSize: 25,
    textAlign: 'left',
    backgroundColor: '#e4e4e4',
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
  },
  body: {
    flexGrow: 1,
  },
  row: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  block: {
    flexGrow: 1,
  },
  text: {
    width: 480,
    margin: 10,
    fontFamily: 'Helvetica',
    fontSize: '8',
    textAlign: 'justify',
    marginLeft: 5,
  },
  textW: {
    margin:4,
    fontFamily: 'Helvetica-Bold',
    fontSize: '8',
  },
  textb: {
    margin:0,
    width: "495",
    fontFamily: 'Helvetica',
    fontSize: '8',
  },
  textc: {
    margin:2,
    width: "460",
    fontFamily: 'Helvetica',
    fontSize: '8',
  },
  texttop: {
    margin: 8,
    fontFamily: 'Helvetica',
    fontSize: '9',
    textAlign: 'justify',
  },
  texttitle: {
    marginRight: 80,
    fontFamily: 'Helvetica',
    fontSize: '12',
    textAlign:'center'
  },
  red: {
    width: 11,
    height: 11,
    borderTopWidth: 1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderBottomWidth: 1,
    marginLeft:15,
    marginTop:27,
  },
  red2: {
    width: 11,
    height: 11,
    borderTopWidth: 1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderBottomWidth: 1,
    marginLeft:15,
    marginTop:15,
  },
  red3: {
    width: 11,
    height: 11,
    borderTopWidth: 1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderBottomWidth: 1,
    marginLeft:15,
    marginTop:7,
  },
  red4: {
    width: 11,
    height: 11,
    borderTopWidth: 1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderBottomWidth: 1,
    marginLeft:15,
    marginTop:7,
  },
  red5: {
    width: 11,
    height: 11,
    borderTopWidth: 1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderBottomWidth: 1,
    marginLeft:15,
    marginTop:35,
  },
  page: {
    margin: 40,
  },
  fill1: {
    lineHeight: 4,
  },
  table: {
    display: "table",
    width: "520",
    borderStyle: "1 solid black",
    borderWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
      marginBottom: 0,
      marginTop: 0,
  },
  tablebox: {
    display: "table",
    widthRight: "18",
    widthLeft: "20",
    height:"20",
    widthTop: "10",
    borderStyle: "1 solid black",
    borderWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: 2,
    marginBottom: 0,
    marginTop: 0,
  },
  tableC: {
    display: "table",
    paddingTop: 0,
    width: "520",
    borderStyle: "1 solid black",
    borderWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
      marginBottom: 0,
      marginTop: 0,
      marginRight: 7,
  },
  tableboxi: {
    display: "table",
    widthRight: "18",
    widthLeft: "20",
    height:"20",
    widthTop: "10",
    borderStyle: "1 solid black",
    borderWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: 10,
  },
  tableboxO: {
    display: "table",
    widthRight: "18",
    widthLeft: "20",
    height:"20",
    widthTop: "10",
    borderStyle: "1 solid black",
    borderWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: 7,
    marginLeft: 3,
  },
  tablehead: {
    display: "table",
    width: "515",
    borderStyle: "1 solid black",
    borderWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 1,
    marginTop: 3,
    marginRight: 7,
    marginLeft: 3,
  },
  tableColH: {
    width: "20%",
    borderStyle: "1 solid black",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    marginRight: 0,
  },
  tableColHin: {
    width: "100%",
    borderStyle: "1 solid black",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    marginRight: 0,
    marginTop: 3,
  },
  tableColHc: {
    width: "60%",
    borderStyle: "1 solid black",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    marginRight: 0,
  },
  tableCellH: {
    marginLeft: 1,
    fontSize: 10
  },
  tableCellHR: {
    marginTop: 1,
    marginLeft: 1,
    textAlign:'center' ,
    fontSize: 8
  },
  tableCellheadr: {
    marginTop: 0,
    marginLeft: 0,
    textAlign:'center' ,
    fontFamily: 'Helvetica-Bold',
    fontSize: '14',
  },
  tableCellheadsub: {
    marginTop: 0,
    marginLeft: 0,
    textAlign:'center' ,
    fontFamily: 'Helvetica-Bold',
    fontSize: '7',
  },
  tablebox1: {
    display: "table",
    widthRight: "18",
    height:"20",
    widthLeft: "20",
    widthTop: "10",
    borderStyle: "1 solid black",
    borderWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginRight: 2,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 10,
  },
  tableRow: {
    margin: 0,
    marginTop: 0,
    flexDirection: "row"
  },
  tableCol: {
    width: "45%",
    borderStyle: "1 solid black",
    borderWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    marginBottom: 0,
  },
  tableCell: {
    marginTop: 4,
    marginBottom: 10,
    fontSize: 8,
    textAlign: 'justify',
  },
  textWspec: {
    margin:0,
    fontFamily: 'Helvetica-Bold',
    fontSize: '15',
  },


});
Font.register({ family: 'Roboto', src: `${__dirname}/fonts/Roboto-Regular.ttf` });
Font.register(
  { family: 'Oswald', src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf' },
);

const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>

    <View style={styles.tablehead}>
      <View style={styles.tableRow}>
        <View style={styles.tableColH}>
        <View style={styles.tableColHin}>
          <Text style={styles.tableCellHR}>          (June 2019)1</Text>
        </View>
        <View style={styles.tableColHin}>
          <Text style={styles.tableCellHR}>          (June 2019)2</Text>
        </View>
        <View style={styles.tableColHin}>
          <Text style={styles.tableCellHR}>Department</Text>
        </View>
        <View style={styles.tableColHin}>
          <Text style={styles.tableCellHR}>Department </Text>
        </View>
        </View>
        <View style={styles.tableColHc}>
        <View style={styles.tableColHin}>
          <Text style={styles.tableCellheadr}>Request for Transcript of Tax Return</Text>
        </View>
        <View style={styles.tableColHin}>
          <Text style={styles.tableCellheadsub}>Do not sign this form unless all applicable lines have been completed.</Text>
        </View>
        <View style={styles.tableColHin}>
          <Text style={styles.tableCellheadsub}>Request may be rejected if the form is incomplete or illegible.</Text>
        </View>
        <View style={styles.tableColHin}>
          <Text style={styles.tableCellheadsub}> For more information about Form 4506-T, visit www.irs.gov/form4506t</Text>
        </View>
        </View>
        <View style={styles.tableColH}>
          <Text style={styles.tableCellHR}></Text>
        </View>
      </View>
    </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginRight: '75',
        }}
      />
    <Text style={styles.text}>  <Text style={styles.textW}>Tip.</Text>  Use Form 4506-T to order a transcript or other return information free of charge. See the product list below. You can quickly request transcripts by using
      our automated self-help service tools. Please visit us at IRS.gov and click on “Get a Tax Transcript...” under “Tools” or call 1-800-908-9946. If you need a copy
      of your return, use <Text style={styles.textW}> Form 4506, Request for Copy of Tax Return.</Text> There is a fee to get a copy of your return.
      </Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginRight: '75',
        }}
      />
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tablebox}>
                  <Text style={styles.textW}> 1a</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>Name shown on tax return. If a joint return, enter the name
shown first. </Text>
                </View>
                <View style={styles.tablebox1}>
                  <Text style={styles.textW}>1b</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.textW}>First social security number on tax return, individual taxpayer identification
number, or employer identification number (see instructions) </Text>
                </View>
              </View>
            </View>
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  marginRight: '75',
                }}
              />
              <View style={styles.table}>
                <View style={styles.tableRow}>
                  <View style={styles.tablebox}>
                    <Text style={styles.textW}> 2a</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>If a joint return, enter spouse’s name shown on tax return. </Text>
                  </View>
                  <View style={styles.tablebox1}>
                    <Text style={styles.textW}>2b</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.textW}>Second social security number or individual taxpayer
identification number if joint tax return </Text>
                  </View>
                </View>
              </View>
  <View
    style={{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginRight: '75',
    }}
  />
  <View style={styles.table}>
    <View style={styles.tableRow}>
      <View style={styles.tablebox}>
        <Text style={styles.textW}>3</Text>
      </View>
        <Text style={styles.textb}>Current name, address (including apt., room, or suite no.), city, state, and ZIP code (see instructions) </Text>
    </View>
    </View>
<View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginRight: '75',
  }}
/>
<View style={styles.table}>
  <View style={styles.tableRow}>
    <View style={styles.tablebox}>
      <Text style={styles.textW}>4</Text>
    </View>
      <Text style={styles.textb}>Previous address shown on the last return filed if different from line 3 (see instructions) </Text>
  </View>
  </View>
<View
    style={{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginRight: '75',
    }}
  />
  <View style={styles.table}>
    <View style={styles.tableRow}>
      <View style={styles.tablebox}>
        <Text style={styles.textW}>5</Text>
      </View>
        <Text style={styles.textb}>Customer file number (if applicable) (see instructions)</Text>
    </View>
    </View>
<View
    style={{
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      marginRight: '75',
    }}
  />
<Text style={styles.text}>
<Text style={styles.textW}> Note: </Text> Effective July 2019, the IRS will mail tax transcript requests only to your address of record.
See<Text style={styles.textW}>What’s New </Text> under <Text style={styles.textW}>Future Developments </Text>on
  Page 2 for additional information. </Text>


  <View style={styles.tableC}>
    <View style={styles.tableRow}>
      <View style={styles.tableboxi}>
        <Text style={styles.textW}>6</Text>
      </View>
        <Text style={styles.textb}><Text style={styles.textW}>Transcript requested.</Text> Enter the tax form number here (1040, 1065, 1120, etc.) and check the appropriate box below. Enter only one tax form
number per request. </Text>
    </View>
    </View>
<View style={styles.tableC}>
  <View style={styles.tableRow}>
    <View style={styles.tableboxO}>
      <Text style={styles.textW}>a</Text>
    </View>
      <Text style={styles.textc}><Text style={styles.textW}>Return Transcript,</Text> which includes most of the line items of a tax return as filed with the IRS. A tax return transcript does not reflect
changes made to the account after the return is processed. Transcripts are only available for the following returns: Form 1040 series,
Form 1065, Form 1120, Form 1120-A, Form 1120-H, Form 1120-L, and Form 1120S. Return transcripts are available for the current year
and returns processed during the prior 3 processing years. Most requests will be processed within 10 business days . . . . . . </Text>
<View style={styles.red} />
  </View>
  </View>
<View style={styles.tableC}>
  <View style={styles.tableRow}>
    <View style={styles.tableboxO}>
      <Text style={styles.textW}>b</Text>
    </View>
      <Text style={styles.textc}><Text style={styles.textW}>Account Transcript,</Text> which contains information on the financial status of the account, such as payments made on the account, penalty
assessments, and adjustments made by you or the IRS after the return was filed. Return information is limited to items such as tax liability
and estimated tax payments. Account transcripts are available for most returns. Most requests will be processed within 10 business days .</Text>
<View style={styles.red2} />
  </View>
  </View>
<View style={styles.tableC}>
  <View style={styles.tableRow}>
    <View style={styles.tableboxO}>
      <Text style={styles.textW}>c</Text>
    </View>
      <Text style={styles.textc}><Text style={styles.textW}>Record of Account,</Text> which provides the most detailed information as it is a combination of the Return Transcript and the Account
Transcript. Available for current year and 3 prior tax years. Most requests will be processed within 10 business days . . . . . .</Text>
<View style={styles.red3} />
  </View>
  </View>
<View style={styles.tableC}>
  <View style={styles.tableRow}>
    <View style={styles.tableboxi}>
      <Text style={styles.textW}>7</Text>
    </View>
      <Text style={styles.textc}><Text style={styles.textW}>Verification of Nonfiling, </Text>which is proof from the IRS that you did not file a return for the year. Current year requests are only available
after June 15th. There are no availability restrictions on prior year requests. Most requests will be processed within 10 business days . .</Text>
<View style={styles.red4} />
  </View>
  </View>
<View style={styles.tableC}>
  <View style={styles.tableRow}>
    <View style={styles.tableboxi}>
      <Text style={styles.textW}>8</Text>
    </View>
      <Text style={styles.textc}><Text style={styles.textW}>Form W-2, Form 1099 series, Form 1098 series, or Form 5498 series transcript</Text> The IRS can provide a transcript that includes data from
these information returns. State or local information is not included with the Form W-2 information. The IRS may be able to provide this
transcript information for up to 10 years. Information for the current year is generally not available until the year after it is filed with the IRS. For
example, W-2 information for 2016, filed in 2017, will likely not be available from the IRS until 2018. If you need W-2 information for retirement
purposes, you should contact the Social Security Administration at 1-800-772-1213. Most requests will be processed within 10 business days . </Text>
<View style={styles.red5}/>
  </View>
  </View>

  <Text style={styles.textc}><Text style={styles.textW}>Caution:</Text> If you need a copy of Form W-2 or Form 1099, you should first contact the payer. To get a copy of the Form W-2 or Form 1099 filed
  with your return, you must use Form 4506 and request a copy of your return, which includes all attachments.</Text>




    </Page>
  </Document>
);
class App extends React.Component<{}> {

  render() {
    return (
      <div>
        <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </div>
    )
  }
}


export default App;
