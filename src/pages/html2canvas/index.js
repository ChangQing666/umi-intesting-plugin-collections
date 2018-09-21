/*
*  title: html2canvas
*/

import React from 'react';
import styles from './index.scss';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode-react';
import Canvas2Image from '@/utils/canvas2image';
import QrReader from 'react-qr-reader';

class Html2canvasPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outputImg: '',
      showPoster: false,
      scannerResult: 'No result',
      delay: 300,
    };
  }

  handleGeneratePoster = () => {
    this.setState({
      showPoster: true,
    }, () => {
      html2canvas(document.querySelector('#preview'), { scale: 2, logging: false, useCORS: true }).then(canvas => {
        this.setState({ outputImg: canvas });
      });
    })
  };
  handleHidePoster = () => {
    this.setState({showPoster: false});
  }
  handleScan = (data) => {
    if(data){
      this.setState({result: data});
    }
  }
  handleError = (err) => {
    console.error(err);
  }
  openImageDialog = () => {
    this.qrReader1.openImageDialog();
  }
  handleSaveImg = () => {
    Canvas2Image.saveAsPNG(this.state.outputImg)
  }
  componentWillMount() {

  }

  componentDidMount() {
    console.log(1,window.location.href)
  }

  render() {
    const {showPoster} = this.state;
    return (
      <div>
        <h1>html2canvas</h1>
        {
          showPoster ?
            <>
              <div className={styles.mask} onClick={this.handleHidePoster}></div>
              <div className={styles.previewContainer}>
                <div className={styles.container} id='preview'>
                  <div className={styles.title}>
                    <h6>一炮</h6>
                    <p>今年各大互联网公司的是大法官滚滚滚很红火，发公告过过或或或或或苟富贵</p>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.item}>
                      <img src="http://img0.imgtn.bdimg.com/it/u=2465257967,4008934475&fm=15&gp=0.jpg" alt=""/>
                      <div>
                        <h6>高兴</h6>
                        <p>哇，突然是大法官法法规及嘎嘎嘎嘎嘎过改改，覆盖。发的广告费发郭德纲苟富贵，挂我看日哦日发发发个个故事梗概</p>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <img
                        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1649685198,2256367037&fm=200&gp=0.jpg"
                        alt=""/>
                      <div>
                        <h6>霸王鸡</h6>
                        <p>哇，突然是大法官，个个哈哈哈，恢复环境；来哇；路人，改，覆盖。发的广告费发郭德纲苟富贵，挂我看日哦日发发发个个故事梗概</p>
                      </div>
                    </div>
                    <div className={styles.qrcodeWrapper}>
                      <QRCode value={window.location.href}
                              fgColor='#0084ff'
                              bgColor='#fff'
                              size={90}
                              logo='https://static.clewm.net/cli/images/beautify_demo/concise/7.png'
                      />
                      <p>长按二维码查看详情 <br/>分享自知乎热榜</p>
                    </div>
                  </div>
                </div>
                <p>保存图片,叫小伙伴来围观吧</p>
                {/*<a className={styles.btnSave} href={this.state.outputImg} download={'知乎.png'}>保存</a>*/}
                <div className={styles.btnSave} onClick={this.handleSaveImg}>保存</div>
              </div>
            </>
            : null
        }
        <div className={styles.generatePoster}
             onClick={this.handleGeneratePoster}>生成海报</div>
        <div className={styles.qrScanner}
             onClick={this.openImageDialog}>扫描二维码</div>
        <QrReader
          ref={reader => this.qrReader1 = reader}
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          legacyMode
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}

export default Html2canvasPage;
